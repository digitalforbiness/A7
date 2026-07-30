import { contact, WEB3FORMS_ACCESS_KEY } from "./navigation";

const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";
const hasKey = Boolean(WEB3FORMS_ACCESS_KEY) && WEB3FORMS_ACCESS_KEY !== KEY_PLACEHOLDER;

const DEFAULT_SUBJECT = "Nouveau message depuis a7emailing.com";

export type SubmitResult = { ok: true; fallback?: boolean };

/**
 * Envoie une soumission de formulaire vers contact@a7emailing.com via Web3Forms —
 * aucun backend requis, fonctionne en hébergement statique.
 *
 * `subject` devient l'objet de l'e-mail ; les autres champs forment le corps.
 * Sans clé d'accès configurée, on ouvre le client mail du visiteur (mailto:) :
 * une demande n'est jamais silencieusement perdue.
 *
 * @throws {Error} lorsque Web3Forms rejette la soumission.
 */
export async function submitContact(
  fields: Record<string, string> & { subject?: string },
): Promise<SubmitResult> {
  const { subject, ...content } = fields;

  if (!hasKey) {
    const mailSubject = encodeURIComponent(subject || DEFAULT_SUBJECT);
    const body = encodeURIComponent(
      Object.entries(content)
        .map(([label, value]) => `${label} : ${value}`)
        .join("\n"),
    );
    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${body}`;
    return { ok: true, fallback: true };
  }

  const payload: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "Site A7 Emailing",
    subject: subject || DEFAULT_SUBJECT,
    ...content,
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!res.ok || !data.success) {
    throw new Error(data.message || "L'envoi a échoué. Veuillez réessayer.");
  }
  return { ok: true };
}
