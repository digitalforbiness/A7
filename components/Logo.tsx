import Image from "next/image";

type LogoProps = {
  /** "dark" pour les fonds sombres (footer) : le logo est rendu en blanc. */
  variant?: "light" | "dark";
  className?: string;
  /** true pour le logo de l'entête (au-dessus de la ligne de flottaison). */
  priority?: boolean;
};

/**
 * Logo officiel A7 Emailing (public/logo-a7.png, fond transparent).
 *
 * Sur fond sombre, les parties violettes ne ressortiraient pas : la variante
 * "dark" applique brightness-0 + invert pour afficher le logo en blanc.
 */
export default function Logo({ variant = "light", className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo-a7.png"
      alt="A7 Emailing"
      width={300}
      height={210}
      priority={priority}
      className={`${className} ${variant === "dark" ? "brightness-0 invert" : ""}`.trim()}
    />
  );
}
