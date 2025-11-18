'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const SNEAKER_SIZES = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'];

interface ProductData {
  title: string;
  price: string;
  colorway: string;
  images: string[];
  description: string;
  sku: string;
  releaseDate: string;
}

const PRODUCTS: Record<string, ProductData> = {
  'air-jordan-3-retro-racer-blue': {
    title: 'Air Jordan 3 Retro Racer Blue',
    price: '$190.00',
    colorway: 'White/Black-Cement Grey-Racer Blue',
    images: [
      'https://images.stockx.com/images/Air-Jordan-3-Retro-Racer-Blue-Product.jpg'
    ],
    description: 'The Air Jordan 3 Retro Racer Blue features a White leather base with Black 3M reflective elephant print overlays highlighted with Blue contrasting accents atop a signature Grey rubber outsole. This iconic silhouette combines classic design with modern colorway treatment.',
    sku: 'CT8532-145',
    releaseDate: 'July 10, 2021'
  }
};

interface AirJordanDetailClientProps {
  slug: string;
}

export default function AirJordanDetailClient({ slug }: AirJordanDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Link href="/mens/air-jordan" className="text-white/60 hover:text-white">
              Back to AIR JORDAN Collection
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/mens/air-jordan"
            className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to AIR JORDAN Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                <div className="relative h-full w-full">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-white/60 mb-2">AIR JORDAN</p>
                <h1 className="text-3xl font-semibold tracking-tight mb-2">{product.title}</h1>
                <p className="text-2xl text-white/90 font-medium">{product.price}</p>
              </div>

              <div>
                <p className="text-sm text-white/80">{product.description}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-white/60">Colorway: <span className="text-white">{product.colorway}</span></p>
                <p className="text-sm text-white/60">Style: <span className="text-white">{product.sku}</span></p>
                <p className="text-sm text-white/60">Release Date: <span className="text-white">{product.releaseDate}</span></p>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Select Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {SNEAKER_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent hover:bg-white/10 border-white/20 text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                disabled
                className="w-full bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed h-12 text-base font-semibold"
              >
                Add to Cart
              </Button>

              <p className="text-xs text-white/50 text-center">
                Backend integration pending. Product catalog coming soon.
              </p>

              {/* Product Info */}
              <div className="border-t border-white/10 pt-6 space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Product Details</h4>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• White tumbled leather upper</li>
                    <li>• Grey perforated leather eyestays</li>
                    <li>• Cement overlays with elephant print</li>
                    <li>• Racer Blue contrasting accents</li>
                    <li>• Visible Air-Sole unit</li>
                    <li>• Rubber outsole with traction pattern</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Care Instructions</h4>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Clean with soft, damp cloth</li>
                    <li>• Avoid harsh chemicals</li>
                    <li>• Air dry at room temperature</li>
                    <li>• Store in cool, dry place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
