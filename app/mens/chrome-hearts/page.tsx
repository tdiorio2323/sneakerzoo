import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'CHROME HEARTS Collection',
  'Explore the CHROME HEARTS luxury streetwear collection',
  '/mens/chrome-hearts'
);

const chromeHeartsProducts = [
  {
    title: 'Chrome Hearts Stencil Socks',
    imageSrc: 'https://www.chromehearts.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-masterCatalog_ChromeHearts/default/dw35e5a211/img_products/hi-res/316176354MB3MED465_1.png',
    href: '/mens/chrome-hearts/stencil-socks',
    price: '$255.00'
  }
];

export default function ChromeHeartsCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">CHROME HEARTS</h1>
            <p className="text-lg text-white/80 mb-2">Luxury Leather & Silver</p>
            <p className="text-sm text-white/60">
              High-end streetwear and accessories crafted with sterling silver and premium leather
            </p>
          </div>

          {chromeHeartsProducts.length > 0 ? (
            <ProductGrid items={chromeHeartsProducts} />
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
