import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { ServiceIcon } from "@/components/service-icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plomberie sur devis : salle de bain, chauffe-eau, chaudière, tuyauterie, cuisine, rénovation de salle d'eau, climatisation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Des interventions planifiées, réalisées sur devis — installation et
            rénovation, sans dépannage d&apos;urgence. Voici les principaux types
            de projets pris en charge.
          </p>
          <nav
            aria-label="Liste des services"
            className="mt-8 flex flex-wrap gap-2"
          >
            {site.services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="space-y-12">
            {site.services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 border-b border-border pb-12 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </span>
                  <h2 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 max-w-2xl text-muted">{service.intro}</p>
                <div className="mt-5">
                  <p className="text-sm font-medium text-foreground">
                    Prestations courantes
                  </p>
                  <ul className="mt-2 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand-500">
                          •
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Comment se déroule un projet
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-border p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                  {index + 1}
                </span>
                <p className="mt-3 font-semibold text-foreground">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Une question sur une prestation ?{" "}
            <Link
              href="/contact"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Contactez-nous
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
