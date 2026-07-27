"use client";

import { useState } from "react";

const SUBJECTS = [
  { value: "commercial", label: "Demande commerciale" },
  { value: "demonstration", label: "Demander une démo" },
  { value: "support", label: "Support technique" },
  { value: "partenariat", label: "Partenariat" },
  { value: "autre", label: "Autre" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full bg-surface-gray border border-border-subtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

/**
 * Formulaire de contact. Poste vers /api/contact et gère les états de
 * chargement, de succès et d'erreur sans quitter la page.
 */
export default function ContactForm({
  defaultSubject = "commercial",
}: {
  defaultSubject?: (typeof SUBJECTS)[number]["value"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const payload = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      entreprise: (form.elements.namedItem("entreprise") as HTMLInputElement).value,
      sujet: (form.elements.namedItem("sujet") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      consentement: (form.elements.namedItem("consentement") as HTMLInputElement).checked,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "L'envoi a échoué.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-white rounded-xl p-stack-md border border-border-subtle text-center"
      >
        <span className="material-symbols-outlined text-vibrant-orange text-5xl">check_circle</span>
        <h2 className="font-headline-md text-headline-md text-deep-purple mt-4 mb-2">
          Message envoyé
        </h2>
        <p className="text-body-md text-text-muted">
          Merci, votre demande a bien été transmise. Notre équipe vous répond sous 24&nbsp;heures
          ouvrées.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center px-6 py-2 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-stack-md border border-border-subtle space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nom"
            className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
          >
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="entreprise"
            className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
          >
            Entreprise <span className="normal-case">(facultatif)</span>
          </label>
          <input
            id="entreprise"
            name="entreprise"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
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
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="sujet"
          className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
        >
          Sujet
        </label>
        <select id="sujet" name="sujet" defaultValue={defaultSubject} className={inputClasses}>
          {SUBJECTS.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-label-sm font-label-sm text-text-muted mb-2 uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3 text-body-md text-text-muted">
        <input
          id="consentement"
          name="consentement"
          type="checkbox"
          required
          className="mt-1 rounded text-primary focus:ring-primary"
        />
        <label htmlFor="consentement">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la
          politique de confidentialité.
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
        {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
