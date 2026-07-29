import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import PrintButton from "@/components/PrintButton";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment A7 Emailing collecte, utilise et protège vos données personnelles, et comment exercer vos droits RGPD.",
};

/** Ancres du sommaire latéral, dans l'ordre des sections. */
const SUMMARY = [
  { href: "#responsable", label: "Responsable du traitement" },
  { href: "#donnees", label: "Données collectées" },
  { href: "#finalites", label: "Finalités & bases légales" },
  { href: "#destinataires", label: "Destinataires" },
  { href: "#conservation", label: "Durée de conservation" },
  { href: "#droits", label: "Vos droits" },
  { href: "#securite", label: "Sécurité" },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg">
      <div className="text-center mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-deep-purple mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
          Dernière mise à jour : 27 juillet 2026. A7 Emailing s&apos;engage à protéger les données
          personnelles de ses clients et des visiteurs de son site, conformément au Règlement
          général sur la protection des données (RGPD).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <aside className="hidden lg:block lg:col-span-3">
          <nav
            aria-label="Sommaire"
            className="sticky top-24 bg-white p-6 rounded-lg border border-border-subtle shadow-sm"
          >
            <h2 className="font-headline-md text-headline-md text-deep-purple mb-6">Sommaire</h2>
            <ul className="space-y-4">
              {SUMMARY.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-6">
          <Accordion
            id="responsable"
            icon="verified_user"
            title="01. Responsable du traitement"
            defaultOpen
          >
            <p className="mb-4">
              Le responsable du traitement des données collectées sur ce site est A7 Emailing, dont
              les coordonnées figurent dans les{" "}
              <Link href="/mentions-legales" className="text-primary underline">
                mentions légales
              </Link>
              .
            </p>
            <p>
              Pour toute question relative à vos données, vous pouvez écrire à{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline">
                {contact.email}
              </a>{" "}
              ou nous joindre au {contact.phone}.
            </p>
          </Accordion>

          <Accordion id="donnees" icon="dns" title="02. Données collectées">
            <p className="mb-4">
              Nous collectons uniquement les données nécessaires à nos services :
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Données de compte :</strong> nom, adresse e-mail professionnelle, société,
                coordonnées de facturation.
              </li>
              <li>
                <strong>Données de campagne :</strong> les bases de contacts que vous importez, dont
                vous restez propriétaire et responsable.
              </li>
              <li>
                <strong>Données d&apos;usage :</strong> journaux de connexion, statistiques de
                délivrabilité et mesures de performance.
              </li>
              <li>
                <strong>Formulaire de contact :</strong> les informations que vous nous transmettez
                pour traiter votre demande.
              </li>
            </ul>
          </Accordion>

          <Accordion id="finalites" icon="query_stats" title="03. Finalités & bases légales">
            <p className="mb-4">Vos données sont traitées pour des finalités déterminées :</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Exécution du contrat :</strong> fourniture de la plateforme, routage des
                campagnes et facturation.
              </li>
              <li>
                <strong>Intérêt légitime :</strong> sécurité, prévention de la fraude et
                amélioration continue du service.
              </li>
              <li>
                <strong>Consentement :</strong> mesure d&apos;audience et communications
                commerciales, révocable à tout moment.
              </li>
              <li>
                <strong>Obligation légale :</strong> conservation des documents comptables et
                réponse aux réquisitions.
              </li>
            </ul>
          </Accordion>

          <Accordion id="destinataires" icon="groups" title="04. Destinataires & sous-traitants">
            <p className="mb-4">
              Vos données ne sont jamais vendues. Elles ne sont accessibles qu&apos;aux équipes
              internes habilitées et à des sous-traitants techniques (hébergement, paiement, envoi
              d&apos;e-mails) encadrés par des accords conformes au RGPD.
            </p>
            <p>
              En tant que sous-traitant de vos propres campagnes, A7 Emailing n&apos;utilise vos
              bases de contacts que pour exécuter les envois que vous commandez.
            </p>
          </Accordion>

          <Accordion id="conservation" icon="event_repeat" title="05. Durée de conservation">
            <ul className="list-disc pl-6 space-y-3">
              <li>Données de compte : pendant toute la durée de la relation contractuelle.</li>
              <li>Données de facturation : 10 ans, conformément aux obligations comptables.</li>
              <li>Journaux techniques : 12 mois.</li>
              <li>Consentement aux cookies : 13 mois maximum, puis renouvellement demandé.</li>
              <li>Demandes via le formulaire de contact : 3 ans après le dernier échange.</li>
            </ul>
          </Accordion>

          <Accordion id="droits" icon="gavel" title="06. Vos droits">
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de portabilité sur vos données.
              Vous pouvez les exercer en écrivant à{" "}
              <a href={`mailto:${contact.email}`} className="text-primary underline">
                {contact.email}
              </a>
              .
            </p>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
              vous pouvez introduire une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                cnil.fr
              </a>
              ).
            </p>
          </Accordion>

          <Accordion id="securite" icon="lock" title="07. Sécurité & cookies">
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles (chiffrement,
              cloisonnement des accès, supervision) pour protéger vos données contre tout accès non
              autorisé.
            </p>
            <p>
              Le détail des traceurs déposés sur ce site et la manière de les refuser figurent dans
              notre{" "}
              <Link href="/politique-cookies" className="text-primary underline">
                politique des cookies
              </Link>
              .
            </p>
          </Accordion>
        </div>
      </div>

      <section className="mt-stack-lg bg-deep-purple text-white p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
        <div>
          <h2 className="font-headline-md text-headline-md mb-2">Une question sur vos données ?</h2>
          <p className="text-primary-fixed opacity-90">
            Notre équipe répond à toute demande relative à la confidentialité.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <PrintButton className="inline-flex items-center gap-2 bg-white text-deep-purple px-6 py-3 rounded-lg font-bold hover:bg-surface-variant transition-all">
            <span className="material-symbols-outlined">download</span>
            Enregistrer en PDF
          </PrintButton>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-deep-purple transition-all"
          >
            <span className="material-symbols-outlined">support_agent</span>
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
