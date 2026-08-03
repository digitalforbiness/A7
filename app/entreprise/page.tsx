import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entreprise",
  description:
    "Notre histoire, nos équipes et nos engagements : la satisfaction client comme moteur principal.",
};

export default function EntreprisePage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="pt-24">
        {/* Hero Section: Notre Vision (Gilles Sabas) */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-deep-purple px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <span className="bg-secondary-container/20 text-secondary-container font-label-sm text-label-sm px-4 py-1 rounded-full uppercase tracking-widest">
                Notre Vision
              </span>
              <h1 className="font-display-lg text-display-lg text-on-primary leading-tight">
                La satisfaction de nos clients est notre{" "}
                <span className="text-secondary-fixed-dim">moteur principal</span>
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant/80 max-w-lg italic border-l-4 border-vibrant-orange pl-4">
                «&nbsp;Grimpons ensemble vers les sommets de votre réussite !&nbsp;» —{" "}
                <span className="font-bold">Gilles Sabas</span>, Fondateur
              </p>
              <div className="space-y-4 pt-2">
                <p className="text-surface-variant/70 font-semibold">Nos 4 points cardinaux :</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-vibrant-orange shrink-0">
                      sentiment_very_satisfied
                    </span>{" "}
                    <span className="text-body-md text-surface-variant/90">
                      Des utilisateurs <span className="font-bold">heureux</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-vibrant-orange shrink-0">
                      support_agent
                    </span>{" "}
                    <span className="text-body-md text-surface-variant/90">
                      Des utilisateurs <span className="font-bold">bien accompagnés</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-vibrant-orange shrink-0">
                      trending_up
                    </span>{" "}
                    <span className="text-body-md text-surface-variant/90">
                      Des utilisateurs <span className="font-bold">qui réussissent</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-vibrant-orange shrink-0">
                      handshake
                    </span>{" "}
                    <span className="text-body-md text-surface-variant/90">
                      Des relations <span className="font-bold">dans la durée</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  className="bg-vibrant-orange text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
                  href="/contact"
                >
                  Nous Contacter <span className="material-symbols-outlined">arrow_forward</span>
                </Link>{" "}
                <Link
                  className="inline-flex items-center justify-center border-2 border-white/40 text-on-primary px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-deep-purple transition-all"
                  href="/nos-clients"
                >
                  Voir nos références
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-fixed-dim/20 blur-3xl rounded-full group-hover:bg-primary-fixed-dim/30 transition-all"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-card aspect-video flex items-center justify-center">
                <Image
                  src="/images/img-01.png"
                  alt="Plateau de bureau vitré donnant sur une skyline en bord de mer au crépuscule"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Notre Histoire & Chiffres Clés */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-12 gap-gutter">
            {/* History Card */}
            <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between border border-border-subtle hover:border-primary/20 transition-all">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  L’Histoire d’A7 Emailing
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-bold">« Objectif No Spam »</span> : tel a été
                  notre objectif dès l’origine. Pour y parvenir, nous nous sommes entourés d’une
                  importante équipe d’ingénieurs et menons une ambitieuse politique R&amp;D. <br />
                  <br /> Notre plateforme SaaS est entièrement sécurisée, évolutive et dotée de
                  fonctionnalités avancées. Parce qu’un outil n’est rien sans maîtrise,{" "}
                  <span className="font-bold text-primary">
                    nous vous formons gratuitement dès l’ouverture de votre compte
                  </span>{" "}
                  pour bâtir ensemble votre e-réputation.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <p className="text-primary font-display-lg text-headline-md lg:text-headline-lg">
                    100+
                  </p>
                  <p className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                    Milliards livrés
                  </p>
                </div>
                <div>
                  <p className="text-primary font-display-lg text-headline-md lg:text-headline-lg">
                    25M
                  </p>
                  <p className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                    Ouvreurs / mois
                  </p>
                </div>
                <div>
                  <p className="text-primary font-display-lg text-headline-md lg:text-headline-lg">
                    25K
                  </p>
                  <p className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                    Bases hébergées
                  </p>
                </div>
                <div>
                  <p className="text-primary font-display-lg text-headline-md lg:text-headline-lg">
                    35M
                  </p>
                  <p className="text-label-sm font-label-sm uppercase text-on-surface-variant">
                    Profils uniques
                  </p>
                </div>
              </div>
            </div>
            {/* Secondary Visual Card */}
            <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-xl relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-6xl opacity-20">groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">L’Expertise Humaine</h3>
              <p className="opacity-80">
                24 passionnés à votre service au quotidien pour garantir votre succès.
              </p>
            </div>
          </div>
        </section>
        {/* Pourquoi choisir A7 */}
        <section className="bg-surface-gray py-stack-lg px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Pourquoi choisir A7 Emailing ?
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Un partenaire engagé dans un objectif de rentabilité maximale pour vos campagnes.
            </p>
            <div className="h-1 w-20 bg-vibrant-orange mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="max-w-container-max mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Technologie */}
            <div className="bg-white p-8 rounded-xl card-shadow border border-border-subtle">
              <div className="w-12 h-12 bg-primary-fixed-dim text-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">settings_suggest</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-deep-purple mb-3">
                Technologie de pointe
              </h3>
              <p className="text-on-surface-variant">
                Plateforme SaaS sécurisée et évolutive. Bénéficiez de la certification{" "}
                <span className="font-bold">Return Path</span> (en option) pour plus de
                délivrabilité.
              </p>
            </div>
            {/* Service Premium */}
            <div className="bg-white p-8 rounded-xl card-shadow border border-border-subtle">
              <div className="w-12 h-12 bg-secondary-fixed text-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-deep-purple mb-3">
                Service Premium
              </h3>
              <p className="text-on-surface-variant">
                <span className="font-bold text-secondary">Formation gratuite</span> dès
                l’ouverture. Maîtrise des bonnes pratiques pour garantir une e-réputation optimale.
              </p>
            </div>
            {/* Formules Compétitives */}
            <div className="bg-white p-8 rounded-xl card-shadow border border-border-subtle">
              <div className="w-12 h-12 bg-surface-container-highest text-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-deep-purple mb-3">
                Formules compétitives
              </h3>
              <p className="text-on-surface-variant">
                Pas de facturation au CPM. Forfaits{" "}
                <span className="font-bold">sans engagement</span>. Les tarifs les plus compétitifs
                du marché pour votre ROI.
              </p>
            </div>
          </div>
        </section>
        {/* Equipe Section Placeholder with updated text */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-2xl"></div>
                <Image
                  src="/images/img-26.png"
                  alt="Cinq membres de l'équipe A7 réunis autour d'ordinateurs portables sur une grande table en bois"
                  width={512}
                  height={512}
                  className="rounded-2xl shadow-xl z-10 relative"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Un accompagnement au jour le jour
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Nous vous accompagnons sur le chemin du succès. La clé ? Bâtir ensemble une bonne
                e-réputation via la maîtrise des bonnes pratiques, la meilleure solution pour
                garantir une délivrabilité optimale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">school</span>{" "}
                  <span className="font-semibold">Formation Gratuite</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">security</span>{" "}
                  <span className="font-semibold">RGPD Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">verified</span>{" "}
                  <span className="font-semibold">Délivrabilité Max</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-vibrant-orange">
                    support_agent
                  </span>{" "}
                  <span className="font-semibold">Support Expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="mb-stack-lg px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto bg-deep-purple rounded-3xl p-12 text-center text-on-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-fixed-dim/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-orange/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-display-lg text-headline-lg md:text-display-lg">
                Prêt à passer au niveau supérieur ?
              </h2>
              <p className="max-w-2xl mx-auto opacity-80 text-body-lg">
                Rejoignez les entreprises qui font le choix de la performance, de la sécurité et de
                l’accompagnement d’experts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  className="inline-flex items-center justify-center bg-white text-deep-purple px-10 py-4 rounded-xl font-bold hover:bg-primary-fixed-dim transition-all"
                  href="/tarifs"
                >
                  Démarrer un essai gratuit
                </Link>{" "}
                <Link
                  className="inline-flex items-center justify-center bg-vibrant-orange text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 shadow-lg transition-all"
                  href="/contact"
                >
                  Contacter un expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
