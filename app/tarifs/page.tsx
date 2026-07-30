import type { Metadata } from "next";
import Link from "next/link";
import ChooseOfferButton from "@/components/ChooseOfferButton";
import PaymentSummary from "@/components/PaymentSummary";

export const metadata: Metadata = {
  title: "Tarification & paiement",
  description:
    "Des formules e-commerce et monétisation transparentes, sans engagement et sans frais cachés.",
};

export default function TarifsPage() {
  return (
    <>
      {/* Top Navigation */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-stack-lg text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block bg-secondary-container/10 text-secondary font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-4 border border-secondary-container/20">
              TARIFICATION TRANSPARENTE
            </span>
            <h1 className="font-display-lg text-display-lg text-deep-purple mb-6 max-w-3xl mx-auto">
              Formules flexibles et évolutives
            </h1>
            <p className="text-body-lg font-body-lg text-text-muted max-w-2xl mx-auto mb-8">
              Développez votre activité avec une plateforme d’emailing de précision conçue pour les
              performances e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-surface-container-low p-6 rounded-xl border border-border-subtle max-w-lg mx-auto">
              <span className="material-symbols-outlined text-vibrant-orange text-3xl">
                celebration
              </span>
              <div className="text-left">
                <p className="font-bold text-deep-purple">Commencez gratuitement</p>
                <p className="text-text-muted text-body-md">
                  15 jours ou 300 envois offerts sans engagement.
                </p>
              </div>
            </div>
          </div>
          {/* Atmospheric decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-container/5 rounded-full blur-3xl"></div>
        </section>
        {/* Pricing Grid (Bento Style) */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Tier: E-shop */}
            <div
              className="pricing-card bg-white rounded-xl p-8 border border-border-subtle flex flex-col h-full relative overflow-hidden shadow-sm"
              style={{
                opacity: "1",
                transform: "translateY(0px)",
                transition: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl">storefront</span>
              </div>
              <div className="mb-6">
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider bg-surface-container px-2 py-1 rounded">
                  E-shop
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-headline-lg font-headline-lg">29€</span>{" "}
                  <span className="text-text-muted font-body-md">/mois</span>
                </div>
                <p className="text-text-muted text-body-md mt-2">Pour les boutiques émergentes.</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Jusqu’à 5 000 emails</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Automation de base</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Segmentation clients</span>
                </li>
              </ul>
              <ChooseOfferButton
                offerId="eshop"
                className="inline-flex items-center justify-center w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
              >
                Choisir E-shop
              </ChooseOfferButton>
            </div>
            {/* Tier: E-boutique (Popular) */}
            <div
              className="pricing-card bg-white rounded-xl p-8 border-2 border-primary flex flex-col h-full relative overflow-hidden shadow-md"
              style={{
                opacity: "1",
                transform: "translateY(0px)",
                transition: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-tighter">
                Populaire
              </div>
              <div className="mb-6">
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider bg-surface-container px-2 py-1 rounded">
                  E-boutique
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-headline-lg font-headline-lg">79€</span>{" "}
                  <span className="text-text-muted font-body-md">/mois</span>
                </div>
                <p className="text-text-muted text-body-md mt-2">Accélérez votre croissance.</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md font-medium">Jusqu’à 25 000 emails</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">A/B Testing avancé</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Relance panier abandonné</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Support Prioritaire 24/7</span>
                </li>
              </ul>
              <ChooseOfferButton
                offerId="eboutique"
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-primary text-on-primary font-bold shadow-lg hover:brightness-110 transition-all"
              >
                Choisir E-boutique
              </ChooseOfferButton>
            </div>
            {/* Tier: E-retailer */}
            <div
              className="pricing-card bg-white rounded-xl p-8 border border-border-subtle flex flex-col h-full relative overflow-hidden shadow-sm"
              style={{
                opacity: "1",
                transform: "translateY(0px)",
                transition: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="mb-6">
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider bg-surface-container px-2 py-1 rounded">
                  E-retailer
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-headline-lg font-headline-lg">199€</span>{" "}
                  <span className="text-text-muted font-body-md">/mois</span>
                </div>
                <p className="text-text-muted text-body-md mt-2">Volume et performance.</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Jusqu’à 100 000 emails</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">IP Dédiée incluse</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Connecteurs CRM</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Dashboard personnalisé</span>
                </li>
              </ul>
              <ChooseOfferButton
                offerId="eretailer"
                className="inline-flex items-center justify-center w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
              >
                Choisir E-retailer
              </ChooseOfferButton>
            </div>
            {/* Tier: E-marketing */}
            <div
              className="pricing-card bg-deep-purple rounded-xl p-8 flex flex-col h-full relative overflow-hidden shadow-sm text-white"
              style={{
                opacity: "1",
                transform: "translateY(0px)",
                transition: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="mb-6">
                <span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider bg-white/10 px-2 py-1 rounded">
                  E-marketing
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-headline-lg font-headline-lg">Sur devis</span>
                </div>
                <p className="text-surface-variant/70 text-body-md mt-2">Solutions sur mesure.</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Emails illimités</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Compte Manager dédié</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">SLA Garanti 99.9%</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    check_circle
                  </span>{" "}
                  <span className="text-body-md">Accès API complet</span>
                </li>
              </ul>
              <Link
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-secondary-container text-deep-purple font-bold hover:brightness-110 transition-all"
                href="/contact"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
        {/* Checkout Section */}
        <section
          id="paiement"
          className="bg-surface-container-low py-stack-lg border-y border-border-subtle"
        >
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Trust & Information */}
              <div>
                <h2 className="font-headline-lg text-headline-lg text-deep-purple mb-6">
                  Démarrez votre souscription
                </h2>
                <p className="text-text-muted mb-10 text-body-lg">
                  Indiquez votre entreprise et votre email professionnel : un conseiller vous
                  recontacte sous 24&nbsp;heures ouvrées pour activer l&apos;offre choisie et
                  finaliser le règlement en toute sécurité.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-border-subtle items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-purple">Réponse sous 24&nbsp;h</h4>
                      <p className="text-text-muted text-body-md">
                        Un expert A7 vous rappelle rapidement.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-border-subtle items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-purple">Sans engagement</h4>
                      <p className="text-text-muted text-body-md">
                        Aucune donnée bancaire n&apos;est demandée ici.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Récapitulatif dynamique + formulaire */}
              <PaymentSummary />
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="max-w-[800px] mx-auto px-margin-desktop py-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-deep-purple mb-12 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            <details
              className="group bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm transition-all"
              open
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-gray list-none">
                <span className="font-bold text-deep-purple">
                  Puis-je changer de forfait à tout moment ?
                </span>{" "}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-text-muted border-t border-border-subtle bg-surface-container-lowest">
                Oui, absolument. Vous pouvez upgrader ou downgrader votre forfait directement depuis
                votre tableau de bord. La différence sera calculée au prorata sur votre prochaine
                facture.
              </div>
            </details>
            <details className="group bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-gray list-none">
                <span className="font-bold text-deep-purple">
                  Qu’arrive-t-il si je dépasse mon quota d’envoi ?
                </span>{" "}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-text-muted border-t border-border-subtle bg-surface-container-lowest">
                Nous vous alertons lorsque vous atteignez 80% et 90% de votre quota. Si vous
                dépassez, les envois supplémentaires sont facturés à l’unité selon une grille
                tarifaire dégressive, ou vous pouvez choisir de passer au forfait supérieur.
              </div>
            </details>
            <details className="group bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-surface-gray list-none">
                <span className="font-bold text-deep-purple">
                  Y a-t-il une période d’engagement ?
                </span>{" "}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-text-muted border-t border-border-subtle bg-surface-container-lowest">
                Nos forfaits sont sans engagement sur une base mensuelle. Vous pouvez annuler votre
                abonnement à tout moment, et il prendra fin à l’issue de la période de facturation
                en cours.
              </div>
            </details>
          </div>
        </section>
        {/* Final CTA */}
        <section className="max-w-container-max mx-auto px-margin-desktop pb-stack-lg">
          <div className="bg-gradient-to-r from-deep-purple to-primary p-12 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Prêt à booster vos ventes ?
              </h2>
              <p className="text-body-lg mb-8 opacity-90">
                Rejoignez plus de 5000 e-commerçants qui nous font confiance.
              </p>
              <Link
                className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-headline-md shadow-xl hover:scale-105 transition-all"
                href="#paiement"
              >
                Démarrer l’essai gratuit
              </Link>
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-vibrant-orange/20 rounded-full blur-2xl"></div>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
