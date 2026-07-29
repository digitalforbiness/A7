# A7 Emailing

Site vitrine d'A7 Emailing — routage SaaS, monétisation de données et automation IA.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
```

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (les 11 pages sont générées en statique) |
| `npm run start` | Sert le build de production |
| `npm run lint` | ESLint |
| `npm run icons` | Régénère le sous-ensemble de police Material Symbols |

## Organisation

```
app/
  layout.tsx              Header, Footer, polices, consentement cookies, métadonnées
  page.tsx                Accueil (offre e-commerce)
  entreprise/ architecture/ automation-ia/ monetisation/ tarifs/ nos-clients/
  contact/                Formulaire + coordonnées directes
  cgu/ cgv/ mentions-legales/ politique-cookies/ politique-confidentialite/
  api/contact/            Stub — à brancher sur le fournisseur d'e-mail
  api/souscription/       Stub — à brancher sur le prestataire de paiement
  globals.css             Design tokens A7 + classes héritées des maquettes
components/               Header, Footer, Logo, Accordion, ContactForm, CookieConsent…
lib/
  navigation.ts           Source unique des routes et des coordonnées
  clients.ts              Mur de logos clients
  cookie-consent-store.ts Store localStorage du consentement
reference/                Maquettes HTML d'origine, conservées pour comparaison
```

## Points à connaître

**Navigation** — `lib/navigation.ts` alimente le header, le menu mobile et le footer.
Ajouter une page revient à créer son dossier dans `app/` puis à compléter ce fichier.

**Contact** — tous les appels à l'action commerciaux pointent vers `/contact`. Le
formulaire poste vers `app/api/contact/route.ts`, un stub qui valide la saisie mais
n'expédie pas encore d'e-mail : brancher un fournisseur (Resend, SMTP…) avant la mise
en ligne, sinon les messages ne sont pas transmis.

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
`/tarifs` poste vers `app/api/souscription/route.ts`, qui doit créer une session chez
le prestataire (Stripe Checkout ou équivalent) et rediriger vers sa page hébergée.
