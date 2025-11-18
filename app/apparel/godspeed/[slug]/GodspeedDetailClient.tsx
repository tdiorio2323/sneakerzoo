'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';

const GODSPEED_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

interface ProductData {
  title: string;
  price: string;
  color: string;
  images: string[];
  description: string;
}

const PRODUCTS: Record<string, ProductData> = {
  'on-the-run-bone': {
    title: 'On The Run - Bone',
    price: '$180.00',
    color: 'Bone',
    images: [
      'https://www.godspeednewyork.com/cdn/shop/files/28_fa113e9d-5a9a-4892-b565-8918fb784531.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/30_810979a2-9550-4ebe-87b4-51c20bc10349.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/29_078c2c98-8656-4a7f-b8ce-25994e58f707.jpg'
    ],
    description: 'GODSPEED "On The Run" T-Shirt in Bone. Premium streetwear designed for those who move with purpose.'
  },
  'on-the-run-lavender': {
    title: 'On The Run - Lavender',
    price: '$180.00',
    color: 'Stone Wash',
    images: [
      'https://www.godspeednewyork.com/cdn/shop/files/31_7216a5af-6558-4f9a-9f04-8e4505dbcc21.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/33_b48317b9-1cba-4ccc-b4b4-f76395e3f6e7.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/32_c8cb1370-7a4d-4f95-b4ce-7177938f4255.jpg'
    ],
    description: 'GODSPEED "On The Run" T-Shirt in Stone Wash. Premium streetwear designed for those who move with purpose.'
  },
  'on-the-run-canary': {
    title: 'On The Run - Canary',
    price: '$180.00',
    color: 'Lavender',
    images: [
      'https://www.godspeednewyork.com/cdn/shop/files/37_8a68fb60-6827-4116-b983-a16bfd3a9696.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/39_9184087a-6d14-4a07-8272-5d4f0ed0c4d1.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/38_c2bfe0e5-19a5-4537-98c7-bad5cccc98bb.jpg'
    ],
    description: 'GODSPEED "On The Run" T-Shirt in Lavender. Premium streetwear designed for those who move with purpose.'
  },
  'on-the-run-mocha': {
    title: 'On The Run - Mocha',
    price: '$180.00',
    color: 'Canary',
    images: [
      'https://www.godspeednewyork.com/cdn/shop/files/22_d533336d-407b-4928-836d-92e431833ee6.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/24_34949063-547e-487d-897d-d83ebc26bdeb.jpg',
      'https://www.godspeednewyork.com/cdn/shop/files/23_88eab19c-07a0-4703-9c89-043416da3471.jpg'
    ],
    description: 'GODSPEED "On The Run" T-Shirt in Canary. Premium streetwear designed for those who move with purpose.'
  }
};

interface GodspeedDetailClientProps {
  slug: string;
}

export default function GodspeedDetailClient({ slug }: GodspeedDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = PRODUCTS[slug];

  if (!product) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
            <Link href="/mens/godspeed" className="text-white/60 hover:text-white">
              Back to GODSPEED Collection
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
            href="/mens/godspeed"
            className="inline-flex items-center text-sm text-white/60 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to GODSPEED Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                <div className="relative h-full w-full">
                  <Image
                    src={product.images[selectedImageIndex]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border ${
                      selectedImageIndex === index
                        ? 'border-white'
                        : 'border-white/10 hover:border-white/30'
                    } bg-neutral-900`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        fill
                        sizes="150px"
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
                <p className="text-sm text-white/60 mb-2">GODSPEED NEW YORK</p>
                <h1 className="text-3xl font-semibold tracking-tight mb-2">{product.title}</h1>
                <p className="text-2xl text-white/90 font-medium">{product.price}</p>
              </div>

              <div>
                <p className="text-sm text-white/80">{product.description}</p>
              </div>

              <div>
                <p className="text-sm text-white/60 mb-1">Color: <span className="text-white">{product.color}</span></p>
                <p className="text-sm text-white/60">Type: <span className="text-white">T-Shirt</span></p>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-medium mb-3">Select Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {GODSPEED_SIZES.map((size) => (
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
                    <li>• Premium quality cotton blend</li>
                    <li>• Regular fit</li>
                    <li>• GODSPEED graphic print</li>
                    <li>• Made with care</li>
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
