'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const SUPREME_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

interface ProductData {
  title: string;
  price: string;
  color: string;
  images: string[];
  description: string;
  style: string;
}

const PRODUCTS: Record<string, ProductData> = {
  'hanes-bones-thermal-pant': {
    title: 'Supreme®/Hanes® Bones Thermal Pant (1 Pack)',
    price: '$32.00',
    color: 'Black',
    images: [
      'https://us.supreme.com/cdn/shop/files/A30_FW25_HanesThermalPants_Black03.jpg?v=1760969883'
    ],
    description: 'All cotton classic Hanes® waffle thermal pant with printed graphic.',
    style: 'A30'
  }
};

interface SupremeDetailClientProps {
  slug: string;
}

export default function SupremeDetailClient({ slug }: SupremeDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Link href="/mens/supreme" className="text-white/60 hover:text-white">
              Back to SUPREME Collection
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
            href="/mens/supreme"
            className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to SUPREME Collection
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
                <p className="text-sm text-white/60 mb-2">SUPREME</p>
                <h1 className="text-3xl font-semibold tracking-tight mb-2">{product.title}</h1>
                <p className="text-2xl text-white/90 font-medium">{product.price}</p>
              </div>

              <div>
                <p className="text-sm text-white/80">{product.description}</p>
              </div>

              <div>
                <p className="text-sm text-white/60 mb-1">Color: <span className="text-white">{product.color}</span></p>
                <p className="text-sm text-white/60">Style: <span className="text-white">{product.style}</span></p>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Select Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {SUPREME_SIZES.map((size) => (
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
                    <li>• All cotton classic Hanes® waffle thermal</li>
                    <li>• Printed graphic design</li>
                    <li>• 1 Pack</li>
                    <li>• Supreme®/Hanes® collaboration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Care Instructions</h4>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Machine wash cold</li>
                    <li>• Tumble dry low</li>
                    <li>• Do not bleach</li>
                    <li>• Iron on low heat if needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Shipping</h4>
                  <p className="text-sm text-white/70">
                    Free shipping on orders over $250 (some exceptions may apply)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
