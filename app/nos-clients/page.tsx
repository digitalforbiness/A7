import type { Metadata } from "next";
import Image from "next/image";
import ClientLogoWall from "@/components/ClientLogoWall";
import Link from "next/link";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Ils nous font confiance",
  description:
    "Les marques qui s'appuient sur A7 Emailing pour leurs campagnes les plus critiques.",
};

export default function NosClientsPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-stack-lg text-center">
          <h1 className="font-display-lg text-display-lg text-deep-purple mb-4">
            Ils nous font confiance
          </h1>
          <p className="text-body-lg font-body-lg text-text-muted max-w-2xl mx-auto">
            Plus de 500 entreprises utilisent A7 pour propulser leur stratégie de communication
            emailing avec une précision chirurgicale.
          </p>
        </section>
        <ClientLogoWall />
        {/* Testimonials (Success Stories) */}
        <section className="bg-surface-container-low py-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg text-deep-purple text-center mb-stack-md">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Story 1 */}
              <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4 text-vibrant-orange">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <p className="text-body-md font-body-md italic text-on-surface mb-6">
                  «&nbsp;L’implémentation de A7 a augmenté notre taux d’ouverture de 35 % en
                  seulement deux mois grâce à leur segmentation intelligente.&nbsp;»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
                    <Image
                      src="/images/img-02.png"
                      alt="Portrait de Julie Durand"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-label-sm text-primary">Julie Durand</p>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">
                      Directrice Marketing, Retail-X
                    </p>
                  </div>
                </div>
              </div>
              {/* Story 2 */}
              <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4 text-vibrant-orange">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <p className="text-body-md font-body-md italic text-on-surface mb-6">
                  «&nbsp;Une plateforme d’une précision redoutable. Le support technique est à la
                  hauteur de nos exigences e-commerce internationales.&nbsp;»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
                    <Image
                      src="/images/img-04.png"
                      alt="Portrait de Thomas Martin"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-label-sm text-primary">Thomas Martin</p>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">
                      Fondateur, E-Boutique Pro
                    </p>
                  </div>
                </div>
              </div>
              {/* Story 3 */}
              <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4 text-vibrant-orange">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <p className="text-body-md font-body-md italic text-on-surface mb-6">
                  «&nbsp;Le dashboard de A7 nous permet de piloter les campagnes de nos clients avec
                  une transparence totale et des KPIs infalsifiables.&nbsp;»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
                    <Image
                      src="/images/img-22.png"
                      alt="Portrait de Sarah Benali"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-label-sm text-primary">Sarah Benali</p>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">
                      Account Manager, Mediaflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-24">
          <div className="bg-deep-purple rounded-3xl p-12 text-center text-on-primary overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <h2 className="font-headline-lg text-headline-lg mb-6 relative z-10">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-body-lg mb-10 opacity-90 max-w-xl mx-auto relative z-10">
              Découvrez comment A7 peut transformer votre communication digitale dès aujourd’hui.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                className="inline-flex items-center justify-center bg-vibrant-orange text-on-primary px-8 py-4 rounded-xl font-headline-md text-body-md hover:scale-105 active:scale-95 transition-all shadow-lg"
                href="/tarifs"
              >
                Lancer mon essai gratuit
              </Link>{" "}
              <a
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-on-primary border border-white/20 px-8 py-4 rounded-xl font-headline-md text-body-md hover:bg-white/20 transition-all"
                href={`mailto:${contact.email}`}
              >
                Contactez un expert
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
