/**
 * Mur de logos clients.
 *
 * Les maquettes affichaient 55 tuiles, dont 50 réutilisaient la même image de
 * substitution — désormais indisponible. Seuls les visuels réellement présents
 * dans public/images sont conservés ici : ajouter un client revient à déposer
 * son logo puis à compléter cette liste.
 */

export const CLIENT_CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "retail", label: "Retail" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "agency", label: "Agences marketing" },
] as const;

export type ClientCategory = (typeof CLIENT_CATEGORIES)[number]["id"];

export type Client = {
  name: string;
  logo: string;
  category: Exclude<ClientCategory, "tous">;
};

export const clients: Client[] = [
  { name: "Enseigne retail premium", logo: "/images/img-06.png", category: "retail" },
  { name: "Grand magasin national", logo: "/images/img-07.png", category: "retail" },
  { name: "Marketplace mode", logo: "/images/img-14.png", category: "ecommerce" },
  { name: "Agence média digitale", logo: "/images/img-19.png", category: "agency" },
  { name: "Pure player e-commerce", logo: "/images/img-25.png", category: "ecommerce" },
];
