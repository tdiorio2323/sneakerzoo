/**
 * Product-related type definitions
 *
 * This module contains all types related to products, collections,
 * categories, and inventory management.
 */

/**
 * Product image with dimensions and alt text
 */
export interface ProductImage {
  /** Image URL (can be relative or absolute) */
  url: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
}

/**
 * Product category types
 */
export type ProductCategory = 'apparel' | 'footwear' | 'accessories';

/**
 * Product currency codes (ISO 4217)
 */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

/**
 * Product availability status
 */
export type ProductStatus = 'in_stock' | 'out_of_stock' | 'preorder' | 'discontinued';

/**
 * Footwear size types
 */
export type FootwearSizeType = 'youth' | 'mens' | 'womens';

/**
 * Complete product information
 */
export interface Product {
  /** Unique product identifier */
  id: string;
  /** Product title/name */
  title: string;
  /** URL-safe slug */
  slug: string;
  /** Product price (in cents to avoid floating point issues) */
  price: number;
  /** Currency code */
  currency: CurrencyCode;
  /** Product images array */
  images: ProductImage[];
  /** Product category */
  category: ProductCategory;
  /** Brand slug */
  brand: string;
  /** Full product description (optional) */
  description?: string;
  /** Available sizes (for apparel/footwear) */
  sizes?: string[];
  /** Product availability status */
  status?: ProductStatus;
  /** SEO meta description */
  metaDescription?: string;
}

/**
 * Brand collection information
 */
export interface BrandCollection {
  /** URL-safe brand slug */
  slug: string;
  /** Display name */
  name: string;
  /** Short tagline */
  tagline: string;
  /** Full description */
  description: string;
  /** Products in this collection */
  products: Product[];
  /** Brand logo (optional) */
  logo?: ProductImage;
  /** SEO meta description */
  metaDescription?: string;
}

/**
 * Simplified product card data (for grid display)
 */
export interface ProductCardData {
  /** Product title */
  title: string;
  /** Main image source */
  imageSrc: string;
  /** Link to product detail page */
  href?: string;
  /** Formatted price string */
  price?: string;
}

/**
 * Product grid item (same as ProductCardData for now, but allows divergence)
 */
export type ProductGridItem = ProductCardData;

/**
 * Format price to display string
 *
 * @param priceInCents - Price in cents
 * @param currency - Currency code
 * @returns Formatted price string
 *
 * @example
 * ```typescript
 * formatPrice(19900, 'USD') // "$199.00"
 * ```
 */
export function formatPrice(priceInCents: number, currency: CurrencyCode = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(priceInCents / 100);
}

/**
 * Convert Product to ProductCardData for grid display
 *
 * @param product - Full product object
 * @param basePath - Base path for product links
 * @returns Product card data
 */
export function productToCardData(product: Product, basePath: string = ''): ProductCardData {
  return {
    title: product.title,
    imageSrc: product.images[0]?.url || '/placeholder.jpg',
    href: `${basePath}/${product.brand}/${product.slug}`,
    price: formatPrice(product.price, product.currency),
  };
}
