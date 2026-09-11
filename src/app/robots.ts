import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

// Évite qu'une réponse mise en cache ne survive à un changement de
// NEXT_PUBLIC_SITE_URL ou de déploiement (cf. sitemap.ts).
export const revalidate = 0;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
