/**
 * Petit store externe adossé à localStorage, consommé via useSyncExternalStore.
 *
 * Passer par un store plutôt que par un effet évite le rendu intermédiaire où le
 * bandeau apparaîtrait à un visiteur ayant déjà fait son choix, et garde les
 * onglets ouverts synchronisés.
 */

/** Clé localStorage du choix. Partagée avec le script d'amorçage du Consent Mode. */
export const STORAGE_KEY = "a7-cookie-consent";

/**
 * Durée de validité du consentement : 13 mois, conformément à la recommandation
 * CNIL. Passé ce délai, le choix est ignoré et le bandeau réapparaît.
 */
export const CONSENT_MAX_AGE_MS = 396 * 24 * 60 * 60 * 1000;

export type Consent = {
  analytics: boolean;
  marketing: boolean;
  /** Date ISO du choix, qui sert à mesurer les 13 mois de validité. */
  decidedAt: string;
};

const listeners = new Set<() => void>();

// useSyncExternalStore compare les snapshots par identité : on met en cache la
// chaîne brute, qui elle se compare par valeur.
let snapshot: string | null = null;
let snapshotLoaded = false;

function readStorage(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Stockage indisponible (navigation privée, cookies bloqués) : on redemandera.
    return null;
  }
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // Un autre onglet peut modifier le choix ; l'événement storage nous en informe.
  window.addEventListener("storage", invalidate);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", invalidate);
  };
}

function invalidate() {
  snapshotLoaded = false;
  for (const listener of listeners) listener();
}

export function getSnapshot(): string | null {
  if (!snapshotLoaded) {
    snapshot = readStorage();
    snapshotLoaded = true;
  }
  return snapshot;
}

/** Côté serveur, aucun choix n'est connu : le bandeau ne doit pas être prérendu. */
export function getServerSnapshot(): string | null {
  return null;
}

/**
 * Relit le choix stocké. Renvoie null si la valeur est absente, illisible,
 * malformée (localStorage est modifiable par le visiteur) ou périmée.
 */
export function parseConsent(raw: string | null, now: number = Date.now()): Consent | null {
  if (!raw) return null;

  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!isConsent(value)) return null;

  const age = now - Date.parse(value.decidedAt);
  // NaN (date illisible) échoue les deux comparaisons : le choix est redemandé.
  if (!(age >= 0 && age < CONSENT_MAX_AGE_MS)) return null;

  return value;
}

function isConsent(value: unknown): value is Consent {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.analytics === "boolean" &&
    typeof candidate.marketing === "boolean" &&
    typeof candidate.decidedAt === "string"
  );
}

export function saveConsent(choice: Omit<Consent, "decidedAt">): void {
  const next: Consent = { ...choice, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Le choix vaudra au moins pour la session en cours.
  }
  invalidate();
}
