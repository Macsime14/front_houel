import { site } from "@/content/site";

/**
 * Types de projet proposés dans le formulaire de contact.
 * Dérivés de la liste des services pour garder une source unique, avec une
 * option ouverte en fin de liste.
 */
export const PROJECT_TYPES: string[] = [
  ...site.services.map((service) => service.title),
  "Autre / je ne sais pas",
];

export type ContactValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

export type ContactErrors = Partial<
  Record<keyof ContactValues | "consent" | "form", string>
>;

/** État renvoyé par la Server Action du formulaire, consommé via useActionState */
export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: ContactErrors;
  /** Valeurs saisies, réaffichées en cas d'erreur */
  values?: ContactValues;
};

export const initialContactState: ContactState = { status: "idle" };

type ValidationResult =
  | { ok: true; value: ContactValues }
  | { ok: false; errors: ContactErrors };

const PHONE_RE = /^[+0-9][0-9 .\-()]{5,19}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valide et normalise les champs du formulaire de contact.
 * Utilisé côté serveur (Server Action) — ne jamais faire confiance au client.
 */
export function validateContact(
  raw: ContactValues & { consent: boolean },
): ValidationResult {
  const errors: ContactErrors = {};

  const name = raw.name.trim();
  const phone = raw.phone.trim();
  const email = raw.email.trim();
  const message = raw.message.trim();

  if (name.length < 2) {
    errors.name = "Indiquez votre nom.";
  } else if (name.length > 100) {
    errors.name = "Nom trop long.";
  }

  if (!PHONE_RE.test(phone)) {
    errors.phone = "Indiquez un numéro de téléphone valide.";
  }

  if (email && (email.length > 150 || !EMAIL_RE.test(email))) {
    errors.email = "Adresse email invalide.";
  }

  if (!PROJECT_TYPES.includes(raw.projectType)) {
    errors.projectType = "Choisissez un type de projet.";
  }

  if (message.length < 10) {
    errors.message = "Décrivez brièvement votre projet (10 caractères minimum).";
  } else if (message.length > 3000) {
    errors.message = "Message trop long (3000 caractères maximum).";
  }

  if (!raw.consent) {
    errors.consent =
      "Vous devez accepter d'être recontacté pour envoyer la demande.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, value: { name, phone, email, projectType: raw.projectType, message } };
}
