/**
 * État partagé de l'offre sélectionnée sur la page tarifs.
 *
 * Les boutons « Choisir » (haut de page) et le récapitulatif de souscription
 * (plus bas) sont éloignés dans le DOM ; ce petit store, consommé via
 * useSyncExternalStore, les relie sans transformer toute la page en composant
 * client. Même principe que le store de consentement cookies.
 */
import { DEFAULT_OFFER_ID } from "./offers";

let currentOfferId = DEFAULT_OFFER_ID;
const listeners = new Set<() => void>();

export function subscribeOffer(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getOfferId(): string {
  return currentOfferId;
}

/** Au prérendu statique, aucune sélection : on affiche l'offre par défaut. */
export function getServerOfferId(): string {
  return DEFAULT_OFFER_ID;
}

export function setOfferId(id: string): void {
  if (id === currentOfferId) return;
  currentOfferId = id;
  for (const listener of listeners) listener();
}
