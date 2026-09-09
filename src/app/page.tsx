import Link from "next/link";
import { Container } from "@/components/container";
import { site, areaHeadline } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
            {site.business.trade}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {areaHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            {site.business.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Demander un devis
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Voir les services
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Nos domaines d'intervention
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service) => (
              <li
                key={service.slug}
                className="rounded-lg border border-border p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.summary}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link
              href="/services"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Détail des prestations →
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
