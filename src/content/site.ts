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
  /** Paragraphe d'introduction affiché sur la page Services */
  intro: string;
  /** Exemples concrets, affichés sur la page Services */
  details: string[];
};

export type ServiceArea = {
  city: string;
  /** Code postal, optionnel */
  postalCode?: string;
  /** Département (nom ou numéro), pour regrouper l'affichage — optionnel */
  department?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

/**
 * URL publique du site — sert de base aux liens absolus (sitemap, robots.txt,
 * métadonnées Open Graph). Pas de nom de domaine acheté pour l'instant : à
 * définir via la variable d'environnement NEXT_PUBLIC_SITE_URL une fois le
 * domaine choisi (cf. CLAUDE.md, « Points encore ouverts »).
 */
// `||` (et non `??`) : une variable d'environnement définie mais laissée
// vide côté hébergeur doit aussi retomber sur la valeur par défaut.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const site = {
  business: {
    ownerFirstName: "Antoine",
    /** Nom commercial — PROVISOIRE, à valider avec Antoine */
    name: "Antoine Plomberie",
    trade: "Plombier",
    baseline: "Installation et rénovation sanitaire",
    /** Ville principale visée (marché principal) */
    city: "Caen",
    /** Commune où l'activité est basée */
    baseCity: "Noyers-Bocage",
    baseCityPostalCode: "14210",
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

  /**
   * Zone d'intervention. Liste à compléter avec Antoine si d'autres communes
   * sont couvertes (l'affichage les regroupe par département).
   */
  serviceAreas: [
    { city: "Caen", postalCode: "14000", department: "Calvados" },
    { city: "Noyers-Bocage", postalCode: "14210", department: "Calvados" },
  ] as ServiceArea[],

  serviceArea: {
    /**
     * Libellé du secteur couvert. Utilisé dans les phrases de la page.
     */
    regionLabel: "Caen et ses alentours",
    /** Note libre affichée sur la page Zone d'intervention — optionnelle */
    note: "",
  },

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
      intro:
        "De la simple robinetterie à la salle de bain complète, en neuf comme " +
        "en rénovation, avec le raccordement de tous les équipements.",
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
      intro:
        "Choix d'un modèle adapté à votre logement et à votre consommation, " +
        "puis pose, raccordement et mise en service.",
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
      intro:
        "Installation d'une chaudière neuve ou remplacement d'un appareil " +
        "vétuste, et entretien régulier.",
      details: ["Installation neuve", "Remplacement", "Entretien annuel"],
    },
    {
      slug: "tuyauterie",
      title: "Tuyauterie et réseaux d'eau",
      summary: "Installation ou rénovation de la plomberie (cuivre, PER…).",
      intro:
        "Création, extension ou rénovation de vos canalisations d'eau, avec " +
        "les matériaux adaptés à chaque situation.",
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
      intro:
        "Arrivées d'eau et évacuations pour l'ensemble des équipements de " +
        "votre cuisine.",
      details: [
        "Raccordement évier et robinetterie",
        "Arrivée et évacuation pour lave-vaisselle",
      ],
    },
    {
      slug: "renovation-salle-eau",
      title: "Rénovation complète de salle d'eau",
      summary: "Chantiers « clé en main » plus larges.",
      intro:
        "Prise en charge de toute la partie plomberie de votre projet de " +
        "rénovation, de la dépose de l'existant à la pose des équipements neufs.",
      details: [
        "Dépose de l'existant",
        "Reprise des réseaux",
        "Pose des équipements neufs",
      ],
    },
    {
      slug: "climatisation",
      // À préciser avec Antoine : propose-t-il aussi le remplacement et
      // l'entretien, ou seulement l'installation ?
      title: "Climatisation",
      summary: "Installation de climatisation.",
      intro: "Installation d'équipements de climatisation.",
      details: ["Installation de climatisation"],
    },
  ] as Service[],

  /**
   * Déroulé type d'un projet. Générique et volontairement prudent : à ajuster
   * avec Antoine (notamment la gratuité du devis et la visite systématique).
   */
  process: [
    {
      title: "Prise de contact",
      description:
        "Vous décrivez votre projet via le formulaire ou par téléphone.",
    },
    {
      title: "Évaluation et devis",
      description:
        "J'évalue les travaux, si besoin lors d'une visite, et je vous " +
        "remets un devis détaillé.",
    },
    {
      title: "Planification",
      description:
        "Une fois le devis validé, je conviens avec vous d'une date " +
        "d'intervention.",
    },
    {
      title: "Réalisation",
      description:
        "Les travaux sont réalisés à la date prévue, dans le respect du devis.",
    },
  ] as ProcessStep[],

  /** Navigation principale */
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/zone-intervention", label: "Zone d'intervention" },
    { href: "/contact", label: "Contact" },
  ] as NavLink[],

  /** Liens affichés dans le pied de page (bas) */
  legalNav: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  ] as NavLink[],

  /**
   * Section « Réalisations » : masquée tant qu'Antoine n'a pas de photos de
   * chantier ni d'avis clients réels. Ne pas l'activer avec du faux contenu.
   */
  showcase: {
    enabled: false,
  },

  /**
   * Informations légales.
   *
   * La plupart des champs sont À COMPLÉTER avec les informations réelles
   * d'Antoine (identité, SIRET, assurance, médiateur). Tant que `editor.siret`
   * et `editor.legalName` sont vides, les pages légales affichent un bandeau
   * indiquant que ces mentions sont en cours de finalisation.
   *
   * Références : LCEN art. 6 (mentions légales), RGPD (politique de
   * confidentialité), Code de la consommation art. L.616-1 (médiateur).
   */
  legal: {
    editor: {
      /** Nom et prénom (entrepreneur individuel) ou dénomination sociale */
      legalName: "",
      /** Forme juridique, ex. « Entrepreneur individuel », « EURL », « SASU » */
      legalStatus: "",
      /** Adresse de l'établissement / du siège */
      address: "",
      /** Numéro SIRET */
      siret: "",
      /** Immatriculation au Répertoire des Métiers, ex. « RM 69 » */
      rmRegistration: "",
      /** TVA intracommunautaire, si assujetti */
      vatNumber: "",
      /** Capital social, uniquement si société */
      capital: "",
    },
    /** Directeur de la publication (souvent l'entrepreneur lui-même) */
    publicationDirector: "",
    /** Assurance responsabilité civile professionnelle — obligatoire (BTP) */
    insurance: {
      company: "",
      contact: "",
      coverageArea: "France métropolitaine",
    },
    /** Médiateur de la consommation — obligatoire pour une clientèle de particuliers */
    mediator: {
      name: "",
      url: "",
    },
    /** Hébergeur du site (connu) */
    host: {
      name: "Vercel Inc.",
      address: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
      url: "https://vercel.com",
    },
    /** Traitement des données personnelles (formulaire de contact) */
    privacy: {
      /** Durée de conservation des demandes (recommandation CNIL pour prospects) */
      retention: "3 ans à compter du dernier contact",
      /**
       * Destinataires techniques des données. À garder synchronisé avec
       * l'implémentation réelle (cf. src/lib/send-contact-email.ts).
       */
      processors: [
        "Vercel Inc. — hébergement du site",
        "Resend — acheminement des emails de demande de devis",
      ],
    },
    /** Date de dernière mise à jour des pages légales (ISO AAAA-MM-JJ) */
    lastUpdated: "2026-09-09",
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

/**
 * `true` quand l'identité légale minimale (dénomination + SIRET) est renseignée.
 * Les pages légales s'appuient dessus pour afficher, ou non, un bandeau
 * « mentions en cours de finalisation ».
 */
export const hasLegalIdentity =
  site.legal.editor.legalName.trim().length > 0 &&
  site.legal.editor.siret.trim().length > 0;

/** Renvoie la valeur si elle est renseignée, sinon un libellé « à compléter » */
export function orTodo(value: string): string {
  return value.trim() || "À compléter";
}

/** Date de dernière mise à jour des pages légales, formatée en français */
export const legalLastUpdated = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "long",
}).format(new Date(site.legal.lastUpdated));

/**
 * Communes regroupées par département pour l'affichage.
 * Les communes sans département renseigné sont rassemblées sous « Autres ».
 */
export function groupServiceAreasByDepartment(): {
  department: string;
  cities: ServiceArea[];
}[] {
  const groups = new Map<string, ServiceArea[]>();
  for (const area of site.serviceAreas) {
    const key = area.department ?? "Autres secteurs";
    const list = groups.get(key) ?? [];
    list.push(area);
    groups.set(key, list);
  }
  return [...groups.entries()].map(([department, cities]) => ({
    department,
    cities,
  }));
}
