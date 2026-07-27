"use client";

import { useCookieConsent } from "./CookieConsent";

/** Rouvre le panneau de consentement depuis le contenu d'une page. */
export default function CookiePreferencesButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" className={className} onClick={openPreferences}>
      {children}
    </button>
  );
}
