'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const CHROME_HEARTS_SIZES = ['Small (US 4-6)', 'Medium (US 6-9)', 'Large (US 9-13)'];

interface ProductData {
  title: string;
  price: string;
  colors: Array<{ name: string; image: string }>;
  images: string[];
  description: string;
  composition: string;
  madeIn: string;
  sku: string;
}

const PRODUCTS: Record<string, ProductData> = {
  'stencil-socks': {
    title: 'Chrome Hearts Stencil Socks',
    price: '$255.00',
    colors: [
      {
        name: 'White',
        image: 'https://www.chromehearts.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-masterCatalog_ChromeHearts/default/dw35e5a211/img_products/hi-res/316176354MB3MED465_1.png'
      },
      {
        name: 'Red',
        image: 'https://www.chromehearts.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-masterCatalog_ChromeHearts/default/dw55f50c41/img_products/hi-res/316176354MB3MED465-2.png'
      }
    ],
    images: [
      'https://www.chromehearts.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-masterCatalog_ChromeHearts/default/dw35e5a211/img_products/hi-res/316176354MB3MED465_1.png',
      'https://www.chromehearts.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-masterCatalog_ChromeHearts/default/dw55f50c41/img_products/hi-res/316176354MB3MED465-2.png'
    ],
    description: 'Set of 3 pairs with stencil motifs appearing in black, white, and red. Jacquard knit with embroidered dagger detail.',
    composition: '75% cotton, 20% polyester, 4% polyurethane, 1% nylon',
    madeIn: 'Made in Japan',
    sku: '176354MB3XXX465'
  }
};

interface ChromeHeartsDetailClientProps {
  slug: string;
}

export default function ChromeHeartsDetailClient({ slug }: ChromeHeartsDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('White');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Link href="/mens/chrome-hearts" className="text-white/60 hover:text-white">
              Back to CHROME HEARTS Collection
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const handleColorChange = (colorName: string, index: number) => {
    setSelectedColor(colorName);
    setSelectedImageIndex(index);
  };

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/mens/chrome-hearts"
            className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to CHROME HEARTS Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                <div className="relative h-full w-full">
                  <Image
                    src={product.images[selectedImageIndex]}
                    alt={`${product.title} - ${selectedColor}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-2 gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color.name, index)}
                    className={`aspect-square rounded-lg overflow-hidden border ${
                      selectedColor === color.name
                        ? 'border-white'
                        : 'border-white/10 hover:border-white/30'
                    } bg-neutral-900`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={color.image}
                        alt={`${product.title} - ${color.name}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-white/60 mb-2">CHROME HEARTS</p>
                <h1 className="text-3xl font-semibold tracking-tight mb-2">{product.title}</h1>
                <p className="text-2xl text-white/90 font-medium">{product.price}</p>
              </div>

              <div>
                <p className="text-sm text-white/80">{product.description}</p>
              </div>

              {/* Color Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Color: <span className="text-white/70">{selectedColor}</span></h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color.name, index)}
                      className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        selectedColor === color.name
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent hover:bg-white/10 border-white/20 text-white'
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Select Size</h3>
                <div className="grid grid-cols-1 gap-2">
                  {CHROME_HEARTS_SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`inline-flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
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
                    <li>• Set of 3 pairs (black, white, red)</li>
                    <li>• Jacquard knit construction</li>
                    <li>• Embroidered dagger detail</li>
                    <li>• Stencil motif design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Composition</h4>
                  <p className="text-sm text-white/70">{product.composition}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Origin</h4>
                  <p className="text-sm text-white/70">{product.madeIn}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">SKU</h4>
                  <p className="text-sm text-white/70">{product.sku}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Return Policy</h4>
                  <p className="text-sm text-white/70">No returns or exchanges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
