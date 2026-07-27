import type { Metadata } from "next";
import Image from "next/image";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Politique des cookies",
  description: "Quels cookies nous déposons, pourquoi, et comment les refuser.",
};

/** Documentation officielle de chaque éditeur pour la gestion des cookies. */
const BROWSER_COOKIE_GUIDES = [
  { name: "Chrome", href: "https://support.google.com/chrome/answer/95647?hl=fr" },
  {
    name: "Firefox",
    href: "https://support.mozilla.org/fr/kb/effacer-cookies-donnees-site-firefox",
  },
  { name: "Safari", href: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
  {
    name: "Edge",
    href: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
] as const;

export default function PolitiqueCookiesPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg">
        {/* Hero Section */}
        <section className="mb-stack-lg text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-stack-md">
            <span className="material-symbols-outlined text-primary text-[18px]">cookie</span>{" "}
            <span className="text-label-sm font-label-sm text-primary uppercase">
              Transparence &amp; Confidentialité
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-deep-purple mb-stack-sm">
            Politique des Cookies
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Chez A7 Emailing, nous utilisons des technologies de suivi pour améliorer votre
            expérience utilisateur et analyser la performance de nos outils e-commerce.
          </p>
        </section>
        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* What are cookies */}
          <div className="md:col-span-8 bg-white rounded-xl p-stack-md ambient-shadow ambient-shadow transition-all duration-300">
            <div className="flex items-start gap-4 mb-stack-md">
              <div className="p-3 bg-primary-container rounded-lg">
                <span className="material-symbols-outlined text-white">help_outline</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-deep-purple">
                  Qu’est-ce qu’un cookie ?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                  tablette ou smartphone) lors de la consultation d’un site internet. Il permet à
                  son émetteur d’identifier le terminal dans lequel il est enregistré, pendant la
                  durée de validité ou d’enregistrement du cookie. <br />
                  <br /> Ils nous aident à assurer le bon fonctionnement du site, à sécuriser votre
                  navigation et à personnaliser votre interface en fonction de vos préférences.
                </p>
              </div>
            </div>
          </div>
          {/* Manage Preference CTA */}
          <div className="md:col-span-4 bg-vibrant-orange rounded-xl p-stack-md flex flex-col justify-between text-white transition-all duration-300 hover:scale-[1.02]">
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">Gérer vos choix</h3>
              <p className="font-body-md text-body-md opacity-90">
                Prenez le contrôle de vos données en personnalisant vos préférences de suivi dès
                maintenant.
              </p>
            </div>
            <CookiePreferencesButton className="mt-6 bg-white text-vibrant-orange font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-surface-gray transition-colors">
              Personnaliser mes cookies
            </CookiePreferencesButton>
          </div>
          {/* Cookie Types Grid */}
          <div className="md:col-span-12 mt-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-deep-purple mb-stack-md">
              Types de cookies utilisés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Essential Cookies */}
              <div className="bg-surface-gray border border-border-subtle rounded-xl p-stack-md ambient-shadow transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-deep-purple text-4xl">
                    verified_user
                  </span>{" "}
                  <span className="bg-deep-purple text-white px-3 py-1 rounded-full text-label-sm font-label-sm">
                    OBLIGATOIRE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-purple">
                  Cookies Techniques
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Ces cookies sont indispensables à la navigation sur le site et à l’utilisation de
                  ses fonctionnalités, comme l’accès aux zones sécurisées (votre tableau de bord
                  A7). Sans ces cookies, les services demandés ne peuvent être fournis.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-orange text-sm">
                      check_circle
                    </span>{" "}
                    Authentification utilisateur
                  </li>
                  <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-orange text-sm">
                      check_circle
                    </span>{" "}
                    Sécurité de la session
                  </li>
                </ul>
              </div>
              {/* Analytics Cookies */}
              <div className="bg-surface-gray border border-border-subtle rounded-xl p-stack-md ambient-shadow transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-vibrant-orange text-4xl">
                    query_stats
                  </span>
                  <div className="flex gap-2">
                    <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm font-label-sm">
                      Analytics
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-purple">
                  Cookies de Performance
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Nous utilisons ces cookies pour collecter des informations sur la façon dont les
                  visiteurs utilisent notre site (pages les plus visitées, temps passé). Cela nous
                  permet d’optimiser l’architecture de nos solutions e-commerce.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-orange text-sm">
                      check_circle
                    </span>{" "}
                    Google Analytics
                  </li>
                  <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-vibrant-orange text-sm">
                      check_circle
                    </span>{" "}
                    Hotjar (Parcours utilisateur)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third Party Section */}
          <div className="md:col-span-12 mt-stack-md">
            <div className="bg-white rounded-xl overflow-hidden ambient-shadow grid grid-cols-1 md:grid-cols-2 items-center border border-border-subtle">
              <div className="p-stack-md">
                <h2 className="font-headline-lg text-headline-lg text-deep-purple mb-4">
                  Services tiers &amp; Réseaux sociaux
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Notre site peut contenir des liens vers ou depuis des sites tiers et des réseaux
                  sociaux (LinkedIn, Twitter). Si vous suivez un lien vers l’un de ces sites, sachez
                  qu’ils ont leurs propres politiques de confidentialité.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg">
                    <Image
                      src="/images/img-03.png"
                      alt="LinkedIn"
                      width={512}
                      height={512}
                      className="w-4 h-4"
                    />{" "}
                    <span className="text-label-sm font-label-sm">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg">
                    <Image
                      src="/images/img-11.png"
                      alt="Twitter"
                      width={512}
                      height={512}
                      className="w-4 h-4"
                    />{" "}
                    <span className="text-label-sm font-label-sm">X (Twitter)</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg">
                    <Image
                      src="/images/img-18.png"
                      alt="Facebook"
                      width={512}
                      height={512}
                      className="w-4 h-4"
                    />{" "}
                    <span className="text-label-sm font-label-sm">Facebook</span>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-full min-h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 to-vibrant-orange/10"></div>
                <Image
                  src="/images/img-12.png"
                  alt=""
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Browser Settings */}
          <div className="md:col-span-12 mt-stack-md bg-primary-container text-white rounded-xl p-stack-md">
            <div className="flex flex-col md:flex-row gap-gutter items-center">
              <div className="flex-1">
                <h2 className="font-headline-md text-headline-md mb-stack-sm">
                  Paramétrage via votre navigateur
                </h2>
                <p className="font-body-md text-body-md opacity-80 leading-relaxed">
                  Vous pouvez également configurer votre logiciel de navigation de manière à ce que
                  des cookies soient enregistrés dans votre terminal ou, au contraire, qu’ils soient
                  rejetés. Chaque navigateur a sa propre configuration pour la gestion des cookies.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {BROWSER_COOKIE_GUIDES.map((guide) => (
                  <a
                    key={guide.name}
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all text-label-sm"
                  >
                    {guide.name}
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* Le panneau de préférences est rendu par CookieConsentProvider, dans le layout. */}
    </>
  );
}
