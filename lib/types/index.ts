/**
 * Central type definitions export
 *
 * Import all types from a single location:
 * ```typescript
 * import { Product, BusinessInfo, ApiResponse } from '@/lib/types';
 * ```
 */

// Product types
export type {
  ProductImage,
  ProductCategory,
  CurrencyCode,
  ProductStatus,
  FootwearSizeType,
  Product,
  BrandCollection,
  ProductCardData,
  ProductGridItem,
} from './product';

export { formatPrice, productToCardData } from './product';

// Business types
export type {
  BusinessHours,
  BusinessInfo,
  SocialLinks,
  NavigationItem,
  TimeInMinutes,
  ParsedTime,
} from './business';

export { DayOfWeek } from './business';

// API types
export type {
  ApiResponse,
  ContactFormData,
  ContactFormResponse,
  HttpMethod,
  ApiError,
  ValidationError,
  FormStatus,
  FormErrors,
} from './api';

export { ApiErrorCode, successResponse, errorResponse } from './api';

// UI types
export type {
  ContainerProps,
  SectionProps,
  BadgeVariant,
  ButtonVariant,
  ButtonSize,
  LoadingState,
  ErrorState,
  OptimizedImageProps,
  LinkProps,
  ModalState,
  ToastType,
  ToastMessage,
  Theme,
  Breakpoint,
} from './ui';

// SEO types
export type {
  OpenGraphImage,
  PageMetadata,
  StructuredDataType,
  BaseStructuredData,
  ProductStructuredData,
  BreadcrumbItem,
  SitemapUrl,
  RobotsConfig,
} from './seo';
