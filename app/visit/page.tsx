import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Instagram, Car, Train } from "lucide-react";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import HoursLocation from "@/components/HoursLocation";
import { MapEmbed } from "@/components/MapEmbed";
import { Button } from "@/components/ui/button";
import { BUSINESS, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = getPageMetadata(
  "Visit Our Store in Staten Island",
  "Visit Sneaker Zoo & Apparel at our Richmond Road location. Get directions, store hours, parking info, and more.",
  "/visit"
);

export default function VisitPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`;
  const telLink = BUSINESS.phone ? `tel:${BUSINESS.phone.replace(/\D/g, "")}` : null;

  return (
    <Section className="pt-24">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Visit Sneaker Zoo in Staten Island
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Stop by our Richmond Road location to experience our full collection of 
            premium sneakers, streetwear, and accessories. Get expert styling advice 
            and see the latest drops in person.
          </p>
        </div>

        {/* Main Grid: Hours + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Hours + Parking/Transit */}
          <div className="space-y-8">
            <HoursLocation />

            {/* Parking & Transit Info */}
            <div className="card-surface p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Getting Here
              </h2>
              
              <div className="space-y-4">
                {/* Parking */}
                <div>
                  <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Parking
                  </h3>
                  <ul className="text-sm text-white/60 space-y-1 ml-6 list-disc">
                    <li>Free street parking available on Richmond Rd</li>
                    <li>Additional parking in rear lot (accessible from side street)</li>
                    <li>Metered parking available nearby</li>
                  </ul>
                </div>

                {/* Public Transit */}
                <div>
                  <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
                    <Train className="h-4 w-4" />
                    Public Transit
                  </h3>
                  <ul className="text-sm text-white/60 space-y-1 ml-6 list-disc">
                    <li>S78/S79 bus lines stop nearby</li>
                    <li>15-minute walk from Eltingville Transit Center</li>
                    <li>Accessible via Staten Island Railway + local bus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="flex flex-col justify-start">
            <MapEmbed />
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="max-w-4xl mx-auto">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Get Directions */}
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90 font-semibold"
              >
                <a 
                  href={directionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>

              {/* Call the Store */}
              {telLink && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-black font-semibold"
                >
                  <a href={telLink}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call the Store
                  </a>
                </Button>
              )}

              {/* Message on Instagram */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-black font-semibold"
              >
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  DM on Instagram
                </a>
              </Button>
            </div>

            {/* Contact Info Summary */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center space-y-2">
              <div className="text-sm text-white/60">
                <strong className="text-white">Address:</strong>{" "}
                {BUSINESS.addressLine}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
              </div>
              {BUSINESS.phone && (
                <div className="text-sm text-white/60">
                  <strong className="text-white">Phone:</strong>{" "}
                  <a href={telLink!} className="hover:text-white transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              )}
              <div className="text-sm text-white/60">
                <strong className="text-white">Instagram:</strong>{" "}
                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @{BUSINESS.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Browse Products */}
        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">
            Can&apos;t make it to the store? Browse our collection online
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/footwear">Shop Footwear</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/apparel">Shop Apparel</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
