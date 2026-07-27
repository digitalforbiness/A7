import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez à un expert A7 Emailing : demande commerciale, démonstration, support technique ou partenariat. Réponse sous 24 heures ouvrées.",
};

/** Canaux de contact directs, en complément du formulaire. */
const CHANNELS = [
  {
    icon: "call",
    label: "Par téléphone",
    value: contact.phone,
    href: contact.phoneHref,
    hint: "Du lundi au vendredi, 9h – 18h",
  },
  {
    icon: "mail",
    label: "Par email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    hint: "Réponse sous 24 heures ouvrées",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="text-center max-w-2xl mx-auto mb-stack-lg">
          <span className="inline-block bg-secondary-container/10 text-secondary font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-4 border border-secondary-container/20 uppercase">
            Contact
          </span>
          <h1 className="font-display-lg text-display-lg text-deep-purple mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-body-lg font-body-lg text-text-muted">
            Une question, une démonstration ou un besoin sur-mesure&nbsp;? Écrivez-nous : un expert
            A7 vous répond sous 24&nbsp;heures ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            {CHANNELS.map((channel) => (
              <a
                key={channel.icon}
                href={channel.href}
                className="card-shadow flex gap-4 p-6 bg-white rounded-xl border border-border-subtle"
              >
                <span className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{channel.icon}</span>
                </span>
                <span className="min-w-0">
                  <span className="block text-label-sm font-label-sm text-text-muted uppercase">
                    {channel.label}
                  </span>
                  <span className="block font-bold text-deep-purple break-words">
                    {channel.value}
                  </span>
                  <span className="block text-body-md text-text-muted mt-1">{channel.hint}</span>
                </span>
              </a>
            ))}

            <div className="p-6 bg-surface-gray rounded-xl border border-border-subtle">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary">business</span>
                <h2 className="font-bold text-deep-purple">Nos bureaux</h2>
              </div>
              <address className="not-italic text-body-md text-text-muted leading-relaxed">
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}
              </address>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
