import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site, hasPhone, hasEmail, phoneHref, mailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Décrivez votre projet (type de prestation, adresse, délai souhaité) et
        nous revenons vers vous pour établir un devis.
      </p>

      <dl className="mt-8 space-y-3 text-sm">
        {hasPhone && phoneHref ? (
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Téléphone</dt>
            <dd>
              <a
                href={phoneHref}
                className="text-brand-600 hover:text-brand-700"
              >
                {site.contact.phone}
              </a>
            </dd>
          </div>
        ) : null}
        {hasEmail && mailHref ? (
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Email</dt>
            <dd>
              <a href={mailHref} className="text-brand-600 hover:text-brand-700">
                {site.contact.email}
              </a>
            </dd>
          </div>
        ) : null}
      </dl>

      {!hasPhone && !hasEmail ? (
        <p className="mt-8 rounded-md border border-border bg-surface p-4 text-sm text-muted">
          Le formulaire de contact sera disponible prochainement.
        </p>
      ) : null}
    </Container>
  );
}
