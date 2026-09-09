import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
import {
  site,
  hasServiceAreas,
  groupServiceAreasByDepartment,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Zone d'intervention",
  description:
    "Les secteurs desservis pour vos travaux de plomberie. Contactez-nous pour vérifier si votre commune est couverte.",
};

export default function ServiceAreaPage() {
  const { regionLabel, note } = site.serviceArea;
  const groups = hasServiceAreas ? groupServiceAreasByDepartment() : [];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Zone d&apos;intervention
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {regionLabel
              ? `Nous intervenons sur ${regionLabel} pour vos projets d'installation et de rénovation.`
              : "Nous intervenons sur un secteur défini pour vos projets d'installation et de rénovation."}{" "}
            Pour un devis, nous nous déplaçons sur le lieu du chantier.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          {hasServiceAreas ? (
            <div className="space-y-10">
              {groups.map((group) => (
                <div key={group.department}>
                  <h2 className="text-lg font-semibold text-foreground">
                    {group.department}
                  </h2>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.cities.map((area) => (
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
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold text-foreground">
                Votre commune est-elle couverte ?
              </h2>
              <p className="mt-3 text-muted">
                La liste précise des communes desservies sera bientôt publiée. En
                attendant, indiquez l&apos;adresse de votre projet dans le
                formulaire de contact : nous vous confirmons rapidement si nous
                pouvons intervenir.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Vérifier ma commune
              </Link>
            </div>
          )}

          {note ? (
            <p className="mt-10 max-w-2xl rounded-md border border-border bg-surface p-4 text-sm text-muted">
              {note}
            </p>
          ) : null}
        </Container>
      </section>

      <CtaSection />
      <LocalBusinessJsonLd />
    </>
  );
}
