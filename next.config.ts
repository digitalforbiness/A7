import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export 100 % statique : `next build` écrit le site dans out/, déployable sur
  // n'importe quel hébergeur de fichiers (ici GitHub Pages), sans serveur.
  output: "export",

  // GitHub Pages sert des fichiers : l'optimisation d'images à la volée (qui exige
  // un serveur) est désactivée, les images sont servies telles quelles.
  images: { unoptimized: true },

  // /contact → /contact/index.html : les liens profonds fonctionnent au
  // rafraîchissement, sans réécriture côté serveur.
  trailingSlash: true,

  // Site publié à la racine d'un domaine personnalisé (voir public/CNAME).
  // Pour un déploiement sur username.github.io/<repo>, décommenter et adapter :
  // basePath: "/A7",
};

export default nextConfig;
