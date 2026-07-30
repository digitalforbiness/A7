import Link from "next/link";
import ChooseOfferLink from "@/components/ChooseOfferLink";

export default function AccueilPage() {
  return (
    <>
      {/* Top Navigation */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-deep-purple">
        <div className="relative max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 text-secondary-container text-label-sm font-label-sm uppercase tracking-widest mb-6">
              SaaS Routing &amp; Data Technologies
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6">
              Le partenaire des professionnels{" "}
              <span className="text-secondary-fixed-dim">exigeants</span>.
            </h1>
            <p className="text-body-lg font-body-lg text-surface-variant/80 mb-8 max-w-xl">
              Optimisez votre ROI avec une infrastructure de routage haute performance. A7 Emailing
              combine expertise métier et technologies prédictives pour vos campagnes les plus
              critiques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-vibrant-orange text-white px-8 py-4 rounded-lg font-bold text-body-lg hover:scale-105 transition-transform flex items-center gap-2"
                href="/tarifs"
              >
                Essai Gratuit 15 jours{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>{" "}
              <Link
                className="inline-flex items-center justify-center border border-surface-variant/30 text-on-primary px-8 py-4 rounded-lg font-bold text-body-lg hover:bg-white/10 transition-colors"
                href="/monetisation"
              >
                Découvrir nos solutions
              </Link>
            </div>
            <p className="mt-4 text-label-sm font-label-sm text-surface-variant/50">
              *Sans carte bancaire. 300 envois inclus immédiatement.
            </p>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="bg-surface/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 card-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-surface-variant/40 text-label-sm font-label-sm ml-auto uppercase">
                  Live Monitoring
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-vibrant-orange w-[85%] transition-all duration-1000"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <span className="block text-secondary-fixed-dim font-bold text-headline-md">
                      99.9%
                    </span>{" "}
                    <span className="text-label-sm font-label-sm text-surface-variant/60 uppercase">
                      Délivrabilité
                    </span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <span className="block text-secondary-fixed-dim font-bold text-headline-md">
                      15M+
                    </span>{" "}
                    <span className="text-label-sm font-label-sm text-surface-variant/60 uppercase">
                      Mails/jour
                    </span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <span className="block text-secondary-fixed-dim font-bold text-headline-md">
                      24/7
                    </span>{" "}
                    <span className="text-label-sm font-label-sm text-surface-variant/60 uppercase">
                      Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Dualism */}
      <section className="py-stack-lg max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* E-Commerce Card */}
          <div className="group relative overflow-hidden rounded-xl p-10 bg-white card-shadow border-l-8 border-primary">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-[80px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shopping_cart
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">E-Commerce</h3>
            <p className="text-body-md text-text-muted mb-6 leading-relaxed">
              L’emailing est le moteur de votre croissance. Nous comprenons les contraintes du
              retail : réactivité, segmentation fine et automatisation transactionnelle sans faille.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Automation marketing &amp; Relances panier
              </li>
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Connecteurs Shopify, Magento &amp; PrestaShop
              </li>
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Segmentation comportementale avancée
              </li>
            </ul>
            <Link
              className="inline-flex items-center gap-2 font-bold text-primary group/link hover:underline"
              href="/tarifs"
            >
              Explorer la solution E-commerce{" "}
              <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
          {/* Monetization Card */}
          <div className="group relative overflow-hidden rounded-xl p-10 bg-white card-shadow border-l-8 border-secondary-container">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-[80px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                payments
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-secondary mb-4">Monétisation</h3>
            <p className="text-body-md text-text-muted mb-6 leading-relaxed">
              Maximisez la valeur de vos bases de données. Face à la baisse des revenus CPM, nous
              offrons des outils métier orientés performance et conformité.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Algorithmes d’optimisation de rendement
              </li>
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Protection de réputation d’expéditeur
              </li>
              <li className="flex items-center gap-3 text-body-md text-text-main">
                <span className="material-symbols-outlined text-vibrant-orange">check_circle</span>{" "}
                Gestion multi-bases &amp; Compliance RGPD
              </li>
            </ul>
            <Link
              className="inline-flex items-center gap-2 font-bold text-secondary group/link hover:underline"
              href="/monetisation"
            >
              Optimiser vos revenus Data{" "}
              <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-surface-gray py-stack-lg border-y border-border-subtle">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
              Le partenaire des professionnels exigeants
            </h2>
            <div className="w-20 h-1 bg-vibrant-orange mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="p-6">
              <span
                className="material-symbols-outlined text-[48px] text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              <p className="text-display-lg font-display-lg text-primary mb-1">15B</p>
              <p className="text-label-sm font-label-sm text-text-muted uppercase tracking-widest leading-tight">
                Mails délivrés
                <br />
                en 2023
              </p>
            </div>
            <div className="p-6">
              <span
                className="material-symbols-outlined text-[48px] text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person_search
              </span>
              <p className="text-display-lg font-display-lg text-primary mb-1">120M</p>
              <p className="text-label-sm font-label-sm text-text-muted uppercase tracking-widest leading-tight">
                Profils uniques
                <br />
                qualifiés
              </p>
            </div>
            <div className="p-6">
              <span
                className="material-symbols-outlined text-[48px] text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>
              <p className="text-display-lg font-display-lg text-primary mb-1">86</p>
              <p className="text-label-sm font-label-sm text-text-muted uppercase tracking-widest leading-tight">
                Clients grands
                <br />
                comptes
              </p>
            </div>
            <div className="p-6">
              <span
                className="material-symbols-outlined text-[48px] text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                support_agent
              </span>
              <p className="text-display-lg font-display-lg text-primary mb-1">24</p>
              <p className="text-label-sm font-label-sm text-text-muted uppercase tracking-widest leading-tight">
                Experts
                <br />
                disponibles
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logos */}
      <section className="py-stack-md bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop mb-8 text-center">
          <p className="text-label-sm font-label-sm text-text-muted uppercase tracking-widest">
            Ils nous font confiance
          </p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden py-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-16 animate-marquee">
            {/* Repeated logos for scrolling effect */}
            <div className="text-headline-md font-bold text-outline">VISTAPRINT</div>
            <div className="text-headline-md font-bold text-outline">ASSURLAND</div>
            <div className="text-headline-md font-bold text-outline">SIGNAL</div>
            <div className="text-headline-md font-bold text-outline">MEETIC</div>
            <div className="text-headline-md font-bold text-outline">INKCLUB</div>
            <div className="text-headline-md font-bold text-outline">3SUISSES</div>
            {/* Duplicate for loop */}
            <div className="text-headline-md font-bold text-outline">VISTAPRINT</div>
            <div className="text-headline-md font-bold text-outline">ASSURLAND</div>
            <div className="text-headline-md font-bold text-outline">SIGNAL</div>
            <div className="text-headline-md font-bold text-outline">MEETIC</div>
            <div className="text-headline-md font-bold text-outline">INKCLUB</div>
            <div className="text-headline-md font-bold text-outline">3SUISSES</div>
          </div>
        </div>
      </section>
      {/* Pricing Grid (Modernized) */}
      <section className="py-stack-lg bg-surface-container">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Des formules flexibles et évolutives
            </h2>
            <p className="text-body-md text-text-muted mt-2">
              Des solutions adaptées à chaque stade de votre croissance.
            </p>
          </div>
          {/* Pricing Tabs/Category Toggles */}
          <div className="flex flex-col gap-12">
            {/* E-Commerce Category */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-primary text-white p-2 rounded-lg material-symbols-outlined">
                  shopping_bag
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Solutions E-Commerce
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Plan 1 */}
                <div className="bg-white p-8 rounded-xl card-shadow border border-border-subtle flex flex-col">
                  <h4 className="font-bold text-primary mb-2">E-shop &amp; TPE</h4>
                  <p className="text-label-sm font-label-sm text-text-muted uppercase mb-6">
                    Idéal pour démarrer
                  </p>
                  <ul className="space-y-4 mb-8 text-body-md flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      50,000 contacts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      Emails illimités
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      2 IP Dédiées
                    </li>
                  </ul>
                  <div className="text-headline-md font-bold text-primary mb-6">
                    297 €{" "}
                    <span className="text-label-sm font-label-sm text-text-muted">HT / mois</span>
                  </div>
                  <ChooseOfferLink
                    offerId="eshop"
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Choisir
                  </ChooseOfferLink>
                </div>
                {/* Plan 2 */}
                <div className="bg-primary p-8 rounded-xl card-shadow transform scale-105 z-10 border border-primary-container flex flex-col text-on-primary">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vibrant-orange text-white px-4 py-1 rounded-full text-label-sm font-label-sm">
                    POPULAIRE
                  </div>
                  <h4 className="font-bold mb-2">E-boutique</h4>
                  <p className="text-label-sm font-label-sm text-surface-variant/60 uppercase mb-6">
                    Profilage CRM complet
                  </p>
                  <ul className="space-y-4 mb-8 text-body-md flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-white text-sm mt-1">
                        check
                      </span>{" "}
                      Marketing &amp; Transactionnel
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-white text-sm mt-1">
                        check
                      </span>{" "}
                      3 Millions d’emails
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-white text-sm mt-1">
                        check
                      </span>{" "}
                      NoSpam Configuration
                    </li>
                  </ul>
                  <div className="text-headline-md font-bold mb-6">
                    497 €{" "}
                    <span className="text-label-sm font-label-sm text-surface-variant/60">
                      HT / mois
                    </span>
                  </div>
                  <ChooseOfferLink
                    offerId="eboutique"
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-vibrant-orange text-white font-bold shadow-lg hover:brightness-110 transition-all"
                  >
                    Démarrer
                  </ChooseOfferLink>
                </div>
                {/* Plan 3 */}
                <div className="bg-white p-8 rounded-xl card-shadow border border-border-subtle flex flex-col">
                  <h4 className="font-bold text-primary mb-2">E-retailer</h4>
                  <p className="text-label-sm font-label-sm text-text-muted uppercase mb-6">
                    Puissance Big Data
                  </p>
                  <ul className="space-y-4 mb-8 text-body-md flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      Hyper-segmentation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      6 Millions d’emails
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-vibrant-orange text-sm mt-1">
                        check
                      </span>{" "}
                      Scénarios complexes
                    </li>
                  </ul>
                  <div className="text-headline-md font-bold text-primary mb-6">
                    897 €{" "}
                    <span className="text-label-sm font-label-sm text-text-muted">HT / mois</span>
                  </div>
                  <ChooseOfferLink
                    offerId="eretailer"
                    className="inline-flex items-center justify-center w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    Choisir
                  </ChooseOfferLink>
                </div>
              </div>
            </div>
            {/* Monetization Category */}
            <div>
              <div className="flex items-center gap-4 mb-8 mt-12">
                <span className="bg-secondary-container text-on-secondary-container p-2 rounded-lg material-symbols-outlined">
                  trending_up
                </span>
                <h3 className="font-headline-md text-headline-md text-secondary">
                  Solutions Monétisation
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="bg-white p-8 rounded-xl card-shadow border-t-4 border-secondary-container">
                  <h4 className="font-bold text-secondary mb-2">Editeur de sites</h4>
                  <p className="text-label-sm font-label-sm text-text-muted uppercase mb-6">
                    8 IP dédiées
                  </p>
                  <div className="text-headline-md font-bold text-secondary mb-6">
                    897 €{" "}
                    <span className="text-label-sm font-label-sm text-text-muted">HT / mois</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl card-shadow border-t-4 border-secondary-container">
                  <h4 className="font-bold text-secondary mb-2">Performance</h4>
                  <p className="text-label-sm font-label-sm text-text-muted uppercase mb-6">
                    16 IP dédiées + API
                  </p>
                  <div className="text-headline-md font-bold text-secondary mb-6">
                    1297 €{" "}
                    <span className="text-label-sm font-label-sm text-text-muted">HT / mois</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl card-shadow border-t-4 border-secondary-container">
                  <h4 className="font-bold text-secondary mb-2">Régie Multi-bases</h4>
                  <p className="text-label-sm font-label-sm text-text-muted uppercase mb-6">
                    32 IP dédiées
                  </p>
                  <div className="text-headline-md font-bold text-secondary mb-6">
                    1997 €{" "}
                    <span className="text-label-sm font-label-sm text-text-muted">HT / mois</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Custom CTA */}
          <div className="mt-20 p-10 bg-white rounded-2xl shadow-xl border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Besoin d’un accompagnement sur-mesure ?
              </h3>
              <p className="text-body-md text-text-muted mt-2">
                Scoring, nettoyage de base, médiation FAI : nos experts construisent votre offre à
                la carte.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a className="flex flex-col" href="tel:330183641616">
                <span className="text-label-sm font-label-sm text-text-muted uppercase">
                  Ligne Directe
                </span>{" "}
                <span className="text-headline-md font-bold text-primary">01 83 64 16 16</span>
              </a>{" "}
              <Link
                className="inline-flex items-center justify-center bg-deep-purple text-on-primary px-8 py-4 rounded-lg font-bold hover:bg-primary transition-all"
                href="/contact"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Le bandeau cookies est rendu par CookieConsentProvider, dans le layout. */}
    </>
  );
}
