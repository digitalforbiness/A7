import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/CookieConsent";

/** Identifiant du conteneur Google Tag Manager. */
const GTM_ID = "GTM-PRW38XRL";
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
      {/*
        Google Tag Manager avec Consent Mode v2. Un seul script, exécuté dans
        l'ordre : (1) état de consentement par défaut « denied », (2) mise à jour
        immédiate si le visiteur a déjà choisi (localStorage), puis (3) chargement
        de GTM. Les changements en direct sont poussés par le bandeau cookies.
      */}
      <Script id="gtm" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});try{var c=JSON.parse(localStorage.getItem('a7-cookie-consent')||'null');if(c){gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied'});}}catch(e){}(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <body className="bg-background text-on-background font-body-md text-body-md">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
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
