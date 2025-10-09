import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getMockProducts } from '@/lib/mock';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'Men\'s Collection',
  'Discover our premium men\'s streetwear and apparel collection',
  '/mens'
);

export default function MensPage() {
  const products = getMockProducts('mens');

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold tracking-tight mb-4">Men&apos;s Collection</h1>
          <p className="text-sm text-white/60 mb-6">
            Premium streetwear and apparel for the modern man
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}