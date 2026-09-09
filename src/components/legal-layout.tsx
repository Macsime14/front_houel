import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { hasLegalIdentity, legalLastUpdated } from "@/content/site";

/**
 * Mise en page commune aux pages légales : titre, bandeau éventuel de
 * finalisation, date de mise à jour, et styles de texte cohérents.
 */
export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted">
        Dernière mise à jour : {legalLastUpdated}
      </p>

      {!hasLegalIdentity ? (
        <p className="mt-6 max-w-2xl rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Ces informations sont en cours de finalisation. Les mentions marquées
          « À compléter » seront renseignées avant la mise en ligne du site.
        </p>
      ) : null}

      <div className="mt-8 max-w-2xl space-y-6 text-sm text-muted [&_a]:text-brand-600 [&_a:hover]:text-brand-700 [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2:first-child]:mt-0 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </Container>
  );
}
