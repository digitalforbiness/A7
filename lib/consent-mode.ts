/**
 * Google Consent Mode v2 — source unique des signaux de consentement.
 *
 * Deux moments distincts partagent la même table de correspondance :
 *   1. l'amorçage, injecté en clair dans le <head> (`consentBootstrapScript`),
 *      qui pose l'état par défaut « denied » puis restaure le choix stocké
 *      AVANT que le conteneur GTM ne se charge ;
 *   2. les changements en direct depuis le bandeau (`pushConsentUpdate`).
 *
 * Les deux écrivent dans le même `dataLayer` : GTM ne déclenche une balise que
 * si les signaux dont elle dépend sont « granted ».
 */

import { CONSENT_MAX_AGE_MS, STORAGE_KEY } from "./cookie-consent-store";

/** Ce que le bandeau sait dire : deux cases à cocher. */
export type ConsentChoice = { analytics: boolean; marketing: boolean };

type ConsentPurpose = keyof ConsentChoice;

/**
 * Signaux Google pilotés par chaque case. Modifier cette table suffit : le
 * script d'amorçage la sérialise et l'applique avec exactement la même logique.
 */
const SIGNALS_BY_PURPOSE = {
  analytics: ["analytics_storage"],
  marketing: ["ad_storage", "ad_user_data", "ad_personalization"],
} as const satisfies Record<ConsentPurpose, readonly string[]>;

type ConsentSignalName = (typeof SIGNALS_BY_PURPOSE)[ConsentPurpose][number];

type ConsentSignals = Record<ConsentSignalName, "granted" | "denied">;

/** Laisse à GTM 500 ms pour attendre la restauration du choix avant de tirer. */
const WAIT_FOR_UPDATE_MS = 500;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function toConsentSignals(consent: ConsentChoice | null): ConsentSignals {
  const signals = {} as ConsentSignals;
  for (const purpose of Object.keys(SIGNALS_BY_PURPOSE) as ConsentPurpose[]) {
    for (const signal of SIGNALS_BY_PURPOSE[purpose]) {
      signals[signal] = consent?.[purpose] ? "granted" : "denied";
    }
  }
  return signals;
}

/**
 * GTM attend les commandes `consent` sous la forme d'un objet `arguments`, pas
 * d'un tableau : on redéfinit donc `gtag` ici plutôt que d'appeler celui du
 * script d'amorçage, pour ne dépendre d'aucun ordre de chargement.
 */
const gtag = function () {
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer ??= []).push(arguments);
} as (command: "consent", action: "default" | "update", signals: ConsentSignals) => void;

/** Répercute le choix du bandeau vers GTM. Sans effet côté serveur. */
export function pushConsentUpdate(consent: ConsentChoice | null): void {
  if (typeof window === "undefined") return;

  gtag("consent", "update", toConsentSignals(consent));
  // Point d'accroche pour les balises qui doivent (re)partir après le choix.
  (window.dataLayer ??= []).push({ event: "consent_update" });
}

/**
 * Code exécuté en tête de page, avant le conteneur GTM. Écrit en JavaScript
 * « à la main » (pas de bundle disponible à ce stade) mais alimenté par les
 * constantes du module : clé de stockage, durée de validité et table des
 * signaux restent définies à un seul endroit.
 */
export function consentBootstrapScript(): string {
  const defaults = { ...toConsentSignals(null), wait_for_update: WAIT_FOR_UPDATE_MS };

  return `(function (w) {
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  w.gtag = gtag;
  gtag('consent', 'default', ${JSON.stringify(defaults)});
  // Tant que la publicité est refusée, Google retire les identifiants de clic.
  gtag('set', 'ads_data_redaction', true);
  try {
    var raw = w.localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    var choice = raw ? JSON.parse(raw) : null;
    var age = choice ? Date.now() - Date.parse(choice.decidedAt) : NaN;
    if (choice && age >= 0 && age < ${CONSENT_MAX_AGE_MS}) {
      var signalsByPurpose = ${JSON.stringify(SIGNALS_BY_PURPOSE)};
      var update = {};
      for (var purpose in signalsByPurpose) {
        for (var i = 0; i < signalsByPurpose[purpose].length; i++) {
          update[signalsByPurpose[purpose][i]] = choice[purpose] ? 'granted' : 'denied';
        }
      }
      gtag('consent', 'update', update);
    }
  } catch (e) {
    // Stockage indisponible (navigation privée) : on reste sur « denied ».
  }
})(window);`;
}
