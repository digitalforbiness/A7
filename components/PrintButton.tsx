"use client";

type PrintButtonProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Ouvre la boîte d'impression du navigateur, qui permet d'enregistrer en PDF.
 * Évite d'avoir à maintenir un PDF statique en parallèle du contenu de la page.
 */
export default function PrintButton({ className, children }: PrintButtonProps) {
  return (
    <button type="button" className={className} onClick={() => window.print()}>
      {children}
    </button>
  );
}
