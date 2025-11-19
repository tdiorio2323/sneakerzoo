/**
 * Central constants export
 *
 * Import all constants from a single location:
 * ```typescript
 * import { BUSINESS, NAVIGATION, FOOTWEAR_SIZES } from '@/lib/constants';
 * ```
 */

// Business constants
export {
  BUSINESS,
  STORE_COORDINATES,
  SOCIAL_LINKS,
  CONTACT_URLS,
} from './business';

// Navigation constants
export {
  NAVIGATION,
  ROUTES,
  EXTERNAL_LINKS,
} from './navigation';

// Size constants
export {
  FOOTWEAR_SIZES,
  APPAREL_SIZES,
} from './sizes';

export type { FootwearSize, ApparelSize } from './sizes';
