import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getMockProducts } from '@/lib/mock';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'Footwear Collection',
  'Discover our premium sneaker and footwear collection',
  '/footwear'
);

export default function FootwearPage() {
  const products = getMockProducts('footwear');

  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Footwear Collection</h1>
          <p className="text-base text-white/70 mb-8 max-w-2xl">
            Discover premium sneakers from Jordan, Nike, New Balance, and more exclusive brands 
            at Staten Island&apos;s premier sneaker destination.
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}