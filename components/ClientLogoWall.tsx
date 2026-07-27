"use client";

import Image from "next/image";
import { useState } from "react";
import { CLIENT_CATEGORIES, clients, type ClientCategory } from "@/lib/clients";

/** Mur de logos filtrable par secteur. */
export default function ClientLogoWall() {
  const [active, setActive] = useState<ClientCategory>("tous");

  const visible =
    active === "tous" ? clients : clients.filter((client) => client.category === active);

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
          {visible.map((client) => (
            <li
              key={client.logo}
              className="logo-grid-item bg-white p-8 rounded-lg flex items-center justify-center grayscale hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={512}
                height={512}
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
