import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Automation & IA",
  description:
    "Scénarios automatisés et modèles prédictifs pour déclencher le bon message au bon moment.",
};

export default function AutomationIaPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-stack-lg pb-stack-lg hero-mesh">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm mb-stack-sm">
                NOUVELLE GÉNÉRATION
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-stack-md leading-tight">
                Automatisation &amp; IA : <span className="text-vibrant-orange">L’Emailing</span>{" "}
                Nouvelle Génération
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
                Boostez votre ROI grâce à l’automatisation intelligente et l’IA prédictive. Passez
                de la communication de masse à l’hyper-personnalisation automatisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="bg-vibrant-orange text-white px-8 py-4 rounded-lg font-headline-md hover:brightness-110 elevation-2 transition-all active:scale-95 flex items-center justify-center gap-2"
                  href="/monetisation"
                >
                  Découvrir nos solutions{" "}
                  <span className="material-symbols-outlined">trending_up</span>
                </Link>{" "}
                <a
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-headline-md hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                  href={`mailto:${contact.email}`}
                >
                  Voir la démo <span className="material-symbols-outlined">play_circle</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-stack-lg bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                L’excellence technologique au service de votre croissance
              </h2>
              <div className="h-1 w-24 bg-vibrant-orange mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Benefit 1 */}
              <div className="bg-surface-container-lowest p-stack-md rounded-xl elevation-2 hover:elevation-3 transition-all border-t-4 border-deep-purple group">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_tree
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Scénarios Intelligents
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Créez des parcours clients automatisés basés sur le comportement en temps réel.
                  Chaque clic déclenche une expérience unique.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-surface-container-lowest p-stack-md rounded-xl elevation-2 hover:elevation-3 transition-all border-t-4 border-vibrant-orange group">
                <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-on-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    insights
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  IA Prédictive
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Anticipez les besoins de vos clients. Notre IA optimise l’heure d’envoi et le
                  contenu pour maximiser l’engagement individuel.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="bg-surface-container-lowest p-stack-md rounded-xl elevation-2 hover:elevation-3 transition-all border-t-4 border-deep-purple group">
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    groups_3
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Segmentation Dynamique
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Laissez l’algorithme regrouper vos audiences selon des clusters de données
                  complexes, dépassant les segments traditionnels.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Deep Dive Section */}
        <section className="py-stack-lg relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-10"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden elevation-2">
                    <Image
                      src="/images/img-23.png"
                      alt="Faisceau de flux de données lumineux violets et orangés reliés par des nœuds"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md leading-tight">
                  Au-delà de l’envoi : <br />
                  <span className="text-vibrant-orange">L’Intelligence de la donnée</span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                  La puissance d’A7 Emailing réside dans sa capacité à traiter des millions de
                  points de données pour transformer chaque interaction en une opportunité de
                  conversion.
                </p>
                <ul className="space-y-4 mb-stack-lg">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">
                      check_circle
                    </span>{" "}
                    <span className="text-on-surface">
                      Analyse sémantique du contenu pour une pertinence accrue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">
                      check_circle
                    </span>{" "}
                    <span className="text-on-surface">
                      Tracking multi-canal unifié pour une vue client à 360°.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">
                      check_circle
                    </span>{" "}
                    <span className="text-on-surface">
                      Machine learning continu améliorant les performances à chaque campagne.
                    </span>
                  </li>
                </ul>
                <Link
                  className="text-primary font-bold hover:text-vibrant-orange transition-colors flex items-center gap-2 group"
                  href="/architecture"
                >
                  En savoir plus sur nos algorithmes{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Bento Grid */}
        <section className="py-stack-lg bg-primary">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-stack-lg text-white">
              <h2 className="font-headline-lg text-headline-lg mb-4">Fonctionnalités Phares</h2>
              <p className="text-primary-fixed opacity-80 max-w-2xl mx-auto font-body-lg">
                Des outils de pointe conçus pour surpasser vos objectifs les plus ambitieux.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Feature 1: Trigger Marketing */}
              <div className="col-span-12 md:col-span-8 bg-primary-container rounded-2xl p-stack-md text-white border border-on-primary-container/20 group hover:border-vibrant-orange/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-3 py-1 bg-vibrant-orange/20 text-vibrant-orange rounded-full text-[10px] font-bold tracking-widest uppercase">
                      Performance
                    </div>
                    <span className="material-symbols-outlined text-vibrant-orange text-3xl">
                      bolt
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg mb-4">Trigger Marketing</h3>
                  <p className="text-primary-fixed opacity-70 font-body-md max-w-lg">
                    Ne manquez plus aucune opportunité. Des paniers abandonnés aux séries de
                    bienvenue ultra-personnalisées, réagissez à l’instant T.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                  <span className="text-xs text-vibrant-orange">#MarketingAutomation</span>{" "}
                  <span className="text-xs text-primary-fixed">#Conversion</span>
                </div>
              </div>
              {/* Feature 2: Smart Delivery */}
              <div className="col-span-12 md:col-span-4 bg-deep-purple rounded-2xl p-stack-md text-white border border-on-primary-container/10 group hover:border-vibrant-orange transition-all relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-vibrant-orange transition-colors">
                    <span className="material-symbols-outlined">send</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2">Smart Delivery</h3>
                  <p className="text-primary-fixed opacity-70 font-body-md">
                    Évitez les filtres spam grâce au machine learning qui optimise la délivrabilité.
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20"></div>
              </div>
              {/* Feature 3: A/B Testing */}
              <div className="col-span-12 md:col-span-4 bg-surface-container-highest rounded-2xl p-stack-md text-primary border border-border-subtle group hover:bg-white transition-all">
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 h-2 rounded-full bg-primary/10 overflow-hidden">
                    <div className="w-[60%] h-full bg-primary group-hover:w-[75%] transition-all duration-1000"></div>
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-vibrant-orange/10 overflow-hidden">
                    <div className="w-[40%] h-full bg-vibrant-orange group-hover:w-[85%] transition-all duration-1000"></div>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2">A/B Testing Automatisé</h3>
                <p className="text-on-surface-variant font-body-md">
                  L’IA teste, analyse et déploie automatiquement la version gagnante en temps réel.
                </p>
              </div>
              {/* Feature 4: Large Graphic Card */}
              <div className="col-span-12 md:col-span-8 bg-white rounded-2xl overflow-hidden border border-border-subtle flex flex-col md:flex-row elevation-2 group">
                <div className="flex-1 p-stack-md flex flex-col justify-center">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    Analyses Temps Réel
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-6">
                    Visualisez l’impact de l’IA sur vos revenus avec une clarté sans précédent.
                  </p>
                  <a
                    className="inline-flex items-center justify-center bg-primary text-white w-fit px-6 py-2 rounded-lg font-label-sm hover:bg-vibrant-orange transition-all"
                    href={`mailto:${contact.email}`}
                  >
                    Voir les rapports
                  </a>
                </div>
                <div className="flex-1 bg-surface-container-low min-h-[200px]">
                  <Image
                    src="/images/img-15.png"
                    alt=""
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section className="py-stack-lg bg-surface relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10"></div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
            <h2 className="font-display-lg text-display-lg text-primary mb-stack-md">
              Prêt à automatiser votre succès ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
              Rejoignez plus de 500 entreprises qui utilisent déjà l’IA d’A7 Emailing pour
              transformer leur communication digitale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-stack-sm">
              <Link
                className="inline-flex items-center justify-center bg-vibrant-orange text-white px-10 py-5 rounded-lg font-headline-md elevation-2 hover:brightness-110 hover:-translate-y-1 transition-all active:scale-95"
                href="/tarifs"
              >
                Essayer Gratuitement
              </Link>{" "}
              <a
                className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-lg font-headline-md elevation-2 hover:bg-primary-container hover:-translate-y-1 transition-all active:scale-95"
                href={`mailto:${contact.email}`}
              >
                Contacter un expert
              </a>
            </div>
            <p className="mt-6 text-text-muted font-label-sm">
              14 jours d’essai gratuit • Sans carte bancaire
            </p>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
