type LogoProps = {
  /** "dark" pour les fonds sombres (footer), "light" pour les fonds clairs. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Logotype A7 Emailing.
 *
 * Marque de substitution en SVG : le logo d'origine des maquettes pointait vers
 * une URL Google temporaire, désormais inaccessible. Pour brancher le vrai logo,
 * déposer le fichier dans public/ et remplacer ce SVG par un <Image />.
 */
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";
  const markBg = isDark ? "#ffffff" : "#330b43";
  const markFg = isDark ? "#330b43" : "#ffffff";
  const wordmark = isDark ? "#ffffff" : "#330b43";
  const tagline = isDark ? "rgba(255,255,255,0.65)" : "#636e72";

  return (
    <svg viewBox="0 0 188 40" className={className} role="img" aria-label="A7 Emailing">
      <rect width="40" height="40" rx="10" fill={markBg} />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fill={markFg}
        fontFamily="var(--font-montserrat), sans-serif"
        fontSize="18"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        A7
      </text>
      <text
        x="52"
        y="20"
        fill={wordmark}
        fontFamily="var(--font-montserrat), sans-serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="-0.3"
      >
        Emailing
      </text>
      <text
        x="52"
        y="32"
        fill={tagline}
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8"
        fontWeight="600"
        letterSpacing="1.6"
      >
        ROUTAGE &amp; DATA
      </text>
    </svg>
  );
}
