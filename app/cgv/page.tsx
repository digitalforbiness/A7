import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Modalités de commande, de facturation et de résiliation des offres A7 Emailing.",
};

export default function CgvPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg">
        {/* Hero Header */}
        <header className="mb-stack-lg text-center md:text-left">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm font-label-sm mb-4">
            DOCUMENTATION JURIDIQUE
          </div>
          <h1 className="font-display-lg text-display-lg text-deep-purple mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Dernière mise à jour : 24 Mai 2024. Veuillez lire attentivement nos conditions de
            service pour comprendre vos droits et obligations en tant qu’utilisateur de la
            plateforme A7 Emailing.
          </p>
        </header>
        {/* Bento Grid Layout for CGV Content */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Description des Services */}
          <section className="col-span-12 md:col-span-8 glass-card p-stack-md rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                description
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                1. Description des Services
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                A7 Emailing fournit une plateforme logicielle SaaS (Software as a Service)
                spécialisée dans l’automatisation du marketing par email, la gestion de campagnes
                e-commerce et la monétisation de bases de données.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-surface-gray rounded-lg border-l-4 border-deep-purple">
                  <h3 className="font-bold text-deep-purple mb-2">E-shop &amp; Boutique</h3>
                  <p className="text-sm">
                    Intégration native avec vos flux produits pour des campagnes dynamiques
                    ultra-ciblées.
                  </p>
                </div>
                <div className="p-4 bg-surface-gray rounded-lg border-l-4 border-vibrant-orange">
                  <h3 className="font-bold text-vibrant-orange mb-2">Automation &amp; IA</h3>
                  <p className="text-sm">
                    Moteurs prédictifs pour optimiser les heures d’envoi et la segmentation
                    comportementale.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Pricing / Tarification */}
          <section className="col-span-12 md:col-span-4 bg-primary text-on-primary p-stack-md rounded-xl shadow-md flex flex-col justify-center border-t-8 border-vibrant-orange">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                payments
              </span>
              <h2 className="font-headline-md text-headline-md">2. Tarification</h2>
            </div>
            <p className="mb-4 opacity-90">
              Nos tarifs sont basés sur le volume de contacts ou le nombre d’envois mensuels, selon
              le forfait choisi.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                  check_circle
                </span>{" "}
                <span>Facturation transparente HT.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                  check_circle
                </span>{" "}
                <span>Pas de frais d’installation cachés.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                  check_circle
                </span>{" "}
                <span>Mise à jour tarifaire avec préavis de 30 jours.</span>
              </li>
            </ul>
          </section>
          {/* Modalités de Paiement */}
          <section className="col-span-12 md:col-span-4 glass-card p-stack-md rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              <h2 className="font-headline-md text-headline-md text-primary">3. Paiement</h2>
            </div>
            <p className="text-on-surface-variant mb-4">
              Le règlement des services s’effectue par prélèvement automatique ou carte bancaire au
              début de chaque période de facturation.
            </p>
            <div className="bg-surface-container-low p-3 rounded flex items-center gap-2 text-sm text-on-surface-variant italic">
              <span className="material-symbols-outlined text-xs">info</span> En cas de défaut de
              paiement, l’accès au service sera suspendu après 48h.
            </div>
          </section>
          {/* Engagement et Résiliation */}
          <section className="col-span-12 md:col-span-8 glass-card p-stack-md rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">event_repeat</span>
                  <h2 className="font-headline-md text-headline-md text-primary">4. Engagement</h2>
                </div>
                <p className="text-on-surface-variant">
                  Sauf mention contraire dans votre devis spécifique, nos contrats sont sans
                  engagement de durée minimale et se renouvellent tacitement chaque mois.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-error">cancel</span>
                  <h2 className="font-headline-md text-headline-md text-error">5. Résiliation</h2>
                </div>
                <p className="text-on-surface-variant">
                  La résiliation peut être effectuée à tout moment via l’interface client. Elle
                  prend effet à la fin du cycle de facturation en cours.
                </p>
              </div>
            </div>
          </section>
          {/* Clause de Responsabilité & Données */}
          <section className="col-span-12 bg-surface-container p-stack-md rounded-xl flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-sm"
                data-alt="A clean, professional workspace with a focus on a high-end laptop and tablet displaying complex data analytics dashboards. The lighting is bright and airy, representing a transparent and trustworthy corporate atmosphere. The color scheme uses deep purples and vibrant orange accents consistent with the A7 Emailing brand identity. The style is modern, minimalist, and conveys professional reliability for an enterprise tech solution."
                style={{ backgroundImage: "url('/images/img-bg-cgv.png')" }}
              ></div>
            </div>
            <div className="md:w-2/3">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">
                Responsabilité et RGPD
              </h2>
              <p className="text-on-surface-variant mb-4">
                A7 Emailing agit en tant que sous-traitant de données. Le client reste propriétaire
                et responsable de la légalité de ses bases de données. Nous garantissons une
                infrastructure sécurisée et conforme aux normes européennes en vigueur (RGPD).
              </p>
              <Link
                className="flex items-center gap-2 text-vibrant-orange font-bold hover:underline"
                href="/politique-confidentialite"
              >
                Consulter notre Politique de Confidentialité{" "}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </section>
        </div>
        {/* Sticky Trust Banner */}
        <div className="mt-stack-lg p-6 bg-deep-purple text-on-primary rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-headline-md text-headline-md">
              Besoin de précisions sur nos termes ?
            </p>
            <p className="opacity-80">
              Notre équipe juridique est disponible pour répondre à vos questions spécifiques.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center bg-vibrant-orange text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform"
            href="/contact"
          >
            Contactez le Support
          </Link>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}
