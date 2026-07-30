/**
 * Sous-chemin de publication, aligné sur `basePath` dans next.config.ts.
 *
 * next/image et next/link préfixent le basePath automatiquement ; les URLs
 * d'assets écrites à la main (images de fond CSS) ne le sont pas — d'où cette
 * constante à préfixer explicitement dans ces cas.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Préfixe un chemin d'asset du dossier public/ avec le basePath courant. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
