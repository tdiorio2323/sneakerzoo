/**
 * Brand collection constants
 *
 * Centralized configuration for all brand collections available in the store.
 */

export interface BrandInfo {
  /** URL-safe brand slug */
  slug: string;
  /** Display name */
  name: string;
  /** Short tagline */
  tagline: string;
  /** Full description */
  description: string;
  /** Brand category */
  category: 'streetwear' | 'athletic' | 'luxury' | 'lifestyle';
  /** Brand logo URL (optional) */
  logoUrl?: string;
  /** Collection page path */
  href: string;
}

/**
 * All available brand collections
 */
export const BRANDS: readonly BrandInfo[] = [
  {
    slug: 'chrome-hearts',
    name: 'Chrome Hearts',
    tagline: 'Luxury Leather & Silver',
    description: 'Hand-crafted luxury goods featuring sterling silver and exotic leather',
    category: 'luxury',
    href: '/apparel/chrome-hearts',
  },
  {
    slug: 'air-jordan',
    name: 'Air Jordan',
    tagline: 'Flight Club',
    description: 'Iconic basketball heritage meets modern street style',
    category: 'athletic',
    href: '/apparel/air-jordan',
  },
  {
    slug: 'supreme',
    name: 'Supreme',
    tagline: 'NYC Streetwear Icon',
    description: 'Bold graphics and exclusive drops from the streetwear pioneer',
    category: 'streetwear',
    href: '/apparel/supreme',
  },
  {
    slug: 'godspeed',
    name: 'Godspeed',
    tagline: 'On The Run Collection',
    description: 'Premium streetwear designed for those who move with purpose',
    category: 'streetwear',
    href: '/apparel/godspeed',
  },
  {
    slug: 'kith',
    name: 'Kith',
    tagline: 'Premium Streetwear',
    description: 'Elevated basics and exclusive collaborations from the NYC lifestyle brand',
    category: 'streetwear',
    href: '/apparel/kith',
  },
  {
    slug: 'nike',
    name: 'Nike',
    tagline: 'Just Do It',
    description: "Performance footwear and athletic apparel from the world's leading sports brand",
    category: 'athletic',
    href: '/apparel/nike',
  },
  {
    slug: 'asics',
    name: 'Asics',
    tagline: 'Sound Mind, Sound Body',
    description: 'Japanese performance footwear and retro lifestyle sneakers',
    category: 'athletic',
    href: '/apparel/asics',
  },
  {
    slug: 'new-balance',
    name: 'New Balance',
    tagline: 'Fearlessly Independent',
    description: 'Made in USA heritage sneakers and modern performance footwear',
    category: 'lifestyle',
    href: '/apparel/new-balance',
  },
  {
    slug: 'ralph-lauren-polo',
    name: 'Ralph Lauren Polo',
    tagline: 'Timeless American Style',
    description: 'Classic preppy essentials and iconic polo shirts from the legendary designer',
    category: 'lifestyle',
    href: '/apparel/ralph-lauren-polo',
  },
] as const;

/**
 * Get brand by slug
 */
export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

/**
 * Get brands by category
 */
export function getBrandsByCategory(
  category: BrandInfo['category']
): readonly BrandInfo[] {
  return BRANDS.filter((brand) => brand.category === category);
}

/**
 * Brand categories
 */
export const BRAND_CATEGORIES = [
  { slug: 'streetwear', name: 'Streetwear' },
  { slug: 'athletic', name: 'Athletic' },
  { slug: 'luxury', name: 'Luxury' },
  { slug: 'lifestyle', name: 'Lifestyle' },
] as const;
