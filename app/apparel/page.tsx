import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getMockProducts } from '@/lib/mock';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'Apparel Collection',
  'Discover our premium streetwear and apparel collection',
  '/apparel'
);

export default function ApparelPage() {
  const products = getMockProducts('mens');

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Apparel Collection</h1>
          <p className="text-base text-white/70 mb-8 max-w-2xl">
            Shop premium streetwear from Chrome Hearts, Supreme, Jordan, and the hottest brands.
            Fresh styles at Sneaker Zoo, your Staten Island streetwear destination.
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}