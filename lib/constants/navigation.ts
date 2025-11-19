/**
 * Navigation and routing constants
 */

import type { NavigationItem } from '@/lib/types';

/**
 * Main site navigation items
 */
export const NAVIGATION: readonly NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Apparel", href: "/apparel" },
  { name: "Footwear", href: "/footwear" },
  { name: "Accessories", href: "/accessories" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

/**
 * Route paths for easy reference
 */
export const ROUTES = {
  home: "/",
  apparel: "/apparel",
  footwear: "/footwear",
  accessories: "/accessories",
  gallery: "/gallery",
  about: "/about",
  contact: "/contact",
  api: {
    contact: "/api/contact",
  },
} as const;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
  /** Instagram profile */
  instagram: "https://www.instagram.com/sneakerzooapparel/",
  /** Google Maps shared location */
  googleMaps: "https://share.google/BGdYANudsnHXSzTff",
} as const;
