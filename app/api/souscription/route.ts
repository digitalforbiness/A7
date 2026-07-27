/**
 * Point d'entrée de la souscription — à brancher sur le prestataire de paiement.
 *
 * Le formulaire de la page /tarifs poste ici. L'implémentation réelle doit créer
 * une session de paiement chez le prestataire (Stripe Checkout ou équivalent) et
 * rediriger le visiteur vers son URL hébergée. Aucune donnée de carte ne doit
 * transiter par cette route.
 */
export async function POST() {
  return Response.json(
    {
      error: "La souscription en ligne n'est pas encore branchée.",
      contact: "contact@a7emailing.com",
    },
    { status: 501 },
  );
}
