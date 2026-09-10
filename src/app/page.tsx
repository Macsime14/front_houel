import Link from "next/link";
import { Container } from "@/components/container";
import { HeroMotif } from "@/components/hero-motif";
import { ServiceIcon } from "@/components/service-icons";
import { site, areaHeadline } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <HeroMotif />
        <Container className="relative py-20 sm:py-28">
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
            Mes domaines d'intervention
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border p-6 transition-[border-color,box-shadow,transform] duration-200 hover:border-brand-500 hover:shadow-sm motion-safe:hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 transition-colors group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon slug={service.slug} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{service.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link
              href="/services"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Voir toutes les prestations
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
