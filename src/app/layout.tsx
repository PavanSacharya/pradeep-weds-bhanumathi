import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

// ---- EDIT THESE before deploying ----
const SITE_URL = "https://pradeep-bhanumathi.wedding"; // replace with your real domain
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 image, put it in /public

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pradeep & Bhanumathi | 31.08.2026",
  description: "We're getting married! Join us in celebrating — 31st August 2026.",
  openGraph: {
    title: "Pradeep & Bhanumathi | 31.08.2026",
    description: "We're getting married! Join us in celebrating — 31st August 2026.",
    url: SITE_URL,
    siteName: "Pradeep & Bhanumathi",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pradeep & Bhanumathi Wedding Invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep & Bhanumathi | 31.08.2026",
    description: "We're getting married! Join us in celebrating — 31st August 2026.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#8A1538",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
