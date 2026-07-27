"use client";

import { useState } from "react";

type AccordionProps = {
  /** Sert de cible aux ancres du sommaire latéral. */
  id: string;
  /** Nom de l'icône Material Symbols affichée dans l'en-tête. */
  icon: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

/** Section de contenu repliable, utilisée par les pages légales. */
export default function Accordion({
  id,
  icon,
  title,
  defaultOpen = false,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panneau`;

  return (
    <div
      id={id}
      // scroll-mt compense le header fixe quand on arrive par une ancre.
      className="bg-white rounded-lg border border-border-subtle shadow-sm overflow-hidden scroll-mt-28"
    >
      <h2>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex justify-between items-center gap-4 p-6 text-left hover:bg-surface-container-low transition-colors"
        >
          <span className="flex items-center gap-4">
            <span className="bg-primary-container p-2 rounded-lg shrink-0">
              <span className="material-symbols-outlined text-on-primary-container">{icon}</span>
            </span>
            <span className="font-headline-md text-headline-md text-deep-purple">{title}</span>
          </span>
          <span
            aria-hidden="true"
            className={`material-symbols-outlined shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
      </h2>
      <div id={panelId} hidden={!open}>
        <div className="p-6 pt-0 border-t border-border-subtle text-on-surface-variant leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
