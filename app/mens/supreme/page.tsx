import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProductGrid from '@/components/ProductGrid';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata(
  'SUPREME Collection',
  'Explore the iconic SUPREME streetwear collection',
  '/mens/supreme'
);

const supremeProducts = [
  {
    title: 'Supreme®/Hanes® Bones Thermal Pant',
    imageSrc: 'https://us.supreme.com/cdn/shop/files/A30_FW25_HanesThermalPants_Black03.jpg?v=1760969883',
    href: '/mens/supreme/hanes-bones-thermal-pant',
    price: '$32.00'
  }
];

export default function SupremeCollectionPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">SUPREME</h1>
            <p className="text-lg text-white/80 mb-2">Iconic Streetwear</p>
            <p className="text-sm text-white/60">
              Limited drops and classic collaborations that define urban culture
            </p>
          </div>

          <ProductGrid items={supremeProducts} />
        </div>
      </Container>
    </Section>
  );
}
