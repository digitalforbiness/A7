/**
 * Réception des messages du formulaire de contact.
 *
 * ⚠️ Stub : la route valide la saisie mais n'expédie encore rien. Avant la mise
 * en ligne, brancher un fournisseur d'e-mail (Resend, SMTP, SendGrid…) à
 * l'endroit indiqué ci-dessous, sans quoi les messages ne sont pas transmis.
 */

const SUBJECTS = ["commercial", "demonstration", "support", "partenariat", "autre"] as const;

type ContactPayload = {
  nom: string;
  email: string;
  entreprise?: string;
  sujet: (typeof SUBJECTS)[number];
  message: string;
  consentement: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): { data: ContactPayload } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Requête invalide." };
  }
  const b = body as Record<string, unknown>;

  const nom = typeof b.nom === "string" ? b.nom.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const entreprise = typeof b.entreprise === "string" ? b.entreprise.trim() : "";
  const sujet = b.sujet;
  const consentement = b.consentement === true;

  if (nom.length < 2) return { error: "Merci d'indiquer votre nom." };
  if (!EMAIL_PATTERN.test(email)) return { error: "Adresse e-mail invalide." };
  if (typeof sujet !== "string" || !SUBJECTS.includes(sujet as ContactPayload["sujet"])) {
    return { error: "Sujet invalide." };
  }
  if (message.length < 10) return { error: "Message trop court." };
  if (!consentement) return { error: "Le consentement est requis." };

  return {
    data: {
      nom,
      email,
      entreprise,
      sujet: sujet as ContactPayload["sujet"],
      message,
      consentement,
    },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corps de requête illisible." }, { status: 400 });
  }

  const result = validate(body);
  if ("error" in result) {
    return Response.json({ error: result.error }, { status: 422 });
  }

  // TODO(mise en ligne) : expédier result.data vers la boîte contact@a7emailing.com
  // via le fournisseur d'e-mail. En attendant, on trace côté serveur pour ne pas
  // perdre le message pendant le développement.
  console.info("[contact] nouveau message", {
    ...result.data,
    message: `${result.data.message.slice(0, 80)}…`,
  });

  return Response.json({ ok: true });
}
