import type { ReactNode, SVGProps } from "react";

/**
 * Jeu d'icônes dessinées pour les services, tracé unique (stroke) qui prend la
 * couleur du texte via `currentColor`. Les icônes sont indexées par le `slug`
 * du service : la présentation reste séparée du contenu (cf. CLAUDE.md).
 */
const ICONS: Record<string, ReactNode> = {
  "salle-de-bain": (
    <>
      <path d="M4 21c0-6 2-9 7-9" />
      <path d="M11 12c0-3 1.4-4.5 4-4.5S19 9 19 12Z" />
      <path d="M15 6.5V4" />
      <path d="M13 16v1.6M15.6 17v1.6M18.2 16v1.6" />
    </>
  ),
  "chauffe-eau": (
    <>
      <rect x="7" y="4" width="10" height="16.5" rx="4.4" />
      <path d="M7.4 9.5h9.2" />
      <path d="M10 4V2.4M14 4V2.4" />
    </>
  ),
  chaudiere: (
    <>
      <rect x="4" y="4" width="16" height="13" rx="2" />
      <circle cx="9" cy="12" r="2.1" />
      <path d="M15.4 8.6c1.5 1.1 1.6 3.1.2 4.3.5-1.6-.9-2.4-.9-2.4.2 1.9-1.2 2.2-.8 3.6" />
      <path d="M8 17v3M16 17v3" />
    </>
  ),
  tuyauterie: (
    <>
      <path d="M6 3v9a6 6 0 0 0 6 6h9" strokeWidth={2.4} />
      <path d="M3.5 3h5" />
      <path d="M21 15.5v5" />
    </>
  ),
  cuisine: (
    <>
      <path d="M7 21h10" />
      <path d="M12 21v-7" />
      <path d="M9.5 14h5" />
      <path d="M12 14V9c0-3 2-4 5-4" />
      <path d="M17 4.2V8" />
      <path d="M8.4 11.5H12" />
    </>
  ),
  "renovation-salle-eau": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 9.5h16M4 15h16" />
      <path d="M10 4v5.5M14 9.5V15M9 15v5" />
    </>
  ),
  climatisation: (
    <>
      <rect x="3" y="5.5" width="18" height="7.5" rx="2.2" />
      <path d="M6.5 9.4h8" />
      <path d="M6.5 11h11" />
      <path d="M7 17.5c1.8 0 1.8-2 3.6-2M13.4 18.5c1.8 0 1.8-2 3.6-2" />
    </>
  ),
};

export function ServiceIcon({
  slug,
  ...props
}: { slug: string } & SVGProps<SVGSVGElement>) {
  const inner = ICONS[slug];
  if (!inner) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {inner}
    </svg>
  );
}
