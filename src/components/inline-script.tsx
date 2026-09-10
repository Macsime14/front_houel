"use client";

/**
 * Script inline exécuté pendant l'analyse du HTML, avant le premier rendu.
 *
 * `type="text/javascript"` au rendu serveur (le navigateur l'exécute au
 * chargement de la page) puis `type="text/plain"` après hydratation : React
 * ne ré-exécute jamais un <script>, et ce basculement évite son avertissement
 * de développement « Encountered a script tag ».
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
