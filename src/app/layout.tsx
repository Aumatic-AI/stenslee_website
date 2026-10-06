import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Instrument_Serif, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const accent = Instrument_Serif({
  variable: "--ff-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  variable: "--ff-body",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Stenslee — Win back old customers. Close more new ones.";
const DESCRIPTION =
  "Stenslee sends automatic WhatsApp offers to your past tattoo clients and lets your artists show a realistic tattoo preview on the customer's skin in seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tattoo studio software",
    "tattoo customer retention",
    "WhatsApp marketing for tattoo studios",
    "tattoo design preview",
    "tattoo preview on skin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Stenslee",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Stenslee",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DESCRIPTION,
  url: SITE_URL,
};

// Runs before first paint: opts the page into its entrance animations (unless
// the visitor prefers reduced motion), and falls back to showing everything if
// the motion script hasn't started within 4 seconds.
const motionBootstrap = `(function(){var d=document.documentElement;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('anim');setTimeout(function(){if(!window.__motion)d.classList.remove('anim')},4000)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${accent.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
