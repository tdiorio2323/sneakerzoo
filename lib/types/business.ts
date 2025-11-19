/**
 * Business information type definitions
 *
 * Types for business hours, location, contact information, etc.
 */

/**
 * Business hours for a day or range of days
 */
export interface BusinessHours {
  /** Day or day range (e.g., "Mon–Sat", "Sun") */
  day: string;
  /** Opening time in HH:MM format (24-hour) */
  open: string;
  /** Closing time in HH:MM format (24-hour) */
  close: string;
}

/**
 * Complete business information
 */
export interface BusinessInfo {
  /** Full business name */
  name: string;
  /** Short name for display */
  shortName: string;
  /** Business tagline */
  tagline: string;
  /** Street address line */
  addressLine: string;
  /** City name */
  city: string;
  /** State/region code */
  region: string;
  /** Postal/ZIP code */
  postalCode: string;
  /** Country code (ISO 3166-1 alpha-2) */
  country: string;
  /** Phone number (optional, with formatting) */
  phone?: string;
  /** Contact email address */
  email: string;
  /** Website URL */
  website: string;
  /** Instagram username (without @) */
  instagram: string;
  /** Business hours array */
  hours: BusinessHours[];
  /** Google Maps query string */
  mapQuery: string;
}

/**
 * Social media links
 */
export interface SocialLinks {
  /** Instagram profile URL */
  instagram: string;
  /** Facebook page URL (optional) */
  facebook?: string;
  /** Twitter/X profile URL (optional) */
  twitter?: string;
  /** TikTok profile URL (optional) */
  tiktok?: string;
}

/**
 * Navigation item
 */
export interface NavigationItem {
  /** Display name */
  name: string;
  /** Route path */
  href: string;
  /** Optional icon name */
  icon?: string;
  /** Whether link opens in new tab */
  external?: boolean;
}

/**
 * Day of week enumeration (0 = Sunday)
 */
export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

/**
 * Time in minutes since midnight
 */
export type TimeInMinutes = number;

/**
 * Parsed time object
 */
export interface ParsedTime {
  /** Hours (0-23) */
  hours: number;
  /** Minutes (0-59) */
  minutes: number;
  /** Total minutes since midnight */
  totalMinutes: TimeInMinutes;
}
