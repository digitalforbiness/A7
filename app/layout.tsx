import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/CookieConsent";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Material Symbols n'est pas au catalogue next/font/google : on l'auto-héberge.
 * Le .woff2 est réduit aux seules icônes du site (8 Ko au lieu de ~3,5 Mo).
 * Après avoir ajouté une nouvelle icône dans une page, régénérer le sous-ensemble :
 *   npm run icons
 */
const materialSymbols = localFont({
  src: "./fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a7emailing.com"),
  title: {
    default: "A7 Emailing | Routage SaaS & Data Technologies",
    template: "%s | A7 Emailing",
  },
  description:
    "A7 Emailing accompagne les professionnels du e-commerce et de la monétisation : routage haute délivrabilité, automation IA et architecture data.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "A7 Emailing",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth antialiased ${montserrat.variable} ${inter.variable} ${materialSymbols.variable}`}
    >
      <body className="bg-background text-on-background font-body-md text-body-md">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:top-4 focus:left-4 focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu
        </a>
        <CookieConsentProvider>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
