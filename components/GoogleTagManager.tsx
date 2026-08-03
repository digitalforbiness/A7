import Script from "next/script";
import { consentBootstrapScript } from "@/lib/consent-mode";

/**
 * Conteneur Google Tag Manager, branché sur le Consent Mode v2.
 *
 * Volontairement écrit à la main plutôt qu'avec `@next/third-parties` : ce
 * composant charge GTM *après* avoir posé l'état de consentement par défaut,
 * l'ordre exact qu'impose le Consent Mode. Un `<GoogleTagManager />` importé du
 * paquet chargerait le conteneur sans cette garantie, et une balise pourrait
 * partir avant que le choix du visiteur soit connu.
 *
 * L'identifiant vient de l'environnement (voir `.env.example`) : sans lui, rien
 * n'est injecté — un `npm run dev` ou une préversion n'envoie donc aucune mesure.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

export default function GoogleTagManager() {
  if (!GTM_ID) return null;

  // L'identifiant est interpolé dans du HTML et du JavaScript : on le valide au
  // build plutôt que de laisser une coquille casser la mesure en silence.
  if (!GTM_ID_PATTERN.test(GTM_ID)) {
    throw new Error(`NEXT_PUBLIC_GTM_ID invalide : "${GTM_ID}" (format attendu : GTM-XXXXXXX)`);
  }

  return (
    <>
      {/* (1) Consentement : script inline volontairement hors `next/script`.
          `beforeInteractive` passerait par la file d'attente du runtime Next
          (`__next_s`) ; ici le code s'exécute dès l'analyse du HTML, sans
          dépendre d'aucun bundle, donc toujours avant le chargement du
          conteneur ci-dessous. */}
      <script dangerouslySetInnerHTML={{ __html: consentBootstrapScript() }} />

      {/* (2) Conteneur GTM : snippet officiel, chargé une fois la page interactive. */}
      <Script id="gtm" strategy="afterInteractive">
        {gtmLoaderScript(GTM_ID)}
      </Script>

      {/* Repli sans JavaScript : la mesure de page reste possible. */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}

/** Snippet de chargement GTM officiel, mis en forme et paramétré. */
function gtmLoaderScript(gtmId: string): string {
  return `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', '${gtmId}');`;
}
