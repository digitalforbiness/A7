import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Les règles d'utilisation de la plateforme A7 Emailing.",
};

export default function CguPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-stack-lg">
        {/* Hero Section for CGU */}
        <div className="text-center mb-stack-lg">
          <h1 className="font-display-lg text-display-lg text-deep-purple mb-4">
            Conditions Générales d’Utilisation
          </h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
            Dernière mise à jour : 24 Mai 2024. Veuillez lire attentivement ces conditions avant
            d’utiliser les services de la plateforme A7 Emailing.
          </p>
        </div>
        {/* CGU Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Side Navigation Links (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white p-6 rounded-lg border border-border-subtle shadow-sm">
              <h3 className="font-headline-md text-headline-md text-deep-purple mb-6">Sommaire</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                    href="#definitions"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>{" "}
                    Définitions
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                    href="#acces"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span> Accès
                    au Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                    href="#responsabilites"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>{" "}
                    Responsabilités
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                    href="#propriete"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>{" "}
                    Propriété Intellectuelle
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                    href="#responsabilite-juridique"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>{" "}
                    Responsabilité Juridique
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          {/* Main Legal Content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Section 1: Définitions */}
            <Accordion id="definitions" icon="description" title="01. Définitions" defaultOpen>
              <p className="mb-4">
                Les termes suivants, lorsqu’ils sont employés avec une majuscule, ont la
                signification suivante :
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Client :</strong> Toute personne morale ou physique agissant à des fins
                  professionnelles ayant souscrit aux Services de A7 Emailing.
                </li>
                <li>
                  <strong>Plateforme :</strong> L’ensemble des outils logiciels et services
                  accessibles via le site a7emailing.com.
                </li>
                <li>
                  <strong>Contenu :</strong> Toutes les données, textes, images ou fichiers importés
                  par l’Utilisateur sur la Plateforme.
                </li>
                <li>
                  <strong>Utilisateur :</strong> Toute personne autorisée par le Client à accéder au
                  compte de ce dernier.
                </li>
              </ul>
            </Accordion>
            {/* Section 2: Accès au Service */}
            <Accordion id="acces" icon="login" title="02. Accès au Service">
              <p className="mb-4">
                A7 Emailing s’efforce de permettre l’accès à la Plateforme 24 heures sur 24, 7 jours
                sur 7, sauf en cas de force majeure ou d’un événement hors du contrôle de l’Éditeur,
                et sous réserve des éventuelles pannes et interventions de maintenance nécessaires
                au bon fonctionnement du service.
              </p>
              <p>
                L’accès au Service est subordonné à la création d’un Compte Client et au paiement
                des frais d’abonnement correspondants aux offres souscrites (E-commerce,
                Monetization, Architecture, Entreprise).
              </p>
            </Accordion>
            {/* Section 3: Responsabilités de l'Utilisateur */}
            <Accordion
              id="responsabilites"
              icon="person_check"
              title="03. Responsabilités de l'Utilisateur"
            >
              <p className="mb-4">
                L’Utilisateur s’engage à utiliser les Services conformément aux lois et règlements
                en vigueur, notamment en matière de protection des données personnelles (RGPD).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-surface-gray p-4 rounded-lg border border-border-subtle">
                  <h4 className="font-bold text-deep-purple mb-2">Sécurité</h4>
                  <p className="text-sm">
                    Confidentialité des identifiants et mots de passe d’accès.
                  </p>
                </div>
                <div className="bg-surface-gray p-4 rounded-lg border border-border-subtle">
                  <h4 className="font-bold text-deep-purple mb-2">Contenu</h4>
                  <p className="text-sm">
                    Légalité des messages envoyés via la plateforme (Loi pour la Confiance dans
                    l’Économie Numérique).
                  </p>
                </div>
              </div>
            </Accordion>
            {/* Section 4: Propriété Intellectuelle */}
            <Accordion id="propriete" icon="copyright" title="04. Propriété Intellectuelle">
              <p className="mb-4">
                Tous les éléments constituant la Plateforme A7 Emailing (logiciels, design, logos,
                bases de données) sont la propriété exclusive de l’Éditeur ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou
                partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
                interdite, sauf autorisation écrite préalable.
              </p>
            </Accordion>
            {/* Section 5: Responsabilité Juridique */}
            <Accordion
              id="responsabilite-juridique"
              icon="gavel"
              title="05. Responsabilité Juridique"
            >
              <p className="mb-4">
                A7 Emailing agit en tant que prestataire de services techniques et ne saurait être
                tenue pour responsable des dommages directs ou indirects causés par l’utilisation du
                service par le Client.
              </p>
              <blockquote className="bg-surface-gray p-6 rounded-lg italic border-l-4 border-vibrant-orange">
                «&nbsp;La responsabilité de l&apos;Éditeur ne peut être engagée en cas de retard de
                livraison des emails lié à des problèmes techniques chez les FAI ou pour toute perte
                de données imputable au Client.&nbsp;»
              </blockquote>
            </Accordion>
          </div>
        </div>
        {/* Download & Support Section */}
        <section className="mt-stack-lg bg-deep-purple text-white p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
          <div>
            <h3 className="font-headline-md text-headline-md mb-2">Besoin d&apos;une copie ?</h3>
            <p className="text-primary-fixed opacity-90">
              Conservez une version locale de nos conditions générales d&apos;utilisation.
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
              Contacter le support
            </Link>
          </div>
        </section>
      </div>
      {/* Footer */}
    </>
  );
}
