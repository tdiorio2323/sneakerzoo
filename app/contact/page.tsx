import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { ContactCard } from "@/components/ContactCard";
import { MapEmbed } from "@/components/MapEmbed";
import HoursLocation from "@/components/HoursLocation";

export const metadata: Metadata = getPageMetadata(
  "Contact",
  "Get in touch with Sneaker Zoo & Apparel - Visit our store or send us a message",
  "/contact"
);

export default function ContactPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have questions about our products, hours, or services? We&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ContactCard />
          <HoursLocation />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Find Us
          </h2>
          <MapEmbed />
          <p className="text-center text-sm text-white/40 mt-4 italic">
            Note: Add your Google Maps API key in MapEmbed.tsx for the map to
            display
          </p>
        </div>
      </Container>
    </Section>
  );
}
