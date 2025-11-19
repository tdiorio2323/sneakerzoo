import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';
import { ProductGridItem } from '@/lib/types';

export const metadata: Metadata = getPageMetadata(
  'NEW BALANCE Collection',
  'Explore the NEW BALANCE performance and lifestyle collection',
  '/apparel/new-balance'
);

const newBalanceProducts: ProductGridItem[] = [
  // Products will be added here
];

export default function NewBalanceCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">NEW BALANCE</h1>
            <p className="text-lg text-white/80 mb-2">Fearlessly Independent</p>
            <p className="text-sm text-white/60">
              Made in USA heritage sneakers and modern performance footwear
            </p>
          </div>

          {newBalanceProducts.length > 0 ? (
            <ProductGrid items={newBalanceProducts} />
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
