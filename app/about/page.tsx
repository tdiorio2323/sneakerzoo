import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

export const metadata: Metadata = getPageMetadata(
  "About",
  "Learn about Sneaker Zoo & Apparel - Staten Island's premier sneaker boutique",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About Sneaker Zoo
            </h1>
            <p className="text-lg text-white/60 text-center mb-12">
              Staten Island&apos;s destination for authentic sneakers and
              streetwear
            </p>

            <div className="prose prose-invert max-w-none space-y-6 text-white/80">
              <p className="text-lg">
                Welcome to Sneaker Zoo & Apparel, where passion for sneakers
                meets exceptional service. Located in the heart of Staten
                Island, we&apos;ve been serving the community with authentic,
                premium footwear and streetwear since our doors opened.
              </p>

              <p>
                Our mission is simple: provide sneaker enthusiasts and fashion
                lovers with access to the latest drops, exclusive releases, and
                timeless classics. We believe that every pair of sneakers tells
                a story, and we&apos;re here to help you write yours.
              </p>

              <p>
                Whether you&apos;re hunting for that grail pair, building your
                collection, or just starting your sneaker journey, our
                knowledgeable team is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-black/40">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
                <p className="text-white/60">
                  100% authentic products, every time. We stand behind the
                  quality of every item we sell.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-white/60">
                  We&apos;re sneakerheads ourselves. Our love for the culture
                  drives everything we do.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-white/60">
                  Building a community of enthusiasts who share our love for
                  sneakers and style.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Store Photos Strip */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Space
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg bg-white/5"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-sm">Store Photo {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-white/40 mt-6 italic">
            Replace with actual store photos in /public/
          </p>
        </Container>
      </Section>
    </>
  );
}
