"use client";

import { useActionState } from "react";
import { submitContactRequest } from "@/app/contact/actions";
import { PROJECT_TYPES, initialContactState } from "@/lib/contact";

const inputClass =
  "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initialContactState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-md border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
        Merci, votre demande a bien été envoyée. Je reviens vers vous
        rapidement pour établir un devis.
      </div>
    );
  }

  const values = state.values;
  const errors = state.errors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {errors.form ? (
        <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {errors.form}
        </p>
      ) : null}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={values?.name}
          aria-invalid={errors.name ? true : undefined}
          className={inputClass}
        />
        <FieldError message={errors.name} />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground"
        >
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          defaultValue={values?.phone}
          aria-invalid={errors.phone ? true : undefined}
          className={inputClass}
        />
        <FieldError message={errors.phone} />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email <span className="text-muted">(facultatif)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={values?.email}
          aria-invalid={errors.email ? true : undefined}
          className={inputClass}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-foreground"
        >
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue={values?.projectType ?? ""}
          aria-invalid={errors.projectType ? true : undefined}
          className={inputClass}
        >
          <option value="" disabled>
            Choisissez…
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError message={errors.projectType} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={values?.message}
          placeholder="Pièce concernée, travaux souhaités, adresse, délai envisagé…"
          aria-invalid={errors.message ? true : undefined}
          className={inputClass}
        />
        <FieldError message={errors.message} />
      </div>

      {/* Honeypot anti-spam : masqué et retiré du parcours clavier */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Société</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" name="consent" className="mt-0.5" />
          <span>
            J&apos;accepte d&apos;être recontacté au sujet de ma demande. Mes
            informations ne sont utilisées que pour cela, conformément à la{" "}
            <a
              href="/politique-de-confidentialite"
              className="text-brand-600 underline hover:text-brand-700"
            >
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        <FieldError message={errors.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-brand-600 px-5 py-3 text-sm font-medium text-on-brand transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Envoi…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
