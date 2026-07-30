# A7 Emailing

Site vitrine d'A7 Emailing — routage SaaS, monétisation de données et automation IA.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. **Export 100 % statique,
sans backend**, déployé sur GitHub Pages.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
```

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Export statique → dossier `out/` |
| `npm run lint` | ESLint |
| `npm run icons` | Régénère le sous-ensemble de police Material Symbols |

Le site étant exporté en statique (`output: "export"`), il n'y a pas de serveur :
prévisualiser le build avec `npx serve out`.

## Organisation

```
app/
  layout.tsx              Header, Footer, polices, consentement cookies, métadonnées
  page.tsx                Accueil (offre e-commerce)
  entreprise/ architecture/ automation-ia/ monetisation/ tarifs/ nos-clients/
  contact/                Formulaire + coordonnées directes
  cgu/ cgv/ mentions-legales/ politique-cookies/ politique-confidentialite/
  not-found.tsx           Page 404 (exportée en out/404.html)
  globals.css             Design tokens A7 + classes héritées des maquettes
components/               Header, Footer, Logo, Accordion, ContactForm, SubscriptionForm…
lib/
  navigation.ts           Routes, coordonnées et clé Web3Forms
  submit-form.ts          Envoi de formulaire via Web3Forms (repli mailto)
  clients.ts              Mur de logos clients
  cookie-consent-store.ts Store localStorage du consentement
public/
  CNAME                   Domaine GitHub Pages
  .nojekyll               Empêche Jekyll d'ignorer le dossier _next/
.github/workflows/
  deploy.yml              Build + déploiement GitHub Pages
reference/                Maquettes HTML d'origine, conservées pour comparaison
```

## Points à connaître

**Navigation** — `lib/navigation.ts` alimente le header, le menu mobile et le footer.
Ajouter une page revient à créer son dossier dans `app/` puis à compléter ce fichier.

**Formulaires (sans backend)** — le formulaire de contact et la demande de souscription
passent par [Web3Forms](https://web3forms.com), un service qui transforme une soumission
en e-mail sans serveur. Tant que la clé n'est pas renseignée, ils basculent sur le client
mail du visiteur (`mailto:`), donc rien n'est perdu.

> **Avant la mise en ligne** : créer une clé gratuite sur web3forms.com avec
> `contact@a7emailing.com` et la coller dans `WEB3FORMS_ACCESS_KEY`
> ([lib/navigation.ts](lib/navigation.ts)).

**Design system** — les tokens de `reference/a7_digital_identity/DESIGN.md` sont portés
dans le bloc `@theme` de `app/globals.css`. Les classes utilitaires nommées
(`px-margin-desktop`, `text-display-lg`, `max-w-container-max`…) en découlent
directement, ce qui permet aux maquettes d'origine de fonctionner telles quelles.

**Icônes** — Material Symbols est auto-hébergé et réduit aux seules icônes utilisées
(7,6 Ko au lieu de ~3,5 Mo). Après avoir ajouté une icône dans une page, lancer
`npm run icons`, sinon elle s'affiche en toutes lettres.

**Logo** — `components/Logo.tsx` est un logotype SVG de substitution : le logo des
maquettes pointait vers une URL temporaire aujourd'hui inaccessible. Déposer le vrai
fichier dans `public/` et remplacer le SVG par un `<Image />`.

**Images** — les visuels sont générés par IA et servis depuis `public/images/`. Les
logos de moyens de paiement (`img-05`, `img-09`, `img-13`, `img-24`) imitent des
marques déposées et doivent être remplacés par les fichiers officiels avant mise en
ligne.

**Paiement** — aucune donnée bancaire n'est saisie sur le site. Le formulaire de
`/tarifs` transmet une demande de souscription (via Web3Forms) ; un conseiller recontacte
le prospect pour finaliser le règlement.

## Déploiement (GitHub Pages)

À chaque push sur `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
construit l'export statique et le publie sur GitHub Pages. Pour l'activer :

1. Dépôt → **Settings → Pages → Source : GitHub Actions**.
2. Domaine personnalisé : ajuster [`public/CNAME`](public/CNAME) (actuellement
   `a7emailing.com`) et faire pointer le DNS vers GitHub Pages.
3. Renseigner la clé Web3Forms (voir ci-dessus) pour activer les formulaires.

Sans domaine personnalisé (publication sur `username.github.io/<repo>`), supprimer le
`CNAME` et décommenter `basePath` dans [`next.config.ts`](next.config.ts).
