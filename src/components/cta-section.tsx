import Link from "next/link";
import { Container } from "@/components/container";

/**
 * Bande d'appel à l'action réutilisable, affichée en bas des pages de contenu.
 */
export function CtaSection({
  title = "Un projet de plomberie ?",
  text = "Décrivez votre besoin, nous revenons vers vous pour établir un devis.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-border bg-surface">
      <Container className="py-14 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">{text}</p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Demander un devis
        </Link>
      </Container>
    </section>
  );
}
