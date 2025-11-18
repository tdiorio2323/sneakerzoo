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
          <h1 className="text-2xl font-semibold tracking-tight mb-4">Apparel Collection</h1>
          <p className="text-sm text-white/60 mb-6">
            Premium streetwear and apparel from top brands
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}