import type { NextConfig } from "next";

// Sous-chemin de publication. Vide pour un domaine à la racine (a7emailing.com,
// dfbextend.fr…), "/A7" pour la GitHub Page projet digitalforbiness.github.io/A7.
// Piloté par l'environnement pour qu'un changement d'hébergement ne touche pas au code.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Export 100 % statique : `next build` écrit le site dans out/, déployable sur
  // n'importe quel hébergeur de fichiers (ici GitHub Pages), sans serveur.
  output: "export",

  // GitHub Pages sert des fichiers : pas d'optimisation serveur. Le loader custom
  // sert les images telles quelles en appliquant le basePath (ce que `unoptimized`
  // ne fait pas).
  images: { loader: "custom", loaderFile: "./image-loader.ts" },

  // /contact → /contact/index.html : les liens profonds fonctionnent au
  // rafraîchissement, sans réécriture côté serveur.
  trailingSlash: true,

  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
