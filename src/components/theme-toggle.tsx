"use client";

import { useEffect, useSyncExternalStore } from "react";

type Mode = "light" | "dark";

const THEME_EVENT = "themechange";

function subscribe(callback: () => void): () => void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

/** Thème effectif : choix manuel (data-theme) s'il existe, sinon réglage système. */
function getSnapshot(): Mode {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** Côté serveur, le thème du visiteur est inconnu : on part sur « clair ». */
function getServerSnapshot(): Mode {
  return "light";
}

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    // En développement, le remount de React efface l'attribut posé par le
    // script de <head> : on le repose depuis le choix stocké.
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        document.documentElement.setAttribute("data-theme", stored);
        window.dispatchEvent(new Event(THEME_EVENT));
      }
    } catch {
      // localStorage indisponible
    }
  }, []);

  function toggle() {
    const next: Mode = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // le choix ne persistera pas (navigation privée)
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  const label =
    mode === "dark" ? "Passer au thème clair" : "Passer au thème sombre";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground"
    >
      <span suppressHydrationWarning>
        {mode === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
