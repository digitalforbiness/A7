import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
};

/**
 * Page 404. En export statique, Next en génère out/404.html, que GitHub Pages
 * sert automatiquement pour toute URL inconnue.
 */
export default function NotFound() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg text-center">
      <p className="font-display-lg text-display-lg text-secondary-container mb-4">404</p>
      <h1 className="font-headline-lg text-headline-lg text-deep-purple mb-4">
        Cette page n&apos;existe pas
      </h1>
      <p className="text-body-lg font-body-lg text-text-muted max-w-xl mx-auto mb-8">
        Le lien est peut-être erroné ou la page a été déplacée. Revenez à l&apos;accueil ou
        contactez-nous.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-container transition-all"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
