import { site, hasPhone } from "@/content/site";

/**
 * Données structurées schema.org pour le référencement local.
 *
 * Le balisage n'est émis que si les informations essentielles (téléphone,
 * ville) sont renseignées : on ne publie pas de données incomplètes ou
 * inventées. Il apparaîtra automatiquement dès que ces champs seront remplis
 * dans le module de contenu.
 */
export function LocalBusinessJsonLd() {
  if (!hasPhone || !site.business.city) return null;

  const areaServed =
    site.serviceAreas.length > 0
      ? site.serviceAreas.map((area) => area.city)
      : site.business.city;

  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.business.name,
    description: site.business.description,
    telephone: site.contact.phone,
    email: site.contact.email || undefined,
    areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.business.city,
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
