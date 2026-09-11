import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { InlineScript } from "@/components/inline-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { areaHeadline, site, siteUrl } from "@/content/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.business.name} — ${areaHeadline}`,
    template: `%s — ${site.business.name}`,
  },
  description: site.business.description,
};

/**
 * Applique le thème choisi (stocké dans localStorage) sur <html> avant le
 * premier rendu, pour éviter tout clignotement. Sans choix explicite, le site
 * suit le réglage clair/sombre du système via color-scheme + light-dark().
 */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geist.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
