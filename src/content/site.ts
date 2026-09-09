/**
 * Contenu et paramètres du site.
 *
 * Ce module centralise toutes les informations propres au client afin qu'elles
 * ne soient pas dispersées dans les composants (cf. CLAUDE.md). Les valeurs
 * encore inconnues sont laissées vides : l'interface doit savoir les masquer
 * proprement à l'aide des helpers en bas de fichier.
 *
 * Règle : ne rien inventer (coordonnées, avis, réalisations, informations sur
 * le client). Tant qu'une donnée n'est pas validée, elle reste vide.
 */

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  /** Identifiant d'ancre, ex. /services#salle-de-bain */
  slug: string;
  title: string;
  /** Phrase courte affichée en liste (accueil, cartes) */
  summary: string;
  /** Exemples concrets, affichés sur la page Services */
  details: string[];
};

export type ServiceArea = {
  city: string;
  /** Code postal, optionnel */
  postalCode?: string;
};

export const site = {
  business: {
    ownerFirstName: "Antoine",
    /** Nom commercial — PROVISOIRE, à valider avec Antoine */
    name: "Antoine Plomberie",
    trade: "Plombier",
    baseline: "Installation et rénovation sanitaire",
    /** Ville principale — à définir (laisser vide tant que non validé) */
    city: "",
    description:
      "Installation et rénovation de salles de bain, chauffe-eau, chaudières " +
      "et réseaux d'eau. Travaux planifiés, réalisés sur devis.",
    /** Activité orientée projet : pas de dépannage d'urgence (cf. CLAUDE.md) */
    emergencyService: false,
  },

  contact: {
    /** Téléphone — à compléter */
    phone: "",
    /** Email de réception des demandes de devis — à compléter */
    email: "",
  },

  /** Zone d'intervention — à définir avec Antoine */
  serviceAreas: [] as ServiceArea[],

  /**
   * Services proposés — LISTE PROVISOIRE (source : CLAUDE.md).
   * À confirmer avec Antoine avant mise en ligne : intitulés exacts, un exemple
   * concret par catégorie, ses propres termes, et ce qu'il ne fait pas.
   */
  services: [
    {
      slug: "salle-de-bain",
      title: "Salle de bain",
      summary:
        "Installation complète : douche, baignoire, WC, lavabo, robinetterie.",
      details: [
        "Pose de douche à l'italienne ou de cabine",
        "Installation de baignoire",
        "WC, lavabo, meuble vasque",
        "Robinetterie et raccordements",
      ],
    },
    {
      slug: "chauffe-eau",
      title: "Chauffe-eau",
      summary: "Installation et remplacement, électrique ou thermodynamique.",
      details: [
        "Chauffe-eau électrique",
        "Chauffe-eau thermodynamique",
        "Remplacement d'un ballon existant",
      ],
    },
    {
      slug: "chaudiere",
      title: "Chaudière",
      summary: "Installation, remplacement et entretien.",
      details: ["Installation neuve", "Remplacement", "Entretien annuel"],
    },
    {
      slug: "tuyauterie",
      title: "Tuyauterie et réseaux d'eau",
      summary: "Installation ou rénovation de la plomberie (cuivre, PER…).",
      details: [
        "Création d'un réseau d'eau",
        "Rénovation d'une plomberie ancienne",
        "Cuivre, PER, multicouche",
      ],
    },
    {
      slug: "cuisine",
      title: "Cuisine",
      summary: "Raccordement évier, lave-vaisselle, robinetterie.",
      details: [
        "Raccordement évier et robinetterie",
        "Arrivée et évacuation pour lave-vaisselle",
      ],
    },
    {
      slug: "renovation-salle-eau",
      title: "Rénovation complète de salle d'eau",
      summary: "Chantiers « clé en main » plus larges.",
      details: [
        "Dépose de l'existant",
        "Reprise des réseaux",
        "Pose des équipements neufs",
      ],
    },
    {
      slug: "climatisation",
      title: "Climatisation",
      summary: "Installation (remplacement et entretien : à préciser).",
      details: ["Installation de climatisation"],
    },
  ] as Service[],

  /** Navigation principale */
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/zone-intervention", label: "Zone d'intervention" },
    { href: "/contact", label: "Contact" },
  ] as NavLink[],

  /**
   * Section « Réalisations » : masquée tant qu'Antoine n'a pas de photos de
   * chantier ni d'avis clients réels. Ne pas l'activer avec du faux contenu.
   */
  showcase: {
    enabled: false,
  },
};

/* Helpers ------------------------------------------------------------------ */

export const hasPhone = site.contact.phone.trim().length > 0;
export const hasEmail = site.contact.email.trim().length > 0;
export const hasServiceAreas = site.serviceAreas.length > 0;

/** Lien `tel:` normalisé (chiffres et « + » uniquement), ou null si inconnu */
export const phoneHref = hasPhone
  ? `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`
  : null;

/** Lien `mailto:`, ou null si l'email n'est pas encore défini */
export const mailHref = hasEmail ? `mailto:${site.contact.email}` : null;

/** Accroche « … à {ville} » qui reste correcte si la ville n'est pas définie */
export const areaHeadline = site.business.city
  ? `${site.business.baseline} à ${site.business.city}`
  : site.business.baseline;
