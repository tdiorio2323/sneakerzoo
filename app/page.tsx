"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Shirt, Watch } from "lucide-react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import GalleryPreview from "@/components/GalleryPreview";
import HoursLocation from "@/components/HoursLocation";
import { MapEmbed } from "@/components/MapEmbed";
import { Card, CardContent } from "@/components/ui/card";

// Category card data for the collections section
const categories = [
  {
    title: "Footwear",
    description: "Exclusive sneakers from Jordan, Nike, New Balance & more",
    href: "/footwear",
    icon: ShoppingBag,
    image: "/imagebox-1.jpg",
  },
  {
    title: "Apparel",
    description: "Premium streetwear from Chrome Hearts, Supreme & top brands",
    href: "/apparel",
    icon: Shirt,
    image: "/hero-image.jpg",
  },
  {
    title: "Accessories",
    description: "Hats, bags, socks & essentials to complete your look",
    href: "/accessories",
    icon: Watch,
    image: "/imagebox-1.jpg",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Shop Collections Section */}
      <Section className="bg-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Shop Our Collections
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover exclusive sneakers, premium streetwear, and curated accessories at Staten Island&apos;s premier boutique.
            </p>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-white/5">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Box */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
                        <Image
                          src={category.image}
                          alt={`${category.title} collection at Sneaker Zoo`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        {/* Icon Badge on Image */}
                        <div className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 flex-grow">
                          {category.description}
                        </p>
                        <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Shop Now</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Gallery Preview Section */}
      <Section className="bg-black border-t border-white/5">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Latest Drops
            </h2>
            <p className="text-white/70 text-base">
              Check out our newest arrivals and exclusive finds
            </p>
          </div>

          <GalleryPreview />

          {/* View Full Gallery Link */}
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Location & Hours Section */}
      <Section className="bg-black border-t border-white/5">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Visit Us in Staten Island
            </h2>
            <p className="text-white/70 text-base">
              Stop by our Richmond Road location to see the full collection
            </p>
          </div>

          {/* Hours + Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <HoursLocation />
            <div className="flex flex-col justify-center">
              <MapEmbed />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
