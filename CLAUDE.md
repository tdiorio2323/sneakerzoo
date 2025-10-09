# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sneaker Zoo & Apparel** - A mobile-first, production-ready landing site for a premium sneaker boutique in Staten Island, NY. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

```bash
# Development
pnpm dev              # Standard dev server on :3000
pnpm dev:fast         # Turbo mode (faster, no telemetry)

# Building & Quality Checks
pnpm build            # Production build + start server
pnpm lint             # ESLint validation
pnpm typecheck        # TypeScript type checking
pnpm check:imports    # Verify no named default imports

# Package Management
pnpm install          # Install dependencies (use pnpm, not npm/yarn)
```

## Architecture Overview

### SEO-First Architecture
This site is built with SEO as a primary concern:

1. **Centralized Business Data** (`lib/constants.ts`): Single source of truth for business info (hours, address, phone, social). All components pull from this file.

2. **SEO Metadata System** (`lib/seo.ts`):
   - `baseMetadata` - Global meta tags, Open Graph, Twitter cards
   - `getPageMetadata()` - Per-page metadata helper
   - Domain configured at `metadataBase` (currently: thesneakerzoo.com)

3. **Structured Data** (`lib/schema.ts`):
   - JSON-LD for local business (ShoeStore schema)
   - Injected in root layout via `<script type="application/ld+json">`
   - Includes geo coords, opening hours, contact info

4. **Dynamic SEO Files**:
   - `app/sitemap.ts` - Auto-generated XML sitemap
   - `app/robots.ts` - Robots.txt with sitemap reference

### Styling System

**Dark Theme Only** - Black background (#000) with white text, using CSS variables in HSL format.

**Custom Utility Classes** (defined in `globals.css`):
- `.card-surface` - Standard card with subtle shadow/border
- `.btn-primary` - White button with black text
- `.btn-ghost` - Outlined transparent button
- `.mobile-stick` - Fixed bottom action bar (3-column grid)

**Theme Tokens**: All colors use CSS custom properties (`--background`, `--foreground`, etc.) defined in `:root` and `.dark` classes.

### Component Patterns

**Layout Structure**:
```
RootLayout (app/layout.tsx)
├── Header (sticky nav)
├── <main>{children}</main>
├── Footer (hours, social, copyright)
└── Mobile Sticky Bar (call/directions/Instagram - mobile only)
```

**Data Flow**:
- Business constants → Components (import from `@/lib/constants`)
- SEO metadata → Page-level exports (use `getPageMetadata()`)
- JSON-LD schema → Root layout `<head>` injection

**Key Component Responsibilities**:
- `Hero.tsx` - Parallax hero with Framer Motion
- `GalleryGrid.tsx` - Product photo grid with lightbox
- `IGFeed.tsx` - Instagram feed (currently placeholder tiles)
- `ContactCard.tsx` - Form with Zod validation, Resend email
- `MapEmbed.tsx` - Google Maps iframe (needs API key in env)
- `HoursLocation.tsx` - Dynamic "Open Now" badge based on current time

### API Routes

**POST /api/contact** (`app/api/contact/route.ts`):
- Validates form input with Zod schema
- Sends email via Resend API (optional - logs to console if not configured)
- **Action Required**: Update `from` and `to` email addresses (lines 31-32)
- **Env Var Optional**: `RESEND_API_KEY` (app works without it, just logs instead)

### Image Optimization

Next.js Image component configured for:
- Formats: AVIF, WebP (fallback to original)
- Device sizes: 480, 768, 1080, 1440px
- Image sizes: 64, 96, 128, 256, 384px
- Unoptimized in dev mode for speed

**Gallery Images**: Place in `public/gallery/` as `01.jpg`, `02.jpg`, etc. Update `GalleryGrid.tsx` if adding more than 6 images.

## Configuration Notes

### Environment Variables
Optional for enhanced functionality:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY  # Maps embed
RESEND_API_KEY                   # Contact form emails
NEXT_PUBLIC_BASE_URL             # Production domain (update from localhost)
```

**Note**: The app is fully functional without these environment variables. Contact form will log to console, and map will show a placeholder.

### Pre-Deployment Checklist
1. Update `BUSINESS.email` in `lib/constants.ts` (currently "TODO")
2. Configure Resend `from`/`to` emails in `app/api/contact/route.ts`
3. Add Google Maps API key to `.env.local`
4. Update `metadataBase` in `lib/seo.ts` to production domain
5. Replace `public/logo.svg` and `public/og.jpg` (1200×630px)
6. Add real product photos to `public/gallery/`

### ESLint Rules
- Named default imports are **blocked** (`import/no-named-default`)
- Use `import Component` not `import { default as Component }`
- Next.js `<img>` warnings are disabled (use Next Image component)

### TypeScript Path Alias
- `@/*` maps to project root
- Example: `import { BUSINESS } from '@/lib/constants'`

## Important Technical Details

- **React 19 & Next.js 15**: Uses latest stable versions with App Router
- **No Database**: Fully static with serverless API routes
- **Dark Mode**: Class-based (`className="dark"` on `<html>`)
- **Fonts**: Inter (body) and Bebas Neue (headings) via `next/font/google` with `display: swap`
- **Package Manager**: pnpm 9.15.9 (enforced via `packageManager` field)
- **Mobile-First**: Sticky action bar on mobile, responsive container padding

## Known Placeholder/TODO Items

1. **Instagram Feed**: `IGFeed.tsx` uses static placeholder tiles. Needs real Instagram API or embed integration.
2. **Email Addresses**: Contact form recipient email is `you@example.com` (update in API route line 32).
3. **Business Email**: `BUSINESS.email` is "TODO" in constants.ts line 26.
4. **Google Maps**: API key placeholder in `MapEmbed.tsx` (needs real key from Google Cloud Console).
