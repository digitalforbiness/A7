"use client";

import Image from "next/image";
import { useState } from "react";
import { CLIENT_CATEGORIES, clientLogos, type FilterId } from "@/lib/client-logos";

/** Mur de logos clients, filtrable par secteur (grille statique, sans défilement). */
export default function ClientLogoWall() {
  const [active, setActive] = useState<FilterId>("tous");

  const visible =
    active === "tous" ? clientLogos : clientLogos.filter((logo) => logo.category === active);

  return (
    <>
      <section
        aria-label="Filtrer les clients par secteur"
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-md flex flex-wrap justify-center gap-4"
      >
        {CLIENT_CATEGORIES.map((category) => {
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              aria-pressed={selected}
              className={`px-6 py-2 rounded-full border font-label-sm text-label-sm transition-all ${
                selected
                  ? "bg-deep-purple text-white border-deep-purple"
                  : "border-border-subtle hover:bg-surface-gray"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter list-none">
          {visible.map((logo) => (
            <li
              key={logo.src}
              className="logo-grid-item bg-white p-8 rounded-lg flex items-center justify-center grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-12 w-auto object-contain"
              />
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="text-center text-text-muted py-stack-md">
            Aucun client dans cette catégorie pour le moment.
          </p>
        )}
      </section>
    </>
  );
}
