import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture haute performance",
  description:
    "Infrastructure de routage redondante, IP dédiées et supervision temps réel au service de votre délivrabilité.",
};

export default function ArchitecturePage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-stack-lg flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop">
          <div className="absolute inset-0 z-[-1] opacity-10">
            {/* Atmospheric background element */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vibrant-orange rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-[800px]">
            <span className="text-vibrant-orange font-label-sm uppercase tracking-widest mb-4 block">
              Infrastructure de Pointe
            </span>
            <h1 className="text-headline-lg-mobile md:text-display-lg font-headline-lg text-deep-purple mb-stack-sm leading-tight">
              Architecture Haute Performance
            </h1>
            <p className="text-body-lg text-text-muted max-w-[600px] mx-auto">
              Conçue pour l’excellence opérationnelle, notre infrastructure garantit une fiabilité
              de 99,99% et une montée en charge instantanée pour vos campagnes les plus ambitieuses.
            </p>
          </div>
          <div className="mt-stack-md w-full max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <Image
              src="/images/img-10.png"
              alt="Allée d'un centre de données, baies de serveurs éclairées de violet de part et d'autre"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/40 to-transparent"></div>
          </div>
        </section>
        {/* Réseau & Sécurité */}
        <section className="py-stack-lg bg-surface-gray">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div>
                <h2 className="text-headline-lg font-headline-lg text-deep-purple mb-stack-md">
                  Réseau & Sécurité
                </h2>
                <p className="text-body-md text-text-muted mb-stack-md leading-relaxed">
                  La sécurité de vos données est notre priorité absolue. Nous exploitons des
                  infrastructures redondantes et des protocoles de chiffrement de niveau bancaire.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">
                      verified_user
                    </span>
                    <div>
                      <h4 className="font-bold text-deep-purple">Datacenters Tier III+</h4>
                      <p className="text-label-sm text-text-muted">
                        Hébergement haute disponibilité avec redondance N+1 systématique.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">lock</span>
                    <div>
                      <h4 className="font-bold text-deep-purple">Chiffrement AES-256</h4>
                      <p className="text-label-sm text-text-muted">
                        Données chiffrées au repos et en transit via TLS 1.3.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-vibrant-orange mt-1">
                      shield
                    </span>
                    <div>
                      <h4 className="font-bold text-deep-purple">Redondance Géographique</h4>
                      <p className="text-label-sm text-text-muted">
                        Réplication temps réel sur plusieurs sites physiques distincts.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg ambient-shadow border border-border-subtle flex flex-col items-center text-center">
                  <span className="text-display-lg text-primary font-bold">99.9%</span>{" "}
                  <span className="text-label-sm text-text-muted uppercase">Uptime Garanti</span>
                </div>
                <div className="bg-white p-6 rounded-lg ambient-shadow border border-border-subtle flex flex-col items-center text-center translate-y-8">
                  <span className="text-display-lg text-vibrant-orange font-bold">24/7</span>{" "}
                  <span className="text-label-sm text-text-muted uppercase">Monitoring Actif</span>
                </div>
                <div className="bg-white p-6 rounded-lg ambient-shadow border border-border-subtle flex flex-col items-center text-center">
                  <span className="text-display-lg text-primary font-bold">0</span>{" "}
                  <span className="text-label-sm text-text-muted uppercase">Data Loss</span>
                </div>
                <div className="bg-white p-6 rounded-lg ambient-shadow border border-border-subtle flex flex-col items-center text-center translate-y-8">
                  <span className="text-display-lg text-vibrant-orange font-bold">1ms</span>{" "}
                  <span className="text-label-sm text-text-muted uppercase">Latence Réseau</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Intelligence de Routage (Bento Style) */}
        <section className="py-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-stack-lg">
              <h2 className="text-headline-lg font-headline-lg text-deep-purple">
                Intelligence de Routage
              </h2>
              <p className="text-body-md text-text-muted mt-4">
                Optimisation prédictive pour une délivrabilité maximale.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Large Card */}
              <div className="col-span-12 md:col-span-8 bg-primary rounded-xl p-8 text-on-primary relative overflow-hidden group">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-headline-md mb-4">Algorithmes Prédictifs</h3>
                    <p className="text-body-md opacity-80 max-w-md">
                      Notre IA analyse en temps réel les comportements des FAI pour ajuster
                      dynamiquement les flux d’envoi et contourner les filtres anti-spam.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      className="inline-flex items-center justify-center bg-vibrant-orange text-white px-6 py-2 rounded-lg font-label-sm hover:brightness-110 transition-all"
                      href="/automation-ia"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-[-20%] right-[-10%] w-2/3 h-2/3 opacity-20 group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src="/images/img-20.png"
                    alt=""
                    width={512}
                    height={512}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Small Card */}
              <div className="col-span-12 md:col-span-4 glass-card rounded-xl p-8 ambient-shadow flex flex-col justify-center border-l-4 border-vibrant-orange">
                <span
                  className="material-symbols-outlined text-vibrant-orange text-5xl mb-4"
                  data-weight="fill"
                >
                  hub
                </span>
                <h3 className="text-headline-md text-deep-purple mb-2">Gestion IP</h3>
                <p className="text-body-md text-text-muted">
                  Rotation intelligente et réchauffement automatique des pools d’IP dédiées.
                </p>
              </div>
              {/* Small Card */}
              <div className="col-span-12 md:col-span-4 glass-card rounded-xl p-8 ambient-shadow flex flex-col justify-center border-l-4 border-primary">
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-4"
                  data-weight="fill"
                >
                  query_stats
                </span>
                <h3 className="text-headline-md text-deep-purple mb-2">Reputation Dashboard</h3>
                <p className="text-body-md text-text-muted">
                  Monitoring granulaire de votre réputation auprès de chaque opérateur.
                </p>
              </div>
              {/* Medium Card */}
              <div className="col-span-12 md:col-span-8 bg-surface-container-high rounded-xl p-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-headline-md text-deep-purple mb-2">Multi-MTA Connectors</h3>
                    <p className="text-body-md text-text-muted">
                      Liaisons directes avec les plus gros FAI mondiaux pour des vitesses d’envoi
                      records.
                    </p>
                  </div>
                  <div className="flex-1 w-full h-32 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all">
                    <Image
                      src="/images/img-08.png"
                      alt=""
                      width={512}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Scalabilité Big Data */}
        <section className="py-stack-lg bg-deep-purple text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-container/20 blur-3xl rounded-full"></div>
                <Image
                  src="/images/img-27.png"
                  alt="Représentation isométrique d'une infrastructure serveur empilée en pyramide"
                  width={512}
                  height={512}
                  className="relative w-full rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-headline-lg font-headline-lg mb-stack-md">
                  Scalabilité Big Data
                </h2>
                <p className="text-body-lg opacity-90 mb-stack-md leading-relaxed">
                  Notre cluster distribué traite des milliards d’événements chaque mois sans aucune
                  latence. Que vous envoyiez 1 000 ou 100 millions d’emails, notre infrastructure
                  s’adapte dynamiquement.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-on-primary/10 pb-4">
                    <span className="text-3xl font-bold text-vibrant-orange">10B+</span>{" "}
                    <span className="text-label-sm uppercase tracking-wide">Emails / mois</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-on-primary/10 pb-4">
                    <span className="text-3xl font-bold text-vibrant-orange">50ms</span>{" "}
                    <span className="text-label-sm uppercase tracking-wide">
                      Temps de traitement API
                    </span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-on-primary/10 pb-4">
                    <span className="text-3xl font-bold text-vibrant-orange">Unlimited</span>{" "}
                    <span className="text-label-sm uppercase tracking-wide">
                      Capacité de stockage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Conformité & Souveraineté */}
        <section className="py-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="bg-white rounded-2xl p-margin-desktop shadow-lg border border-border-subtle flex flex-col md:flex-row items-center gap-stack-md">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-vibrant-orange font-bold mb-4">
                  <span className="material-symbols-outlined">gavel</span>{" "}
                  <span className="uppercase text-label-sm tracking-widest">
                    Souveraineté Numérique
                  </span>
                </div>
                <h2 className="text-headline-lg font-headline-lg text-deep-purple mb-4">
                  Conformité & Souveraineté
                </h2>
                <p className="text-body-md text-text-muted mb-6">
                  En tant qu’acteur européen, nous garantissons une conformité totale au RGPD. Vos
                  données sont hébergées en France et en Europe, protégées contre toute ingérence
                  extra-communautaire.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-surface-gray px-4 py-2 rounded-full border border-border-subtle flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check_circle
                    </span>{" "}
                    <span className="text-label-sm font-bold text-deep-purple">
                      RGPD Compliance
                    </span>
                  </div>
                  <div className="bg-surface-gray px-4 py-2 rounded-full border border-border-subtle flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check_circle
                    </span>{" "}
                    <span className="text-label-sm font-bold text-deep-purple">Hébergement UE</span>
                  </div>
                  <div className="bg-surface-gray px-4 py-2 rounded-full border border-border-subtle flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check_circle
                    </span>{" "}
                    <span className="text-label-sm font-bold text-deep-purple">
                      ISO 27001 Certified
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-64">
                <Image
                  src="/images/img-17.png"
                  alt=""
                  width={512}
                  height={512}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
