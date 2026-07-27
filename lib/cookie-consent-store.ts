/**
 * Petit store externe adossé à localStorage, consommé via useSyncExternalStore.
 *
 * Passer par un store plutôt que par un effet évite le rendu intermédiaire où le
 * bandeau apparaîtrait à un visiteur ayant déjà fait son choix, et garde les
 * onglets ouverts synchronisés.
 */

const STORAGE_KEY = "a7-cookie-consent";

export type Consent = {
  analytics: boolean;
  marketing: boolean;
  /** Date ISO du choix — le consentement est à renouveler au bout de 13 mois. */
  decidedAt: string;
};

const listeners = new Set<() => void>();

// useSyncExternalStore compare les snapshots par identité : on met en cache la
// chaîne brute, qui elle se compare par valeur.
let snapshot: string | null = null;
let snapshotLoaded = false;

function readStorage(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Stockage indisponible (navigation privée, cookies bloqués) : on redemandera.
    return null;
  }
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // Un autre onglet peut modifier le choix ; l'événement storage nous en informe.
  window.addEventListener("storage", invalidate);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", invalidate);
  };
}

function invalidate() {
  snapshotLoaded = false;
  for (const listener of listeners) listener();
}

export function getSnapshot(): string | null {
  if (!snapshotLoaded) {
    snapshot = readStorage();
    snapshotLoaded = true;
  }
  return snapshot;
}

/** Côté serveur, aucun choix n'est connu : le bandeau ne doit pas être prérendu. */
export function getServerSnapshot(): string | null {
  return null;
}

export function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Omit<Consent, "decidedAt">): void {
  const next: Consent = { ...choice, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Le choix vaudra au moins pour la session en cours.
  }
  invalidate();
}
