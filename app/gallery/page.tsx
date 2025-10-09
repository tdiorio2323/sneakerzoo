import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import Container from "@/components/Container";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = getPageMetadata(
  "Gallery",
  "Explore our collection of premium sneakers, apparel, and accessories",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Browse through our latest collection. Visit us in-store to see the
            full selection and try everything on.
          </p>
        </div>
        <GalleryGrid />
      </Container>
    </Section>
  );
}
