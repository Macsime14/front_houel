/**
 * Motif décoratif « fil d'eau » affiché en fond de l'accroche d'accueil.
 * Purement graphique : masqué aux lecteurs d'écran, sans interaction, et
 * atténué sur la gauche pour ne pas gêner la lecture du texte.
 */
export function HeroMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,transparent,black_55%)]"
    >
      <g fill="none" strokeLinecap="round">
        <path
          d="M-40 120 C 160 40, 300 200, 500 130 S 820 60, 900 150"
          stroke="var(--brand-400)"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M-40 190 C 180 110, 320 270, 540 190 S 820 130, 900 210"
          stroke="var(--brand-600)"
          strokeWidth="2"
          opacity="0.22"
        />
        <path
          d="M-40 262 C 200 182, 360 322, 580 250 S 820 210, 900 272"
          stroke="var(--brand-400)"
          strokeWidth="1.5"
          opacity="0.16"
        />
      </g>
    </svg>
  );
}
