/**
 * Product size constants
 */

/**
 * Footwear size options
 */
export const FOOTWEAR_SIZES = {
  /** Youth sizes */
  YOUTH: ['7Y', '8Y', '9Y', '10Y', '11Y', '12Y'] as const,

  /** Men's sizes */
  MENS: ['7M', '8M', '9M', '10M', '11M', '12M'] as const,

  /** All footwear sizes (youth + mens) */
  get ALL() {
    return [...this.YOUTH, ...this.MENS] as const;
  },
} as const;

/**
 * Apparel size options
 */
export const APPAREL_SIZES = {
  /** Standard sizes */
  STANDARD: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'] as const,

  /** Numeric sizes */
  NUMERIC: ['28', '30', '32', '34', '36', '38', '40', '42'] as const,
} as const;

/**
 * Type for footwear size (derived from const)
 */
export type FootwearSize = typeof FOOTWEAR_SIZES.ALL[number];

/**
 * Type for apparel size (derived from const)
 */
export type ApparelSize = typeof APPAREL_SIZES.STANDARD[number] | typeof APPAREL_SIZES.NUMERIC[number];
