import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Grec Man - Restaurant Grec Premium | Yaoundé",
  description:
    "Découvrez l'excellence de la cuisine grecque authentique dans un cadre sophistiqué au cœur de Yaoundé. Réservez votre table dès maintenant.",
  keywords:
    "restaurant grec, Yaoundé, cuisine méditerranéenne, réservation, livraison",
  authors: [{ name: "Le Grec Man" }],
  creator: "Le Grec Man",
  publisher: "Le Grec Man",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Le Grec Man - Restaurant Grec Premium | Yaoundé",
    description:
      "Découvrez l'excellence de la cuisine grecque authentique dans un cadre sophistiqué au cœur de Yaoundé.",
    url: "https://legrecman.com",
    siteName: "Le Grec Man",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Grec Man - Restaurant Grec Premium | Yaoundé",
    description:
      "Découvrez l'excellence de la cuisine grecque authentique dans un cadre sophistiqué au cœur de Yaoundé.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
