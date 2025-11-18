import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'ASICS Collection',
  'Explore the ASICS performance running and lifestyle collection',
  '/mens/asics'
);

const asicsProducts = [
  // Products will be added here
];

export default function AsicsCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">ASICS</h1>
            <p className="text-lg text-white/80 mb-2">Sound Mind, Sound Body</p>
            <p className="text-sm text-white/60">
              Japanese performance footwear and retro lifestyle sneakers
            </p>
          </div>

          {asicsProducts.length > 0 ? (
            <ProductGrid items={asicsProducts} />
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
