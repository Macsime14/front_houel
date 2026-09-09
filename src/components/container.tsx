import type { ComponentPropsWithoutRef } from "react";

/**
 * Conteneur de largeur maximale, centré, avec marges latérales responsives.
 * Utilisé pour aligner toutes les sections du site.
 */
export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
