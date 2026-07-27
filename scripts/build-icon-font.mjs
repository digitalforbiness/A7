/**
 * Régénère app/fonts/material-symbols-outlined.woff2.
 *
 * Scanne app/ et components/ pour relever les noms d'icônes utilisés, puis demande
 * à Google Fonts un sous-ensemble limité à ces icônes. Sans ce sous-ensemble la
 * police pèse ~3,5 Mo ; avec, quelques kilo-octets.
 *
 * Usage : npm run icons
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const SOURCE_DIRS = ["app", "components"];
const OUTPUT = "app/fonts/material-symbols-outlined.woff2";
const SCANNED_EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js"]);

const ICON_PATTERNS = [
  // <span className="material-symbols-outlined">nom_icone</span>
  /material-symbols-outlined[^>]*>\s*([a-z0-9_]+)\s*</g,
  // <Accordion icon="nom_icone" …> — l'icône passe par une prop, pas par le texte.
  /\bicon=["']([a-z0-9_]+)["']/g,
];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(path);
      return SCANNED_EXTENSIONS.has(extname(entry.name)) ? [path] : [];
    }),
  );
  return files.flat();
}

const icons = new Set();
for (const dir of SOURCE_DIRS) {
  for (const file of await collectFiles(dir)) {
    const source = await readFile(file, "utf8");
    for (const pattern of ICON_PATTERNS) {
      for (const [, name] of source.matchAll(pattern)) icons.add(name);
    }
  }
}

if (icons.size === 0) {
  console.error("Aucune icône trouvée — police laissée inchangée.");
  process.exit(1);
}

const names = [...icons].sort();
console.log(`${names.length} icônes : ${names.join(", ")}`);

// Une UA de navigateur est nécessaire, sinon Google renvoie du TTF au lieu du woff2.
const browserUA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const cssUrl =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" +
  `&icon_names=${names.join(",")}`;

const css = await fetch(cssUrl, { headers: { "User-Agent": browserUA } });
if (!css.ok) {
  // Un nom d'icône inexistant fait échouer toute la requête.
  console.error(`Google Fonts a répondu ${css.status}. Nom d'icône invalide ?`);
  process.exit(1);
}

const fontUrl = (await css.text()).match(/url\((https:\/\/[^)]+)\)/)?.[1];
if (!fontUrl) {
  console.error("Aucune URL de police dans la réponse CSS.");
  process.exit(1);
}

const font = await fetch(fontUrl, { headers: { "User-Agent": browserUA } });
if (!font.ok) {
  console.error(`Téléchargement de la police en échec : ${font.status}`);
  process.exit(1);
}

const bytes = Buffer.from(await font.arrayBuffer());
await writeFile(OUTPUT, bytes);
console.log(`${OUTPUT} écrit (${(bytes.length / 1024).toFixed(1)} Ko)`);
