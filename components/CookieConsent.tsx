"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  type Consent,
  getServerSnapshot,
  getSnapshot,
  parseConsent,
  saveConsent,
  subscribe,
} from "@/lib/cookie-consent-store";

type CookieConsentValue = {
  consent: Consent | null;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentValue | null>(null);

/** Ouvre le panneau de préférences depuis n'importe quel composant client. */
export function useCookieConsent() {
  const value = useContext(CookieConsentContext);
  if (!value) {
    throw new Error("useCookieConsent doit être utilisé dans <CookieConsentProvider>");
  }
  return value;
}

export default function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const consent = parseConsent(stored);

  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  // Le choix est enregistré côté navigateur uniquement : GTM est chargé sans
  // condition (voir components/GoogleTagManager.tsx) et n'est pas piloté d'ici.
  const persist = useCallback((choice: Omit<Consent, "decidedAt">) => {
    saveConsent(choice);
    setModalOpen(false);
  }, []);

  // Les interrupteurs repartent du choix enregistré à chaque ouverture.
  const openPreferences = useCallback(() => {
    const current = parseConsent(getSnapshot());
    setAnalytics(current?.analytics ?? true);
    setMarketing(current?.marketing ?? false);
    setModalOpen(true);
  }, []);

  // La touche Échap doit fermer la modale, comme n'importe quel dialogue.
  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  const value = useMemo<CookieConsentValue>(
    () => ({ consent, openPreferences }),
    [consent, openPreferences],
  );

  // getServerSnapshot renvoie null : le bandeau n’existe pas dans le HTML prérendu
  // et n’apparaît qu’après hydratation, uniquement pour un visiteur sans choix.
  const showBanner = !consent && !modalOpen;

  return (
    <CookieConsentContext.Provider value={value}>
      {children}

      {showBanner && (
        <div
          role="region"
          aria-label="Consentement aux cookies"
          className="fixed bottom-6 left-6 right-6 md:left-auto md:w-96 z-100"
        >
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-border-subtle flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-vibrant-orange">cookie</span>
              <h2 className="font-bold text-primary">Confidentialité</h2>
            </div>
            <p className="text-label-sm font-label-sm text-text-muted leading-relaxed">
              Nous déposons des cookies de mesure d&apos;audience pour améliorer le site. Vous
              gardez la main sur ce que vous acceptez.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => persist({ analytics: false, marketing: false })}
                className="flex-1 border border-border-subtle text-text-main py-2 rounded font-bold hover:bg-surface-gray transition-colors"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics: true, marketing: true })}
                className="flex-1 bg-secondary text-white py-2 rounded font-bold hover:bg-secondary-container transition-colors"
              >
                Tout accepter
              </button>
            </div>
            <button
              type="button"
              onClick={openPreferences}
              className="text-label-sm font-label-sm text-text-muted underline hover:text-primary transition-colors"
            >
              Personnaliser mes choix
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-100">
          <button
            type="button"
            aria-label="Fermer les préférences"
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 w-full h-full bg-deep-purple/40 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titre-preferences-cookies"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg bg-white rounded-xl shadow-2xl p-stack-md border border-border-subtle"
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                id="titre-preferences-cookies"
                className="font-headline-md text-headline-md text-deep-purple"
              >
                Gérer mes préférences
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Fermer"
                className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors"
              >
                close
              </button>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-between gap-4 p-4 bg-surface-gray rounded-lg">
                <div>
                  <p className="font-bold text-deep-purple">Cookies essentiels</p>
                  <p className="text-label-sm text-on-surface-variant">
                    Nécessaires au fonctionnement
                  </p>
                </div>
                <span className="text-vibrant-orange font-bold text-label-sm">OBLIGATOIRE</span>
              </div>

              <ConsentToggle
                label="Analyse d'audience"
                description="Mesure de performance anonyme"
                checked={analytics}
                onChange={setAnalytics}
              />
              <ConsentToggle
                label="Marketing & social"
                description="Publicités ciblées et réseaux"
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => persist({ analytics, marketing })}
                className="flex-1 py-3 border border-deep-purple text-deep-purple font-bold rounded-lg hover:bg-surface-container transition-colors"
              >
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics: true, marketing: true })}
                className="flex-1 py-3 bg-deep-purple text-white font-bold rounded-lg hover:bg-primary transition-colors"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  );
}

function ConsentToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-surface-gray rounded-lg">
      <div>
        <p className="font-bold text-deep-purple">{label}</p>
        <p className="text-label-sm text-on-surface-variant">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0">
        <span className="sr-only">{label}</span>
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-primary-container peer-checked:bg-vibrant-orange after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
      </label>
    </div>
  );
}
