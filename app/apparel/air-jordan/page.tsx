import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'AIR JORDAN Collection',
  'Explore the legendary AIR JORDAN sneaker collection',
  '/mens/air-jordan'
);

const airJordanProducts = [
  {
    title: 'Air Jordan 3 Retro Racer Blue',
    imageSrc: 'https://images.stockx.com/images/Air-Jordan-3-Retro-Racer-Blue-Product.jpg',
    href: '/mens/air-jordan/air-jordan-3-retro-racer-blue',
    price: '$190.00'
  }
];

export default function AirJordanCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">AIR JORDAN</h1>
            <p className="text-lg text-white/80 mb-2">Legendary Performance Sneakers</p>
            <p className="text-sm text-white/60">
              Step into the legacy with iconic retros and modern classics
            </p>
          </div>

          <ProductGrid items={airJordanProducts} />
        </div>
      </Container>
    </Section>
  );
}
