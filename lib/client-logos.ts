export type ClientCategory = "retail" | "conso" | "media" | "services";

export type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: ClientCategory;
};

/** Onglets de filtre du mur de références ("tous" = aucun filtre). */
export const CLIENT_CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "retail", label: "Retail & e-commerce" },
  { id: "conso", label: "Grande consommation" },
  { id: "media", label: "Média & loisirs" },
  { id: "services", label: "Services & industrie" },
] as const;

export type FilterId = (typeof CLIENT_CATEGORIES)[number]["id"];

/**
 * Logos clients — source unique du bandeau de l'accueil et du mur de la page
 * Références. Pour ajouter un client : déposer son logo dans
 * public/images/clients/ puis ajouter une entrée ici.
 */
export const clientLogos: ClientLogo[] = [
  { src: "/images/clients/blancheporte.webp", alt: "Blancheporte", width: 1280, height: 720, category: "retail" },
  { src: "/images/clients/brandalley.png", alt: "BrandAlley", width: 400, height: 200, category: "retail" },
  { src: "/images/clients/galeries-lafayette.webp", alt: "Galeries Lafayette", width: 995, height: 560, category: "retail" },
  { src: "/images/clients/shanghai-tang.png", alt: "Shanghai Tang", width: 320, height: 320, category: "retail" },
  { src: "/images/clients/vistaprint.png", alt: "Vistaprint", width: 770, height: 165, category: "retail" },
  { src: "/images/clients/fanta.png", alt: "Fanta", width: 1280, height: 985, category: "conso" },
  { src: "/images/clients/mms.png", alt: "M&M's", width: 3840, height: 2160, category: "conso" },
  { src: "/images/clients/nutella.webp", alt: "Nutella", width: 1900, height: 1100, category: "conso" },
  { src: "/images/clients/signal.webp", alt: "Signal", width: 1024, height: 460, category: "conso" },
  { src: "/images/clients/nrj.png", alt: "NRJ", width: 860, height: 847, category: "media" },
  { src: "/images/clients/tele-z.webp", alt: "Télé Z", width: 1280, height: 518, category: "media" },
  { src: "/images/clients/meetic.webp", alt: "Meetic", width: 3840, height: 1253, category: "media" },
  { src: "/images/clients/center-parcs.png", alt: "Center Parcs", width: 5145, height: 1761, category: "media" },
  { src: "/images/clients/golden-tulip.png", alt: "Golden Tulip", width: 5000, height: 3145, category: "media" },
  { src: "/images/clients/assurland.png", alt: "Assurland", width: 679, height: 382, category: "services" },
  { src: "/images/clients/renault.png", alt: "Renault", width: 3840, height: 2160, category: "services" },
];
