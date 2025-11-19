import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { getPageMetadata } from '@/lib/seo';
import { BRANDS, BRAND_CATEGORIES, getBrandsByCategory, BrandInfo } from '@/lib/constants/brands';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = getPageMetadata(
  'Shop By Brand',
  'Explore our curated collection of premium brands including Chrome Hearts, Air Jordan, Supreme, and more',
  '/brands'
);

export default function BrandsPage() {
  return (
    <Section className="pt-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop By Brand</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium brands. From luxury streetwear to
              performance athletics, find your perfect style.
            </p>
          </div>

          {/* All Brands Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">All Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANDS.map((brand: BrandInfo) => (
                <Link key={brand.slug} href={brand.href}>
                  <Card className="h-full transition-all hover:scale-105 hover:shadow-lg cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-white/90 transition-colors">
                            {brand.name}
                          </h3>
                          <p className="text-sm text-white/60 mb-2">{brand.tagline}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-sm text-white/50 line-clamp-2">
                        {brand.description}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/5 text-white/60 capitalize">
                          {brand.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Brands by Category */}
          {BRAND_CATEGORIES.map((category: { slug: string; name: string }) => {
            const brandsInCategory = getBrandsByCategory(category.slug as BrandInfo['category']);
            if (brandsInCategory.length === 0) return null;

            return (
              <div key={category.slug} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 capitalize">{category.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {brandsInCategory.map((brand: BrandInfo) => (
                    <Link key={brand.slug} href={brand.href}>
                      <div className="card-surface p-6 text-center hover:bg-white/10 transition-colors group cursor-pointer rounded-lg">
                        <h3 className="font-semibold mb-1 group-hover:text-white/90 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-xs text-white/50">{brand.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
