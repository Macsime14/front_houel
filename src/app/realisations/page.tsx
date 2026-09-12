import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Quelques chantiers réalisés récemment.",
};

/**
 * Page prête à l'emploi, gardée introuvable tant que `site.showcase.enabled`
 * vaut `false` (cf. content/site.ts) : pas de contenu inventé en attendant
 * de vraies photos de chantier.
 */
export default function RealisationsPage() {
  if (!site.showcase.enabled) {
    notFound();
  }

  const { projects } = site.showcase;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Quelques chantiers réalisés récemment.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          {projects.length > 0 ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li
                  key={project.slug}
                  className="overflow-hidden rounded-lg border border-border"
                >
                  {project.images[0] ? (
                    <div className="relative h-48 w-full bg-surface">
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h2 className="text-base font-semibold text-foreground">
                      {project.title}
                    </h2>
                    {project.location ? (
                      <p className="text-xs text-muted">{project.location}</p>
                    ) : null}
                    <p className="mt-2 text-sm text-muted">
                      {project.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">
              Aucun chantier à afficher pour l&apos;instant.
            </p>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
