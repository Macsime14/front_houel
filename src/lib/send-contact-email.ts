import { Resend } from "resend";
import type { ContactValues } from "@/lib/contact";

/**
 * Transport de l'email de demande de devis.
 *
 * La logique du formulaire (validation, états, UI) est indépendante de ce
 * module : pour changer de fournisseur, il suffit de réécrire cette fonction.
 *
 * Configuration (variables d'environnement, cf. .env.example) :
 * - RESEND_API_KEY     : clé API Resend
 * - CONTACT_TO_EMAIL   : adresse qui reçoit les demandes
 * - CONTACT_FROM_EMAIL : expéditeur affiché (défaut : adresse de test Resend)
 *
 * Si la clé ou le destinataire manquent (dev local, transport pas encore
 * branché), la demande est journalisée au lieu d'être envoyée.
 */

const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "Demande de devis <onboarding@resend.dev>";

function formatBody(payload: ContactValues): string {
  return [
    "Nouvelle demande de devis depuis le site.",
    "",
    `Nom       : ${payload.name}`,
    `Téléphone : ${payload.phone}`,
    `Email     : ${payload.email || "(non renseigné)"}`,
    `Projet    : ${payload.projectType}`,
    "",
    "Message :",
    payload.message,
  ].join("\n");
}

export async function sendContactEmail(payload: ContactValues): Promise<void> {
  const body = formatBody(payload);
  const subject = `Demande de devis — ${payload.projectType} — ${payload.name}`;

  if (!apiKey || !toEmail) {
    console.info(
      "[contact] RESEND_API_KEY ou CONTACT_TO_EMAIL absent — demande non envoyée :\n" +
        body,
    );
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    text: body,
    replyTo: payload.email || undefined,
  });

  if (error) {
    throw new Error(`Échec de l'envoi de l'email : ${error.message}`);
  }
}
