/**
 * UI component prop types and UI-specific types
 */

import { ReactNode } from 'react';

/**
 * Common props for container components
 */
export interface ContainerProps {
  /** Child elements */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Common props for section components
 */
export interface SectionProps extends ContainerProps {
  /** Section ID for anchor linking */
  id?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * Badge variant types
 */
export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

/**
 * Button variant types
 */
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

/**
 * Button size types
 */
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Loading state
 */
export interface LoadingState {
  /** Whether component is loading */
  isLoading: boolean;
  /** Optional loading message */
  message?: string;
}

/**
 * Error state
 */
export interface ErrorState {
  /** Whether an error occurred */
  hasError: boolean;
  /** Error message */
  message?: string;
  /** Error code */
  code?: string;
}

/**
 * Image props for optimized images
 */
export interface OptimizedImageProps {
  /** Image source */
  src: string;
  /** Alt text */
  alt: string;
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Whether to use fill layout */
  fill?: boolean;
  /** Image sizes for responsive images */
  sizes?: string;
  /** Priority loading */
  priority?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Link props
 */
export interface LinkProps {
  /** Link destination */
  href: string;
  /** Link text */
  children: ReactNode;
  /** Whether link opens in new tab */
  external?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Modal state
 */
export interface ModalState {
  /** Whether modal is open */
  isOpen: boolean;
  /** Function to open modal */
  open: () => void;
  /** Function to close modal */
  close: () => void;
  /** Function to toggle modal */
  toggle: () => void;
}

/**
 * Toast/notification types
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Toast message
 */
export interface ToastMessage {
  /** Unique ID */
  id: string;
  /** Toast type */
  type: ToastType;
  /** Message text */
  message: string;
  /** Duration in milliseconds */
  duration?: number;
}

/**
 * Theme type (for future theme support)
 */
export type Theme = 'light' | 'dark';

/**
 * Responsive breakpoint
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
