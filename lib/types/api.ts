/**
 * API type definitions
 *
 * Types for API requests, responses, and error handling
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request succeeded */
  ok: boolean;
  /** Response data (if successful) */
  data?: T;
  /** Error message (if failed) */
  error?: string;
  /** Validation errors (if applicable) */
  errors?: Record<string, string[]>;
}

/**
 * Success response helper
 */
export function successResponse<T>(data: T): ApiResponse<T> {
  return {
    ok: true,
    data,
  };
}

/**
 * Error response helper
 */
export function errorResponse(error: string, errors?: Record<string, string[]>): ApiResponse {
  return {
    ok: false,
    error,
    errors,
  };
}

/**
 * Contact form data
 */
export interface ContactFormData {
  /** Sender's name */
  name: string;
  /** Sender's email */
  email: string;
  /** Message content */
  message: string;
}

/**
 * Contact form submission response
 */
export type ContactFormResponse = ApiResponse<{ sent: boolean }>;

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * API error codes
 */
export enum ApiErrorCode {
  ValidationError = 'VALIDATION_ERROR',
  NotFound = 'NOT_FOUND',
  ServerError = 'SERVER_ERROR',
  Unauthorized = 'UNAUTHORIZED',
  Forbidden = 'FORBIDDEN',
  RateLimited = 'RATE_LIMITED',
}

/**
 * Structured API error
 */
export interface ApiError {
  /** Error code */
  code: ApiErrorCode;
  /** Human-readable message */
  message: string;
  /** Additional context */
  details?: Record<string, unknown>;
}

/**
 * Validation error detail
 */
export interface ValidationError {
  /** Field name */
  field: string;
  /** Error message */
  message: string;
  /** Validation rule that failed */
  rule?: string;
}

/**
 * Form submission status
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Form field errors
 */
export type FormErrors<T> = Partial<Record<keyof T, string>>;
