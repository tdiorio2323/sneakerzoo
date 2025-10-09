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
          <h1 className="text-2xl font-semibold tracking-tight mb-4">Footwear Collection</h1>
          <p className="text-sm text-white/60 mb-6">
            Premium sneakers and footwear for every style
          </p>
          
          <ProductGrid items={products} />
        </div>
      </Container>
    </Section>
  );
}