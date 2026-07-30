"use client";

import { useSyncExternalStore } from "react";
import { euro, OFFERS, priceParts, VAT_RATE } from "@/lib/offers";
import { getOfferId, getServerOfferId, subscribeOffer } from "@/lib/selected-offer-store";
import SubscriptionForm from "./SubscriptionForm";

/**
 * Récapitulatif de souscription : reflète l'offre choisie via les boutons
 * « Choisir » (nom, montant HT, TVA, total) et transmet cette offre au
 * formulaire, pour qu'elle figure dans l'e-mail reçu.
 */
export default function PaymentSummary() {
  const offerId = useSyncExternalStore(subscribeOffer, getOfferId, getServerOfferId);
  const offer = OFFERS[offerId] ?? OFFERS.eboutique;
  const { ht, vat, ttc } = priceParts(offer);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-border-subtle">
      <div className="mb-8 pb-6 border-b border-border-subtle">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-md text-headline-md text-deep-purple">Récapitulatif</h3>
          <span className="bg-primary/10 text-primary text-label-sm font-label-sm px-3 py-1 rounded uppercase">
            {offer.name}
          </span>
        </div>
        <div className="flex justify-between text-body-md text-text-main mb-2">
          <span>Abonnement mensuel</span> <span>{euro(ht)}</span>
        </div>
        <div className="flex justify-between text-body-md text-text-main mb-2">
          <span>TVA ({Math.round(VAT_RATE * 100)}%)</span> <span>{euro(vat)}</span>
        </div>
        <div className="flex justify-between text-headline-md font-bold text-deep-purple mt-4">
          <span>Total mensuel</span> <span>{euro(ttc)}</span>
        </div>
      </div>
      <SubscriptionForm offer={offer} />
    </div>
  );
}
