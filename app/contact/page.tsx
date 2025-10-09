import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = getPageMetadata(
  "Contact",
  "Get in touch with Sneaker Zoo & Apparel - Visit our store in Staten Island",
  "/contact"
);

export default function ContactPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="text-sm text-white/60 mb-6">
            Get in touch with us or visit our Staten Island store
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      disabled
                    />
                  </div>

                  <Button 
                    disabled 
                    className="w-full bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Frontend only
                  </Button>

                  <p className="text-xs text-white/50">
                    This is a frontend-only demo. No actual form submission available.
                  </p>
                </form>
              </CardContent>
            </Card>
            
            {/* Store Info */}
            <Card>
              <CardHeader>
                <CardTitle>Visit Our Store</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Address</h3>
                  <p className="text-white/70">
                    {BUSINESS.addressLine}<br />
                    {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p className="text-white/70">{BUSINESS.phone}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Hours</h3>
                  <div className="text-white/70">
                    {BUSINESS.hours.map((hour, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{hour.day}</span>
                        <span>{hour.open} - {hour.close}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Follow Us</h3>
                  <p className="text-white/70">@{BUSINESS.instagram}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
