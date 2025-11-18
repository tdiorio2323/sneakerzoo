import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'RALPH LAUREN POLO Collection',
  'Explore the RALPH LAUREN POLO classic American style collection',
  '/mens/ralph-lauren-polo'
);

const ralphLaurenProducts = [
  // Products will be added here
];

export default function RalphLaurenPoloCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">RALPH LAUREN POLO</h1>
            <p className="text-lg text-white/80 mb-2">Timeless American Style</p>
            <p className="text-sm text-white/60">
              Classic preppy essentials and iconic polo shirts from the legendary designer
            </p>
          </div>

          {ralphLaurenProducts.length > 0 ? (
            <ProductGrid items={ralphLaurenProducts} />
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
