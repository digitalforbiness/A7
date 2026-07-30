"use client";

import { setOfferId } from "@/lib/selected-offer-store";

/**
 * Bouton « Choisir » d'une offre : mémorise l'offre sélectionnée puis renvoie au
 * récapitulatif (#paiement), qui se met à jour en conséquence.
 */
export default function ChooseOfferButton({
  offerId,
  className,
  children,
}: {
  offerId: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href="#paiement" className={className} onClick={() => setOfferId(offerId)}>
      {children}
    </a>
  );
}
