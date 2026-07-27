import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Solutions de monétisation",
  description:
    "Valorisez vos bases de données avec des outils orientés rendement, réputation et conformité.",
};

export default function MonetisationPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="bg-vibrant-orange/10 text-vibrant-orange px-3 py-1 rounded-full text-label-sm font-label-sm mb-6 inline-block">
                NOUVELLE GÉNÉRATION
              </span>
              <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-deep-purple mb-6">
                Maximisez vos revenus publicitaires avec nos solutions de monétisation email.
              </h1>
              <p className="text-body-lg text-text-muted mb-8 max-w-xl">
                A7 transforme votre data email en profit. Grâce à nos algorithmes prédictifs et nos
                infrastructures haute disponibilité, redonnez de la vigueur à votre ROI face à la
                baisse des rendements traditionnels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center justify-center bg-vibrant-orange text-white px-8 py-4 rounded-lg font-headline-md text-body-md hover:shadow-lg transition-all active:scale-95"
                  href="/tarifs"
                >
                  Démarrer maintenant
                </Link>{" "}
                <a
                  className="inline-flex items-center justify-center bg-surface-gray border border-border-subtle text-deep-purple px-8 py-4 rounded-lg font-headline-md text-body-md hover:bg-white transition-all"
                  href={`mailto:${contact.email}`}
                >
                  Voir la démo
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img-16.png"
                  alt="Tableau de bord affichant un histogramme de revenus en dégradé orange"
                  width={512}
                  height={512}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Value Proposition / Bento */}
        <section className="py-stack-lg bg-surface-container-low/30 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-headline-lg text-deep-purple mb-4 transition-all duration-700 opacity-100 translate-y-0">
                Pourquoi choisir A7 pour votre monétisation ?
              </h2>
              <p className="text-body-md text-text-muted max-w-2xl mx-auto">
                Une approche axée sur l’efficacité business et la protection de vos actifs
                numériques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border-subtle hover:border-vibrant-orange/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-deep-purple mb-4">
                  Optimisation de Yield
                </h3>
                <p className="text-body-md text-text-muted">
                  Nos algorithmes intelligents comparent en temps réel les performances des
                  campagnes pour maximiser chaque clic sortant.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border-subtle hover:border-vibrant-orange/50 transition-colors">
                <div className="w-12 h-12 bg-vibrant-orange/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-vibrant-orange">security</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-deep-purple mb-4">
                  Réputation Protégée
                </h3>
                <p className="text-body-md text-text-muted">
                  Rotation d’IP intelligente et monitoring constant pour garantir la meilleure
                  délivrabilité et protéger votre nom de domaine.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border-subtle hover:border-vibrant-orange/50 transition-colors">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary">gavel</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-deep-purple mb-4">
                  Conformité RGPD
                </h3>
                <p className="text-body-md text-text-muted">
                  Des outils 100% compliant avec les standards européens, assurant une monétisation
                  sereine et pérenne de vos bases.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg font-headline-lg text-deep-purple mb-4 transition-all duration-700 opacity-100 translate-y-0">
              Nos Offres de Monétisation
            </h2>
            <p className="text-body-md text-text-muted">
              Des solutions adaptées à votre volume et vos ambitions de croissance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Tier 1 */}
            <div className="pricing-card bg-white rounded-xl border border-border-subtle overflow-hidden flex flex-col transition-all duration-700 opacity-100 translate-y-0">
              <div className="p-6 border-b border-border-subtle">
                <h4 className="text-headline-md font-headline-md text-deep-purple mb-2">
                  Editeur de sites
                </h4>
                <div className="text-vibrant-orange font-bold text-headline-lg">
                  897 € <span className="text-label-sm font-label-sm text-text-muted">HT/mois</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    Cloud dédié
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    8 IP incluses
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    6M mails / mois
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-surface-gray">
                <Link
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                  href="/tarifs"
                >
                  Choisir
                </Link>
              </div>
            </div>
            {/* Tier 2 (Highlighted) */}
            <div className="pricing-card bg-white rounded-xl border-2 border-vibrant-orange overflow-hidden flex flex-col relative transform scale-105 z-10 transition-all duration-700 opacity-100 translate-y-0">
              <div className="bg-vibrant-orange text-white text-center py-2 text-label-sm font-label-sm uppercase tracking-widest">
                Recommandé
              </div>
              <div className="p-6 border-b border-border-subtle bg-vibrant-orange/5">
                <h4 className="text-headline-md font-headline-md text-deep-purple mb-2">
                  Marketing Performance
                </h4>
                <div className="text-vibrant-orange font-bold text-headline-lg">
                  1297 €{" "}
                  <span className="text-label-sm font-label-sm text-text-muted">HT/mois</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    16 IP incluses
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    API Capsule
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    10M mails / mois
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    Support prioritaires
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-surface-gray">
                <Link
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-vibrant-orange text-white font-bold hover:shadow-lg transition-all"
                  href="/tarifs"
                >
                  Souscrire
                </Link>
              </div>
            </div>
            {/* Tier 3 */}
            <div className="pricing-card bg-white rounded-xl border border-border-subtle overflow-hidden flex flex-col transition-all duration-700 opacity-100 translate-y-0">
              <div className="p-6 border-b border-border-subtle">
                <h4 className="text-headline-md font-headline-md text-deep-purple mb-2">
                  Régie multi-bases
                </h4>
                <div className="text-vibrant-orange font-bold text-headline-lg">
                  1997 €{" "}
                  <span className="text-label-sm font-label-sm text-text-muted">HT/mois</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    32 IP incluses
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    Multi SMTP
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-vibrant-orange text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    30M mails / mois
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-surface-gray">
                <Link
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                  href="/tarifs"
                >
                  Choisir
                </Link>
              </div>
            </div>
            {/* Tier 4 */}
            <div className="pricing-card bg-deep-purple rounded-xl overflow-hidden flex flex-col text-white transition-all duration-700 opacity-100 translate-y-0">
              <div className="p-6 border-b border-white/10">
                <h4 className="text-headline-md font-headline-md mb-2">Agence e-marketing</h4>
                <div className="text-secondary-container font-bold text-headline-lg">
                  Sur mesure
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-surface-variant mb-6 text-body-md italic">
                  Pour les besoins extrêmes en volume et personnalisation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-secondary-container text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    Custom Cloud High Volume
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span
                      className="material-symbols-outlined text-secondary-container text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>{" "}
                    Expert dédié (SLA)
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5">
                <a
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white text-deep-purple font-bold hover:bg-secondary-container hover:text-on-secondary transition-all"
                  href={`mailto:${contact.email}`}
                >
                  Contacter nous
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Technical Excellence / Asymmetric Layout */}
        <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-purple to-primary rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/images/img-21.png"
                alt=""
                width={512}
                height={512}
                className="w-full h-full object-cover rounded-2xl shadow-xl border border-white/20"
              />
              <div className="absolute -bottom-10 -right-10 glass-card p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2 text-vibrant-orange font-bold">
                  <span className="material-symbols-outlined">bolt</span> 99.9% Uptime
                </div>
                <p className="text-body-md text-text-muted">
                  Infrastructure redondante sur 4 datacenters Tier III pour une sécurité totale.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-headline-lg font-headline-lg text-deep-purple mb-6 transition-all duration-700 opacity-100 translate-y-0">
              Expertise technique &amp; Support dédié
            </h2>
            <p className="text-body-lg text-text-muted mb-6">
              Face à la baisse de rentabilité des canaux historiques, nos experts vous accompagnent
              pour restructurer votre stratégie de monétisation.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">psychology</span>
                </div>
                <div>
                  <h4 className="text-body-lg font-bold text-deep-purple">Conseil stratégique</h4>
                  <p className="text-body-md text-text-muted">
                    Analyse de vos bases et recommandation de segmentation pour maximiser
                    l’engagement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">monitoring</span>
                </div>
                <div>
                  <h4 className="text-body-lg font-bold text-deep-purple">Reporting avancé</h4>
                  <p className="text-body-md text-text-muted">
                    Tableaux de bord en temps réel pour suivre chaque euro généré avec une précision
                    chirurgicale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Final */}
        <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
          <div className="bg-deep-purple rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-orange/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <h2 className="text-headline-lg font-headline-lg mb-6 relative z-10 transition-all duration-700 opacity-100 translate-y-0">
              Prêt à transformer vos emails en revenus ?
            </h2>
            <p className="text-body-lg text-surface-variant mb-10 max-w-2xl mx-auto relative z-10">
              Rejoignez les leaders de l’e-commerce qui font confiance à A7 pour leur croissance
              publicitaire.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                className="inline-flex items-center justify-center bg-vibrant-orange hover:bg-[#D35400] text-white px-10 py-4 rounded-lg font-headline-md text-body-md transition-all"
                href="/tarifs"
              >
                Démarrer gratuitement
              </Link>{" "}
              <a
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-lg font-headline-md text-body-md transition-all"
                href={`mailto:${contact.email}`}
              >
                Parler à un expert
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
