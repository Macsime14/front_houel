import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: site.business.description,
};

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Interventions planifiées, réalisées sur devis. Voici les principaux types
        de projets pris en charge.
      </p>

      <div className="mt-10 space-y-10">
        {site.services.map((service) => (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24"
          >
            <h2 className="text-xl font-semibold text-foreground">
              {service.title}
            </h2>
            <p className="mt-2 text-muted">{service.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
