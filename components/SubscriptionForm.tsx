"use client";

import Link from "next/link";
import { useState } from "react";
import { euro, type Offer, priceParts } from "@/lib/offers";
import { submitContact } from "@/lib/submit-form";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full bg-surface-gray border border-border-subtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

/**
 * Demande de souscription. Sans backend ni prestataire de paiement branché, le
 * formulaire transmet la demande (via Web3Forms, repli mailto) : un conseiller
 * recontacte le prospect pour finaliser. Aucune donnée bancaire n'est collectée.
 */
export default function SubscriptionForm({ offer }: { offer?: Offer }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    // L'offre choisie voyage dans l'objet et le corps de l'e-mail.
    const offerLine = offer
      ? `${offer.name} — ${euro(priceParts(offer).ttc)}/mois TTC`
      : "Non précisée";
    try {
      await submitContact({
        subject: offer
          ? `Demande de souscription A7 — ${offer.name}`
          : "Demande de souscription A7",
        Offre: offerLine,
        Entreprise: (form.elements.namedItem("societe") as HTMLInputElement).value,
        Email: (form.elements.namedItem("email") as HTMLInputElement).value,
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="text-center py-8">
        <span className="material-symbols-outlined text-vibrant-orange text-5xl">check_circle</span>
        <h3 className="font-headline-md text-headline-md text-deep-purple mt-4 mb-2">
          Demande envoyée
        </h3>
        <p className="text-body-md text-text-muted">
          Merci&nbsp;! Un conseiller vous recontacte sous 24&nbsp;heures ouvrées pour activer votre
          offre et finaliser le règlement.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label
          htmlFor="societe"
          className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
        >
          Nom de l&apos;entreprise
        </label>
        <input
          id="societe"
          name="societe"
          type="text"
          required
          autoComplete="organization"
          placeholder="SARL E-Boutique"
          className={inputClasses}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
        >
          Email professionnel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="contact@votre-entreprise.com"
          className={inputClasses}
        />
      </div>
      <div className="flex items-start gap-3 p-4 rounded-lg bg-surface-gray border border-border-subtle">
        <span className="material-symbols-outlined text-primary">lock</span>
        <p className="text-body-md text-text-muted">
          Aucune donnée bancaire n&apos;est saisie sur ce site. Un conseiller vous recontacte pour
          finaliser le règlement de façon sécurisée.
        </p>
      </div>
      <div className="flex items-start gap-3 text-body-md text-text-muted">
        <input
          id="conditions"
          name="conditions"
          type="checkbox"
          required
          className="mt-1 rounded text-primary focus:ring-primary"
        />
        <label htmlFor="conditions">
          J&apos;accepte les{" "}
          <Link href="/cgv" className="underline hover:text-primary">
            conditions générales de vente
          </Link>{" "}
          et la{" "}
          <Link href="/politique-confidentialite" className="underline hover:text-primary">
            politique de confidentialité
          </Link>
          .
        </label>
      </div>

      {status === "error" && error && (
        <p role="alert" className="text-body-md text-error flex items-center gap-2">
          <span className="material-symbols-outlined">info</span>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-xl bg-vibrant-orange text-white font-bold text-headline-md shadow-lg shadow-vibrant-orange/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
