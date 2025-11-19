/**
 * SEO and metadata type definitions
 */

/**
 * OpenGraph image data
 */
export interface OpenGraphImage {
  /** Image URL */
  url: string;
  /** Image width */
  width: number;
  /** Image height */
  height: number;
  /** Alt text */
  alt: string;
  /** Image type (optional) */
  type?: string;
}

/**
 * Page metadata configuration
 */
export interface PageMetadata {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** Keywords (optional) */
  keywords?: string[];
  /** Canonical URL */
  canonicalUrl?: string;
  /** OpenGraph image */
  ogImage?: OpenGraphImage;
  /** Whether to index this page */
  noIndex?: boolean;
  /** Whether to follow links on this page */
  noFollow?: boolean;
}

/**
 * Structured data type (JSON-LD)
 */
export type StructuredDataType =
  | 'Organization'
  | 'LocalBusiness'
  | 'ShoeStore'
  | 'Product'
  | 'WebSite'
  | 'WebPage'
  | 'BreadcrumbList';

/**
 * Base structured data
 */
export interface BaseStructuredData {
  '@context': string;
  '@type': StructuredDataType;
  [key: string]: unknown;
}

/**
 * Product structured data (schema.org/Product)
 */
export interface ProductStructuredData extends BaseStructuredData {
  '@type': 'Product';
  name: string;
  image: string | string[];
  description?: string;
  brand?: {
    '@type': 'Brand';
    name: string;
  };
  offers?: {
    '@type': 'Offer';
    url?: string;
    priceCurrency: string;
    price: number;
    availability: string;
    priceValidUntil?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * Breadcrumb list item
 */
export interface BreadcrumbItem {
  /** Item name */
  name: string;
  /** Item URL */
  url: string;
  /** Position in list (1-indexed) */
  position: number;
}

/**
 * Sitemap URL entry
 */
export interface SitemapUrl {
  /** Page URL */
  url: string;
  /** Last modification date */
  lastModified?: Date | string;
  /** Change frequency */
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /** Priority (0.0 to 1.0) */
  priority?: number;
}

/**
 * Robots.txt configuration
 */
export interface RobotsConfig {
  /** Rules for all user agents */
  rules: {
    /** User agent identifier */
    userAgent: string | string[];
    /** Allowed paths */
    allow?: string | string[];
    /** Disallowed paths */
    disallow?: string | string[];
    /** Crawl delay in seconds */
    crawlDelay?: number;
  }[];
  /** Sitemap URL */
  sitemap?: string | string[];
  /** Host directive */
  host?: string;
}
