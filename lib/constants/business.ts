/**
 * Business information constants
 *
 * Single source of truth for all business-related data including
 * hours, location, contact information, and social media.
 */

import type { BusinessInfo } from '@/lib/types';

/**
 * Main business information
 *
 * @important Update email address before production deployment
 */
export const BUSINESS: BusinessInfo = {
  name: "Sneaker Zoo & Apparel",
  shortName: "Sneaker Zoo",
  tagline: "Premium Sneakers • Apparel • Accessories",
  addressLine: "2481 Richmond Rd",
  city: "Staten Island",
  region: "NY",
  postalCode: "10306",
  country: "US",
  phone: "(347) 683-8053",
  // TODO: Update email address before production
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@thesneakerzoo.com",
  website: "https://www.thesneakerzoo.com",
  instagram: "sneakerzooapparel",
  hours: [
    { day: "Mon–Sat", open: "11:00", close: "19:00" },
    { day: "Sun", open: "11:00", close: "17:00" },
  ],
  mapQuery: "2481 Richmond Rd, Staten Island, NY 10306",
} as const;

/**
 * Geographic coordinates for the store
 */
export const STORE_COORDINATES = {
  latitude: 40.5755529,
  longitude: -74.1210826,
} as const;

/**
 * Social media profile URLs
 */
export const SOCIAL_LINKS = {
  instagram: `https://instagram.com/${BUSINESS.instagram}`,
} as const;

/**
 * Contact URLs
 */
export const CONTACT_URLS = {
  /** Phone number (tel: link) */
  phone: BUSINESS.phone ? `tel:${BUSINESS.phone.replace(/\D/g, "")}` : undefined,
  /** Email (mailto: link) */
  email: `mailto:${BUSINESS.email}`,
  /** Google Maps directions link */
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`,
  /** Google Maps embed URL (requires API key) */
  mapEmbed: (apiKey: string) =>
    `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(BUSINESS.mapQuery)}`,
} as const;
