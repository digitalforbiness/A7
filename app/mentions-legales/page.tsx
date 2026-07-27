import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergeur et responsable de publication du site A7 Emailing.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg">
        {/* Header Section */}
        <div className="mb-stack-lg">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Mentions Légales</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Conformément aux dispositions de la loi pour la confiance dans l’économie numérique,
            voici les informations légales concernant le site A7 Emailing et la société A7
            Interactive.
          </p>
        </div>
        {/* Content Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Company Identification */}
          <div className="md:col-span-8 bg-white p-8 rounded-xl border border-border-subtle legal-card">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-vibrant-orange"
                style={{ fontSize: "32px" }}
              >
                business
              </span>
              <h2 className="font-headline-md text-headline-md text-deep-purple">
                Identification de la Société
              </h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mb-1">
                    Raison Sociale
                  </p>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">
                    A7 INTERACTIVE
                  </p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mb-1">
                    Forme Juridique
                  </p>
                  <p className="font-body-md text-body-md text-on-surface">
                    Société Anonyme Monegasque (S.A.M.)
                  </p>
                </div>
              </div>
              <div className="border-t border-border-subtle pt-4">
                <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mb-1">
                  Siège Social
                </p>
                <p className="font-body-md text-body-md text-on-surface">
                  Le Panorama, 57 Rue Grimaldi
                  <br /> 98000 Monaco
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-subtle pt-4">
                <div>
                  <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mb-1">
                    RCI Monaco
                  </p>
                  <p className="font-body-md text-body-md text-on-surface">06 S 04467</p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mb-1">
                    TVA Intracommunautaire
                  </p>
                  <p className="font-body-md text-body-md text-on-surface">FR 64 00007358 1</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="md:col-span-4 bg-deep-purple text-white p-8 rounded-xl legal-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="material-symbols-outlined text-vibrant-orange"
                  style={{ fontSize: "32px" }}
                >
                  contact_support
                </span>
                <h2 className="font-headline-md text-headline-md">Nous Contacter</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-fixed">mail</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-primary-fixed opacity-70 uppercase mb-1">
                      Email
                    </p>
                    <a
                      className="font-body-md text-body-md hover:text-vibrant-orange transition-colors"
                      href="mailto:contact@a7emailing.com"
                    >
                      contact@a7emailing.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-fixed">call</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-primary-fixed opacity-70 uppercase mb-1">
                      Téléphone
                    </p>
                    <p className="font-body-md text-body-md">+377 97 97 10 10</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm italic opacity-60">
                Notre équipe est à votre écoute du lundi au vendredi de 9h à 18h.
              </p>
            </div>
          </div>
          {/* Hosting Details */}
          <div className="md:col-span-6 bg-white p-8 rounded-xl border border-border-subtle legal-card">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-vibrant-orange"
                style={{ fontSize: "32px" }}
              >
                dns
              </span>
              <h2 className="font-headline-md text-headline-md text-deep-purple">Hébergement</h2>
            </div>
            <div className="space-y-4">
              <p className="font-body-md text-body-md text-on-surface">
                Le site A7 Emailing est hébergé sur des infrastructures sécurisées de classe
                entreprise.
              </p>
              <div className="bg-surface-gray p-4 rounded-lg">
                <p className="font-body-md text-body-md font-semibold text-deep-purple mb-1">
                  Infrastructure A7 Digital
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Localisation : Data Centers certifiés ISO 27001
                  <br /> Région : Union Européenne (France/Monaco)
                </p>
              </div>
            </div>
          </div>
          {/* Intellectual Property */}
          <div className="md:col-span-6 bg-white p-8 rounded-xl border border-border-subtle legal-card">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-vibrant-orange"
                style={{ fontSize: "32px" }}
              >
                gavel
              </span>
              <h2 className="font-headline-md text-headline-md text-deep-purple">
                Propriété Intellectuelle
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              L’intégralité de ce site (structure, design, textes, logos, images, graphismes) est la
              propriété exclusive de <strong>A7 INTERACTIVE</strong>. Toute reproduction,
              représentation, modification ou adaptation, partielle ou totale, du contenu de ce site
              est strictement interdite sans autorisation écrite préalable.
            </p>
          </div>
          {/* Image Asset for Branding */}
          <div className="md:col-span-12 h-64 rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/80 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20 max-w-xl">
              <h3 className="text-white font-headline-md text-headline-md mb-2">
                Expertise &amp; Conformité
              </h3>
              <p className="text-primary-fixed font-body-md text-body-md opacity-90">
                Au-delà du cadre légal, A7 s’engage pour une éthique numérique forte et la
                protection rigoureuse de vos données professionnelles.
              </p>
            </div>
            <div
              className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              data-alt="A professional high-tech office environment in Monaco with a view of the Mediterranean sea through large windows. The interior is modern and minimalist with deep purple and vibrant orange accents in the decor. High-end computing hardware and clean architectural lines reflect technical mastery and data-driven confidence. The lighting is bright and natural, creating a premium corporate atmosphere."
              style={{ backgroundImage: "url('/images/img-bg-mentions.png')" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}
