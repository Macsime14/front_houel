import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { site, hasPhone, hasEmail, phoneHref, mailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demandez un devis pour vos travaux de plomberie : installation et rénovation de salle de bain, chauffe-eau, chaudière, réseaux d'eau.",
};

export default function ContactPage() {
  const hasDirectContact = hasPhone || hasEmail;

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Demander un devis
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Décrivez votre projet (type de prestation, adresse, délai souhaité) et
        je reviens vers vous pour établir un devis.
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-xl">
          <ContactForm />
        </div>

        {hasDirectContact ? (
          <aside className="text-sm">
            <p className="font-semibold text-foreground">Me joindre directement</p>
            <dl className="mt-3 space-y-2 text-muted">
              {hasPhone && phoneHref ? (
                <div>
                  <dt className="text-xs uppercase tracking-wide">Téléphone</dt>
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
                <div>
                  <dt className="text-xs uppercase tracking-wide">Email</dt>
                  <dd>
                    <a
                      href={mailHref}
                      className="text-brand-600 hover:text-brand-700"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
        ) : null}
      </div>
    </Container>
  );
}
