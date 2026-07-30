/**
 * Loader d'image pour l'export statique.
 *
 * En export statique, next/image avec `unoptimized` ne préfixe pas le basePath
 * aux sources locales. Ce loader le fait : il sert l'image telle quelle (aucune
 * optimisation serveur) en préfixant le sous-chemin de publication. Fonctionne
 * aussi bien sur la GitHub Page projet (/A7) que sur un domaine à la racine.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function staticImageLoader({ src }: { src: string }): string {
  return src.startsWith("http") ? src : `${basePath}${src}`;
}
