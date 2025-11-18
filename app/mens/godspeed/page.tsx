import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'GODSPEED Collection',
  'Explore the exclusive GODSPEED "On The Run" collection',
  '/mens/godspeed'
);

const godspeedProducts = [
  {
    title: 'On The Run - Bone',
    imageSrc: 'https://www.godspeednewyork.com/cdn/shop/files/28_fa113e9d-5a9a-4892-b565-8918fb784531.jpg',
    href: '/mens/godspeed/on-the-run-bone',
    price: '$180.00'
  },
  {
    title: 'On The Run - Lavender',
    imageSrc: 'https://www.godspeednewyork.com/cdn/shop/files/31_7216a5af-6558-4f9a-9f04-8e4505dbcc21.jpg',
    href: '/mens/godspeed/on-the-run-lavender',
    price: '$180.00'
  },
  {
    title: 'On The Run - Canary',
    imageSrc: 'https://www.godspeednewyork.com/cdn/shop/files/37_8a68fb60-6827-4116-b983-a16bfd3a9696.jpg',
    href: '/mens/godspeed/on-the-run-canary',
    price: '$180.00'
  },
  {
    title: 'On The Run - Mocha',
    imageSrc: 'https://www.godspeednewyork.com/cdn/shop/files/22_d533336d-407b-4928-836d-92e431833ee6.jpg',
    href: '/mens/godspeed/on-the-run-mocha',
    price: '$180.00'
  }
];

export default function GodspeedCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">GODSPEED</h1>
            <p className="text-lg text-white/80 mb-2">On The Run Collection</p>
            <p className="text-sm text-white/60">
              Premium streetwear designed for those who move with purpose
            </p>
          </div>

          <ProductGrid items={godspeedProducts} />
        </div>
      </Container>
    </Section>
  );
}
