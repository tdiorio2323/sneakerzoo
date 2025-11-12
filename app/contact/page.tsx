import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { ContactCard } from "@/components/ContactCard";
import HoursLocation from "@/components/HoursLocation";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, Mail, MessageCircle } from "lucide-react";
import { BUSINESS, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = getPageMetadata(
  "Contact",
  "Get in touch with Sneaker Zoo & Apparel - Visit our store in Staten Island or send us a message",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70">
              Have questions about our products? Looking for something specific?
              We&apos;re here to help. Visit us in Staten Island or drop us a message.
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <Button
                asChild
                variant="outline"
                className="h-auto py-4 flex-col gap-2 border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                <a href={`tel:${BUSINESS.phone?.replace(/\D/g, "") ?? ""}`}>
                  <Phone className="h-5 w-5" />
                  <span className="text-xs">Call</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto py-4 flex-col gap-2 border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs">Directions</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto py-4 flex-col gap-2 border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="text-xs">Instagram</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto py-4 flex-col gap-2 border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                <a href="#contact-form">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-xs">Message</span>
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info Section */}
      <Section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div id="contact-form">
              <ContactCard />
            </div>

            {/* Store Info & Hours */}
            <div className="space-y-6">
              <HoursLocation />

              {/* Additional Contact Info */}
              <div className="card-surface p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                {BUSINESS.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Phone</p>
                      <a
                        href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                        className="font-medium hover:text-white/80 transition-colors"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                )}

                {BUSINESS.email && BUSINESS.email !== "TODO" && (
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Email</p>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="font-medium hover:text-white/80 transition-colors break-all"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white/60 mb-1">Instagram</p>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-white/80 transition-colors"
                    >
                      @{BUSINESS.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ or Additional Info */}
              <div className="card-surface p-6">
                <h3 className="text-xl font-semibold mb-4">Before You Visit</h3>
                <div className="space-y-3 text-sm text-white/70">
                  <p>
                    <strong className="text-white">Looking for something specific?</strong>
                    <br />
                    Call ahead and we&apos;ll make sure it&apos;s available when you arrive.
                  </p>
                  <p>
                    <strong className="text-white">Need help with sizing?</strong>
                    <br />
                    Our team is here to ensure you get the perfect fit.
                  </p>
                  <p>
                    <strong className="text-white">Want to check availability?</strong>
                    <br />
                    DM us on Instagram or give us a call for real-time inventory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
