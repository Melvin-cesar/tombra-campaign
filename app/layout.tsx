import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  absoluteUrl,
  campaignDetails,
  campaignSiteUrl,
} from "@/lib/campaignDetails";

export const metadata: Metadata = {
  title: "Tombra Mohammed | A Stronger Voice for Bayelsa West",
  description:
    "Official campaign website of Tombra Mohammed for Bayelsa West Senate. Jobs, better representation, and grassroots leadership for Sagbama and Ekeremor.",
  metadataBase: new URL(campaignSiteUrl),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tombra Mohammed | A Stronger Voice for Bayelsa West",
    description:
      "Official campaign website of Tombra Mohammed for Bayelsa West Senate. Jobs, better representation, and grassroots leadership for Sagbama and Ekeremor.",
    url: campaignSiteUrl,
    siteName: `${campaignDetails.candidateName} Campaign`,
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: `${campaignDetails.candidateName} campaign preview`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tombra Mohammed | A Stronger Voice for Bayelsa West",
    description:
      "Official campaign website of Tombra Mohammed for Bayelsa West Senate. Jobs, better representation, and grassroots leadership for Sagbama and Ekeremor.",
    images: [absoluteUrl("/og-image.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bayelsa-deep focus:shadow-soft"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <div className="fixed bottom-4 right-4 z-50 hidden sm:block">
          <Link
            href="/volunteer"
            className="rounded-full bg-bayelsa-gold px-5 py-3 text-sm font-bold text-bayelsa-deep shadow-soft transition hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40"
          >
            Join the Movement
          </Link>
        </div>
      </body>
    </html>
  );
}
