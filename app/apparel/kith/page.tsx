import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';
import { ProductGridItem } from '@/lib/types';

export const metadata: Metadata = getPageMetadata(
  'KITH Collection',
  'Explore the KITH premium streetwear collection',
  '/apparel/kith'
);

const kithProducts: ProductGridItem[] = [
  // Products will be added here
];

export default function KithCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">KITH</h1>
            <p className="text-lg text-white/80 mb-2">Premium Streetwear</p>
            <p className="text-sm text-white/60">
              Elevated basics and exclusive collaborations from the NYC lifestyle brand
            </p>
          </div>

          {kithProducts.length > 0 ? (
            <ProductGrid items={kithProducts} />
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">Products coming soon...</p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
