/**
 * Conteneur Google Tag Manager, chargé sans condition.
 *
 * Le composant est le premier enfant de `<body>` : le script s'exécute dès
 * l'analyse du HTML, au plus tôt, comme le demande la procédure d'installation
 * fournie par GTM. Aucun signal de consentement n'est posé — les balises du
 * conteneur partent pour tous les visiteurs, quel que soit le choix affiché
 * dans le bandeau cookies.
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
      {/* Snippet officiel, volontairement en clair plutôt qu'avec `next/script` :
          aucune stratégie de chargement ne s'interpose, le conteneur part
          immédiatement. */}
      <script dangerouslySetInnerHTML={{ __html: gtmLoaderScript(GTM_ID) }} />

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
