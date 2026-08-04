import Link from "next/link";
import Logo from "./Logo";
import { contact, contactRoute, legalNav, mainNav, qualityNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-deep-purple text-on-primary mt-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          <div>
            <Logo variant="dark" className="h-12 w-auto mb-6" />
            <p className="text-body-md text-surface-variant/70 leading-relaxed">
              Le partenaire stratégique des professionnels de l&apos;emailing. Expertise,
              performance et précision.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-label-sm font-label-sm uppercase tracking-widest mb-6">
              Nos services
            </h2>
            <ul className="space-y-4">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-surface-variant/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-label-sm font-label-sm uppercase tracking-widest mb-6">
              Démarche qualité
            </h2>
            <ul className="space-y-4">
              {qualityNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-md text-surface-variant/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-label-sm font-label-sm uppercase tracking-widest mb-6">
              Contact
            </h2>
            <address className="not-italic text-body-md text-surface-variant/70 space-y-2">
              <p>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </p>
              <p>
                <a href={contact.phoneHref} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </p>
            </address>
            <Link
              href={contactRoute}
              className="inline-flex items-center gap-1 mt-4 font-bold text-secondary-fixed-dim hover:text-white transition-colors"
            >
              Nous écrire
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm font-label-sm text-surface-variant/50">
            © {new Date().getFullYear()} A7 Emailing. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap justify-center gap-6">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label-sm font-label-sm text-surface-variant/50 hover:text-white underline decoration-secondary-container transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Signature de l'agence qui réalise et opère le site. */}
        <div className="mt-8 flex justify-center">
          <p className="text-label-sm font-label-sm text-surface-variant/50">
            Powered by <span className="font-bold text-surface-variant/70">DFB</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
