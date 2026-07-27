"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { contact, contactRoute, isActive, mainNav } from "@/lib/navigation";

// Le lien Contact complète les liens « services » dans la barre de navigation.
const navLinks = [...mainNav, { href: contactRoute, label: "Contact" }];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderedPath, setRenderedPath] = useState(pathname);

  // Le menu mobile doit se refermer après une navigation, sinon il masque la page
  // d'arrivée. L'ajustement se fait pendant le rendu — pas dans un effet — pour
  // éviter d'afficher une frame avec le menu encore ouvert.
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-border-subtle shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
                    : "text-text-muted hover:text-primary transition-colors font-body-md text-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a className="hidden xl:flex flex-col items-end mr-2" href={contact.phoneHref}>
            <span className="text-label-sm font-label-sm text-text-muted uppercase">
              Support expert
            </span>
            <span className="text-body-md font-bold text-primary">{contact.phone}</span>
          </a>

          <Link
            href="/tarifs"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2 rounded-lg font-bold text-body-md hover:bg-primary-container transition-all active:scale-95"
          >
            Essai gratuit
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden text-primary p-2 -mr-2"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="lg:hidden border-t border-border-subtle bg-surface px-margin-mobile py-stack-md"
        >
          <ul className="flex flex-col gap-stack-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href, pathname) ? "page" : undefined}
                  className={`block py-2 font-body-md text-body-md ${
                    isActive(link.href, pathname) ? "text-primary font-bold" : "text-text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-stack-md pt-stack-md border-t border-border-subtle flex flex-col gap-stack-sm">
            <Link
              href="/tarifs"
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-body-md text-center"
            >
              Essai gratuit
            </Link>
            <a
              href={contact.phoneHref}
              className="text-body-md font-bold text-primary text-center py-2"
            >
              {contact.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
