"use server";

import {
  validateContact,
  type ContactState,
  type ContactValues,
} from "@/lib/contact";
import { sendContactEmail } from "@/lib/send-contact-email";

export async function submitContactRequest(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot : champ invisible rempli => robot. On simule un succès.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success" };
  }

  const values: ContactValues = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const consent = formData.get("consent") === "on";

  const result = validateContact({ ...values, consent });
  if (!result.ok) {
    return { status: "error", errors: result.errors, values };
  }

  try {
    await sendContactEmail(result.value);
  } catch (error) {
    console.error("[contact] envoi échoué", error);
    return {
      status: "error",
      errors: {
        form: "L'envoi a échoué. Réessayez, ou contactez-moi par téléphone.",
      },
      values,
    };
  }

  return { status: "success" };
}
