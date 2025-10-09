import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getMockProducts } from '@/lib/mock';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'Accessories Collection',
  'Complete your look with our premium accessories collection',
  '/accessories'
);

export default function AccessoriesPage() {
  const products = getMockProducts('accessories');

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold tracking-tight mb-4">Accessories Collection</h1>
          <p className="text-sm text-white/60 mb-6">
            Complete your streetwear look with premium accessories
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}