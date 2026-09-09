import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site, hasServiceAreas } from "@/content/site";

export const metadata: Metadata = {
  title: "Zone d'intervention",
};

export default function ServiceAreaPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Zone d'intervention
      </h1>

      {hasServiceAreas ? (
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {site.serviceAreas.map((area) => (
            <li
              key={area.city}
              className="rounded-md border border-border px-4 py-3 text-sm text-foreground"
            >
              {area.city}
              {area.postalCode ? (
                <span className="text-muted"> ({area.postalCode})</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 max-w-2xl text-muted">
          Les secteurs desservis seront précisés prochainement. En attendant,
          contactez-nous pour vérifier si votre commune est couverte.
        </p>
      )}
    </Container>
  );
}
