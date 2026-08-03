/**
 * Pont entre notre bandeau de consentement et Google Consent Mode v2.
 *
 * La fonction globale `gtag` est définie par le script GTM du layout racine.
 * Quand le visiteur accepte/refuse dans le bandeau, on pousse la mise à jour des
 * signaux de consentement ; GTM ne déclenche alors les balises que si autorisé.
 */

type ConsentChoice = { analytics: boolean; marketing: boolean };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function pushConsentUpdate(consent: ConsentChoice | null): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const analytics = consent?.analytics ? "granted" : "denied";
  const ads = consent?.marketing ? "granted" : "denied";

  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
}
