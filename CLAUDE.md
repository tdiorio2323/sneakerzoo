# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sneaker Zoo & Apparel** - A mobile-first, production-ready landing site for a premium sneaker boutique in Staten Island, NY. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Zod validation, Resend (email)

**Package Manager:** pnpm 9.15.9 (enforced - do not use npm/yarn)

## Development Commands

```bash
# Development
pnpm dev              # Standard dev server on :3000
pnpm dev:fast         # Turbo mode (faster, no telemetry) - preferred for development

# Building & Quality Checks
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # ESLint validation
pnpm typecheck        # TypeScript type checking
pnpm check:imports    # Verify no named default imports (enforced rule)
```

## Architecture Overview

### Core Architectural Patterns

**1. SEO-First Architecture** - SEO is a primary architectural concern:
   - **Single Source of Truth**: `lib/constants.ts` contains all business data (hours, address, phone, social)
   - **Metadata System**: `lib/seo.ts` provides `baseMetadata` and `getPageMetadata()` helpers
   - **Structured Data**: `lib/schema.ts` generates JSON-LD (ShoeStore schema) injected in root layout
   - **Dynamic SEO**: `app/sitemap.ts` and `app/robots.ts` auto-generate sitemap/robots.txt
   - **Domain Config**: `metadataBase` set to thesneakerzoo.com in `lib/seo.ts`

**2. Server/Client Component Split** (Next.js 15 App Router Pattern):
   - Dynamic route pages are Server Components that handle async params
   - Client Components (with "use client") handle interactivity
   - Pattern: `page.tsx` (server) → `*DetailClient.tsx` (client)

   Example:
   ```typescript
   // app/footwear/[slug]/page.tsx - Server Component
   export default async function FootwearDetailPage(props: FootwearDetailPageProps) {
     const params = await props.params;  // Next.js 15 async params
     return <FootwearDetailClient slug={params.slug} />;
   }
   ```

**3. Mock Data System** (Temporary until real inventory):
   - `lib/mock.ts`: `getMockProducts()` generates 16 products per category
   - All products currently use `/imagebox-1.jpg` placeholder
   - Dynamic routes: `/mens/[slug]`, `/womens/[slug]`, `/footwear/[slug]`, `/accessories/[slug]`

**4. Layout Structure**:
   ```
   RootLayout (app/layout.tsx)
   ├── Header (sticky nav)
   ├── <main>{children}</main>
   ├── Footer (hours, social, copyright)
   └── Mobile Sticky Bar (call/directions/Instagram - mobile only)
   ```

**5. Data Flow**:
   - Business constants → Components (import from `@/lib/constants`)
   - SEO metadata → Page-level exports (use `getPageMetadata()`)
   - JSON-LD schema → Root layout `<head>` injection

## Styling System

**Dark Theme Only**: Black background (#000), white text, CSS variables in HSL format

**Custom Utility Classes** (`globals.css`):
- `.card-surface` - Card with subtle shadow/border
- `.btn-primary` - White button with black text
- `.btn-ghost` - Outlined transparent button
- `.mobile-stick` - Fixed bottom action bar (3-column grid)

**Tailwind Config** (`tailwind.config.ts`):
- Container padding scales with breakpoints (1rem → 4rem)
- Custom fonts: `font-sans` (Inter), `font-bebas` (Bebas Neue) via `next/font/google`
- Custom shadows: `shadow-subtle`
- Custom bg: `bg-hero-texture` (radial gradient)

**Theme Tokens**: All colors use CSS custom properties defined in `:root` (`--background`, `--foreground`, etc.)

## Key Components

- `Hero.tsx` - Parallax hero with Framer Motion animations
- `GalleryGrid.tsx` - Product photo grid with lightbox
- `IGFeed.tsx` - Instagram feed using `react-social-media-embed` (About page)
- `ContactCard.tsx` - Form with Zod validation + Resend email
- `MapEmbed.tsx` - Google Maps iframe (needs API key)
- `HoursLocation.tsx` - Dynamic "Open Now" badge based on current time

## API Routes

**POST /api/contact** (`app/api/contact/route.ts`):
- Validates with Zod schema
- Sends email via Resend (or logs to console if `RESEND_API_KEY` not set)
- **TODO**: Update `from`/`to` addresses at lines 31-32

## Image Handling

**Next.js Image Config** (`next.config.ts`):
- Formats: AVIF, WebP fallback
- Device sizes: 480, 768, 1080, 1440px
- Unoptimized in dev for speed

**Gallery**: Place images in `public/gallery/` as `01.jpg`, `02.jpg`, etc. (update `GalleryGrid.tsx` if adding more than 6)

## Environment Variables (Optional)

All features work without env vars. Contact form logs to console if Resend not configured.

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY  # For Maps embed
RESEND_API_KEY                   # For contact form emails
NEXT_PUBLIC_BASE_URL             # Production domain
```

## ESLint & Import Rules

**Enforced Rules**:
- Named default imports are **blocked** (`import/no-named-default`, `import/no-named-as-default`)
- Use `import Component` NOT `import { default as Component }`
- Run `pnpm check:imports` to verify compliance

**Path Alias**: `@/*` maps to project root (e.g., `import { BUSINESS } from '@/lib/constants'`)

## Important Technical Details

- **React 19 & Next.js 15**: App Router with latest stable versions
- **Async Params**: Dynamic routes use `await props.params` (Next.js 15 requirement)
- **No Database**: Fully static with serverless API routes + mock product data
- **Dark Mode**: Class-based (`className="dark"` on `<html>`)
- **Fonts**: Inter (body) + Bebas Neue (headings) via `next/font/google` with `display: swap`
- **Mobile-First**: Sticky action bar on mobile, responsive container padding

## Instagram Integration

Uses `react-social-media-embed` (no API key required):
- **Location**: About page (`app/about/page.tsx`)
- **Component**: `components/IGFeed.tsx`
- **Setup**: Add Instagram post URLs to `FEATURED_POSTS` array
- **Details**: See `INSTAGRAM_SETUP.md`

## Known TODOs / Placeholders

1. **Email Addresses**:
   - `BUSINESS.email` is "TODO" in `lib/constants.ts`:26
   - Contact form `from`/`to` are placeholders in `app/api/contact/route.ts`:31-32
2. **Instagram Posts**: Add real URLs to `FEATURED_POSTS` in `IGFeed.tsx`
3. **Google Maps**: Add API key to env (currently placeholder)
4. **Product Data**: Using mock data (`lib/mock.ts`) - all products use `/imagebox-1.jpg`
5. **Pre-Deployment**: Update `metadataBase` in `lib/seo.ts` to production domain
