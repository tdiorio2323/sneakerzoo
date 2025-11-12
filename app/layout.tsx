import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapEmbed } from "@/components/MapEmbed";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>

        {/* Map Section - Above Footer */}
        <Section className="py-12 bg-black/20">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Visit Our Store
            </h2>
            <MapEmbed />
          </Container>
        </Section>

        <Footer />
        {/* Mobile sticky actions */}
        <div className="mobile-stick md:hidden">
          <a href={`tel:${BUSINESS.phone?.replace(/\D/g,"") ?? ""}`} className="btn-ghost">Call</a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`} className="btn-ghost">Directions</a>
          <a href={`https://instagram.com/${BUSINESS.instagram}`} className="btn-ghost">Instagram</a>
        </div>
      </body>
    </html>
  );
}
