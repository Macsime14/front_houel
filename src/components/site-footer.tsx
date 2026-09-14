import Link from "next/link";
import { Container } from "@/components/container";
import {
  site,
  hasPhone,
  hasEmail,
  hasServiceAreas,
  phoneHref,
  mailHref,
} from "@/content/site";

/**
 * Pied de page : présentation courte, contacts (masqués tant qu'ils ne sont
 * pas renseignés) et zone d'intervention si elle est définie.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-foreground">
              {site.business.name}
            </p>
            <p className="mt-2 text-sm text-muted">{site.business.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {hasPhone && phoneHref ? (
                <li>
                  <a href={phoneHref} className="hover:text-foreground">
                    {site.contact.phone}
                  </a>
                </li>
              ) : null}
              {hasEmail && mailHref ? (
                <li>
                  <a href={mailHref} className="hover:text-foreground">
                    {site.contact.email}
                  </a>
                </li>
              ) : null}
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {hasServiceAreas ? (
            <div>
              <p className="text-sm font-semibold text-foreground">
                Zone d'intervention
              </p>
              <p className="mt-2 text-sm text-muted">
                {site.serviceAreas.map((area) => area.city).join(", ")}
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.business.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <nav
              aria-label="Informations légales"
              className="flex flex-wrap gap-x-4 gap-y-1"
            >
              {site.legalNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/*
              Raccourci perso (Maxime) vers un dashboard local, hors scope
              phase 1 — ajouté sciemment à la demande explicite de
              l'utilisateur malgré la règle du brief sur les phases 2-4.
              Ne fonctionne que sur sa machine, serveur local lancé.
            */}
            <a
              href="http://localhost:3001/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tableau de bord (local)"
              title="Tableau de bord (local)"
              className="opacity-30 transition-opacity hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
