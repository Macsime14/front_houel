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

        <p className="mt-10 text-xs text-muted">
          © {year} {site.business.name}. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
