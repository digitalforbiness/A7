"use client";

import Link from "next/link";
import { setOfferId } from "@/lib/selected-offer-store";

/**
 * Bouton de tarif menant, depuis une autre page (l'accueil), au récapitulatif
 * de souscription de /tarifs avec l'offre présélectionnée.
 *
 * On passe par next/link (navigation client) : le store d'offre, écrit au clic,
 * survit à la navigation, si bien que le récapitulatif s'ouvre sur la bonne
 * offre. Un simple <a> rechargerait la page et réinitialiserait la sélection.
 */
export default function ChooseOfferLink({
  offerId,
  className,
  children,
}: {
  offerId: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href="/tarifs#paiement" className={className} onClick={() => setOfferId(offerId)}>
      {children}
    </Link>
  );
}
