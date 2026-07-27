/**
 * Source unique de vérité pour la navigation du site.
 * Toute page ajoutée ici apparaît automatiquement dans le header et le footer.
 */

export type NavLink = {
  href: string;
  label: string;
};

/** Liens principaux — header desktop, menu mobile et colonne "Nos services". */
export const mainNav: NavLink[] = [
  { href: "/", label: "E-commerce" },
  { href: "/monetisation", label: "Monétisation" },
  { href: "/automation-ia", label: "Automation & IA" },
  { href: "/architecture", label: "Architecture" },
  { href: "/nos-clients", label: "Références" },
  { href: "/entreprise", label: "Entreprise" },
];

/**
 * Page contact — cible unique de tous les appels à l'action commerciaux
 * ("Nous contacter", "Parler à un expert", "Voir la démo"…). Mise en avant
 * dans le header et rappelée dans le footer.
 */
export const contactRoute = "/contact";

/** Colonne "Démarche qualité" du footer. Ces pages restent à écrire. */
export const qualityNav: NavLink[] = [
  { href: "/tarifs", label: "Tarifs & paiement" },
  { href: "/cgv", label: "Conditions de vente" },
  { href: "/cgu", label: "Conditions d'utilisation" },
  { href: "/politique-cookies", label: "Conformité RGPD" },
];

/** Barre légale en bas de footer. */
export const legalNav: NavLink[] = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/cgv", label: "CGV" },
  { href: "/politique-cookies", label: "Cookies" },
];

/** Coordonnées, référencées partout plutôt que réécrites page par page. */
export const contact = {
  phone: "01 83 64 16 16",
  phoneHref: "tel:+33183641616",
  email: "contact@a7emailing.com",
  addressLines: ["20 avenue de Fontvieille", "98000 Monaco"],
} as const;

/**
 * Vrai si `href` correspond à la route courante.
 * L'accueil doit matcher exactement, sinon il serait actif sur toutes les pages.
 */
export function isActive(href: string, pathname: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
