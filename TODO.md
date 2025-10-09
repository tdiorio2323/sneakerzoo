# Sneaker Zoo & Apparel — Build Plan

> Stack: Next.js 15, TS, Tailwind, shadcn, Framer Motion

## Phase 1 — Core To-Dos
### Structure & Codebase
- [ ] Enforce default exports/imports across `components/**` and `app/**`.
- [ ] Consolidate folders: `components/ui`, `components/sections`, `components/shared`.
- [ ] Add strict prop types (`interface Props {}` + `PropsWithChildren`).
- [ ] ESLint + Prettier with `import/no-named-default`.
- [ ] Migrate all images to `next/image`.
- [ ] Validate responsive breakpoints: 320, 375, 414, 768, 1024, 1280, 1536, 1920.
- [ ] Framer Motion base config (reveal on scroll, hover lift).
- [ ] Dynamic metadata per route (title, description, OG/Twitter).

### Styling & Theme
- [ ] Finalize `:root` tokens (bg, fg, border, radius).
- [ ] Audit spacing/typography scale (H1–H6, body, small).
- [ ] Add consistent hover/active states for all CTAs.
- [ ] Smoke test dark-only and light mode fallback.

### Sections
**Hero**
- [ ] Background image/video + black gradient overlay.
- [ ] Motion: headline → subtext → buttons (stagger).
- [ ] CTAs: `Get Directions`, `Call Now`.

**What We Offer**
- [ ] Replace placeholders with categories: Sneakers, Apparel, Accessories.
- [ ] Tile media (Image fill) + hover scale.
- [ ] Link to collection or gallery anchor.

**Gallery Preview**
- [ ] Grid of 4–6 items, hover zoom.
- [ ] “View All” → `/gallery`.
- [ ] Responsive: 2x2 mobile, 3x2 desktop.

**Instagram Feed**
- [ ] Data source: Graph API or static JSON cache.
- [ ] Loading skeletons.
- [ ] Each thumb links to post URL.

**Hours & Location**
- [ ] Google Map iframe component (env var key).
- [ ] Buttons: `Copy Address`, `Call`, `Directions`.
- [ ] Accurate “Open Now” based on local time.

**Footer**
- [ ] Logo + brand blurb.
- [ ] Quick Links.
- [ ] Newsletter input (Mailchimp/Resend).
- [ ] Social icons.

## Phase 2 — Enhancements / Add-Ons
### Visual
- [ ] Section fade/parallax between bands.
- [ ] Ambient glow behind logo.
- [ ] Gradient borders on buttons/cards.
- [ ] Scroll progress indicator.

### Interactive UX
- [ ] Sticky mobile action bar (`Call`, `Directions`, `IG`).
- [ ] Scroll-to-top.
- [ ] Auto-detect locale for address format.
- [ ] Chat widget (Tawk.to/Manychat).

### Product & CMS
- [ ] Sanity CMS: Collections, Products, IG feed, Hours.
- [ ] `/shop` scaffold with cards.
- [ ] Filters: size, brand, price.
- [ ] Reserve-in-store (Stripe intent without shipping).
- [ ] “Lookbook” page powered by CMS.

### SEO & Analytics
- [ ] LocalBusiness JSON-LD.
- [ ] `sitemap.xml`, `robots.txt`.
- [ ] Route-level OG images.
- [ ] GA4 + Meta Pixel.
- [ ] Google Business Profile link in footer.

### Performance & DevOps
- [ ] Dynamic import non-critical sections.
- [ ] Next Image optimization pass.
- [ ] Lighthouse ≥ 95 mobile/desktop.
- [ ] Vercel preview protection + envs.
- [ ] Bundle size budget alerts.

## Phase 3 — Future Expansion
### Business Tools
- [ ] Inventory sync dashboard (POS adapter).
- [ ] Restock alerts (email/SMS).
- [ ] POS integration (Square/Shopify).
- [ ] Google Reviews feed + rating badge.

### Marketing
- [ ] Sneaker drop countdown banner.
- [ ] Web push for releases.
- [ ] Zapier/Make automations for CRM.
- [ ] Referral/affiliate links.

### Long-Term
- [ ] i18n (EN/ES).
- [ ] 3D sneaker viewer (Three.js minimal).
- [ ] AR try-on (campaign landing).
- [ ] Loyalty system.
- [ ] PWA install for in-store browsing.

## Quick Commands
```bash
# dev, lint, typecheck
pnpm dev:fast        # next dev --turbo
pnpm lint
pnpm typecheck

# lighthouse (local)
npx @lhci/cli autorun --upload.target=temporary-public-storage || true
```