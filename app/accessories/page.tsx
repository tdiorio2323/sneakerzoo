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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Accessories Collection</h1>
          <p className="text-base text-white/70 mb-8 max-w-2xl">
            Complete your look with premium hats, bags, socks, sneaker care essentials, and more.
            The finishing touches for your streetwear style.
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}