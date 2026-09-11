import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/content/site";

/**
 * Les pages légales (mentions légales, politique de confidentialité) sont en
 * noindex (cf. leurs métadonnées) et volontairement absentes d'ici : on
 * n'indexe pas de pages qu'on demande par ailleurs aux moteurs d'ignorer.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...site.nav
      .filter((link) => link.href !== "/")
      .map((link) => ({
        url: `${siteUrl}${link.href}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];
}
