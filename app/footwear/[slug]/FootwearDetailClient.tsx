'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const FOOTWEAR_SIZES = ['7Y', '8Y', '9Y', '10Y', '11Y', '12Y', '7M', '8M', '9M', '10M', '11M', '12M'];

interface FootwearDetailClientProps {
  slug: string;
}

export default function FootwearDetailClient({ slug }: FootwearDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  // Extract product number from slug (e.g., "product-1" -> "Product 1")
  const productNumber = slug.replace('product-', '');
  const title = `Product ${productNumber}`;

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link 
            href="/footwear" 
            className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Footwear Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
              <div className="relative h-full w-full">
                <Image
                  src="/logo.png"
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight mb-2">{title}</h1>
                <p className="text-xl text-white/80">$89.99</p>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {FOOTWEAR_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm ${
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

              {/* Add to Bag Button */}
              <Button 
                disabled 
                className="w-full bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Bag
              </Button>

              <p className="text-xs text-white/50">
                This is a frontend-only demo. No actual checkout available.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}