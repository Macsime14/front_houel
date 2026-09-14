"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fait apparaître son contenu (fondu + léger décalage vertical) lorsqu'il
 * entre dans le viewport, avec un délai optionnel pour créer un effet
 * décalé sur une grille de cartes. Reste pleinement visible si
 * l'utilisateur préfère moins de mouvement, ou tant que le JS n'a pas
 * encore observé l'élément.
 *
 * `as` permet de rendre l'élément racine approprié (ex. "li" dans une
 * liste) plutôt qu'un <div> qui casserait la sémantique du parent.
 */
export function Reveal({
  children,
  delayMs = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out motion-reduce:opacity-100 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
