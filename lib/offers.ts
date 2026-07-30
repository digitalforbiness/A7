/** Offres d'abonnement présentées sur la page tarifs. */

export type Offer = {
  id: string;
  name: string;
  /** Prix mensuel hors taxes, en euros. */
  priceHT: number;
};

/** Offres à prix fixe, sélectionnables dans le récapitulatif de souscription. */
export const OFFERS: Record<string, Offer> = {
  // E-Commerce
  eshop: { id: "eshop", name: "E-shop & TPE", priceHT: 297 },
  eboutique: { id: "eboutique", name: "E-boutique", priceHT: 497 },
  eretailer: { id: "eretailer", name: "E-retailer", priceHT: 897 },
  // Monétisation
  editeur: { id: "editeur", name: "Editeur de sites", priceHT: 897 },
  performance: { id: "performance", name: "Marketing Performance", priceHT: 1297 },
  regie: { id: "regie", name: "Régie multi-bases", priceHT: 1997 },
};

/** Offre affichée par défaut, avant toute sélection (la plus populaire). */
export const DEFAULT_OFFER_ID = "eboutique";

export const VAT_RATE = 0.2;

/** Montants HT, TVA et TTC d'une offre. */
export function priceParts(offer: Offer) {
  const ht = offer.priceHT;
  const vat = ht * VAT_RATE;
  return { ht, vat, ttc: ht + vat };
}

/** Formate un montant en euros à la française, de façon déterministe. */
export function euro(amount: number): string {
  return `${amount.toFixed(2).replace(".", ",")} €`;
}
