import Link from "next/link";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

/**
 * En-tête du site : nom commercial, navigation principale, bouton de devis et
 * bascule de thème. Le menu mobile utilise <details>/<summary> (sans JavaScript).
 */
export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {site.business.name}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navigation principale"
        >
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-on-brand transition-colors hover:bg-brand-700"
          >
            Demander un devis
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <details className="relative">
            <summary className="flex cursor-pointer list-none items-center rounded-md p-2 text-foreground [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </summary>
            <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg border border-border bg-background p-2 shadow-lg">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 block rounded-md bg-brand-600 px-3 py-2 text-center text-sm font-medium text-on-brand hover:bg-brand-700"
              >
                Demander un devis
              </Link>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
