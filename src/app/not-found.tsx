import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const otherLinks = site.nav.filter((link) => link.href !== "/");

  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
        Erreur 404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Cette page n&apos;existe pas ou plus. Vérifiez l&apos;adresse, ou
        repartez de l&apos;accueil.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-brand-600 px-5 py-3 text-sm font-medium text-on-brand transition-colors hover:bg-brand-700"
      >
        Retour à l&apos;accueil
      </Link>

      <nav
        aria-label="Autres pages"
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
      >
        {otherLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <p className="mt-12 text-xs text-muted">
        {site.business.trade} — {site.business.name}
      </p>
    </Container>
  );
}
