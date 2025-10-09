# Sneaker Zoo & Apparel

A fast, mobile-first landing site for Sneaker Zoo & Apparel, a premium sneaker boutique in Staten Island, NY.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
sneaker-zoo/
├── app/
│   ├── layout.tsx          # Root layout with metadata & JSON-LD
│   ├── page.tsx            # Home page
│   ├── gallery/            # Gallery page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── api/contact/        # Contact form API endpoint
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Sticky navigation
│   ├── Footer.tsx          # Footer with hours & social
│   ├── Hero.tsx            # Hero section with parallax
│   ├── HoursLocation.tsx   # Store hours & "Open Now" badge
│   ├── IGFeed.tsx          # Instagram feed grid
│   ├── GalleryGrid.tsx     # Image gallery with lightbox
│   ├── ContactCard.tsx     # Contact form with validation
│   ├── MapEmbed.tsx        # Google Maps embed
│   └── ...                 # Other components
├── lib/
│   ├── constants.ts        # Business info (hours, address, etc.)
│   ├── seo.ts              # SEO metadata helpers
│   ├── schema.ts           # JSON-LD structured data
│   └── utils.ts            # Utility functions
├── public/
│   ├── gallery/            # Product images
│   ├── logo.svg            # Store logo
│   └── og.jpg              # Open Graph image
└── ...config files
```

## ✏️ Customization Guide

### 1. Update Business Information

Edit `lib/constants.ts`:

```typescript
export const BUSINESS = {
  name: "Sneaker Zoo & Apparel",
  shortName: "Sneaker Zoo",
  tagline: "Premium Sneakers • Apparel • Accessories",
  addressLine: "2481 Richmond Rd",
  city: "Staten Island",
  region: "NY",
  postalCode: "10306",
  country: "US",
  phone: "(347) 683-8053",        // ⚠️ UPDATE THIS
  email: "info@sneakerzoo.com",   // ⚠️ UPDATE THIS
  instagram: "sneakerzooapparel",
  hours: [
    { day: "Mon–Sat", open: "11:00", close: "19:00" },
    { day: "Sun", open: "11:00", close: "17:00" },
  ],
  mapQuery: "2481 Richmond Rd, Staten Island, NY 10306",
};
```

### 2. Add Gallery Images

1. Place high-quality product images in `public/gallery/`
2. Rename them as: `01.jpg`, `02.jpg`, `03.jpg`, etc.
3. Recommended specs:
   - Format: JPG, PNG, or WebP
   - Size: 1200×1200px (square) or larger
   - Optimized for web (<500KB each)
4. Update `components/GalleryGrid.tsx` if you need more than 6 images:

```typescript
const galleryFiles = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
  "/gallery/07.jpg", // Add more as needed
];
```

### 3. Update Logo & Branding

- Replace `public/logo.svg` with your logo
- Replace `public/og.jpg` with a 1200×630px Open Graph image
- Update favicon: `public/favicon.ico`
- Add iOS icon: `public/apple-touch-icon.png` (180×180px)

### 4. Configure Google Maps

In `components/MapEmbed.tsx`, replace the placeholder API key:

```typescript
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_ACTUAL_API_KEY&q=${encodeURIComponent(BUSINESS.mapQuery)}`;
```

Get a free API key at: https://developers.google.com/maps/documentation/embed/get-api-key

### 5. Instagram Integration

The current Instagram feed uses placeholder tiles. To show live posts:

**Option A:** Use Instagram's official embed widget
- Visit: https://developers.facebook.com/docs/instagram/embed
- Generate embed code
- Update `components/IGFeed.tsx`

**Option B:** Use a third-party service (Juicer, Flockler, etc.)

### 6. Contact Form Email Integration

Currently, the contact form logs to console. To send emails:

**Option A:** Use Resend (recommended)
```bash
pnpm add resend
```

In `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'noreply@sneakerzoo.com',
  to: BUSINESS.email,
  subject: 'New Contact Form Submission',
  html: `<p>From: ${parsed.data.name} (${parsed.data.email})</p><p>${parsed.data.message}</p>`
});
```

**Option B:** Use SendGrid, Mailgun, or any SMTP service

### 7. Update Domain & SEO

Before deploying, update URLs in:
- `lib/seo.ts` - Change `metadataBase` to your actual domain
- `app/sitemap.ts` - Update `baseUrl`
- `app/robots.ts` - Update sitemap URL

## 🎨 Design System

### Colors
- Background: `#000000` (black)
- Text: `#ffffff` (white)
- Accent: `#f5f5f5` (off-white)
- Borders: `rgba(255, 255, 255, 0.1)`

### Typography
- Font: Inter (variable font)
- Headings: Bold, tight tracking
- Body: Regular weight, good line height

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS
- `tailwind-merge` - Merge Tailwind classes
- `class-variance-authority` - Component variants
- `clsx` - Conditional classes

### UI Components
- `@radix-ui/react-*` - Accessible primitives
- `lucide-react` - Icons
- `framer-motion` - Animations

### Validation
- `zod` - Schema validation

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables (if needed)
4. Deploy!

```bash
pnpm add -g vercel
vercel
```

### Other Platforms

Works on any platform supporting Next.js 15:
- Netlify
- Railway
- Render
- AWS Amplify
- Self-hosted

## ✅ Pre-Launch Checklist

- [ ] Update business info in `lib/constants.ts`
- [ ] Add real product photos to `public/gallery/`
- [ ] Replace logo, OG image, and favicon
- [ ] Configure Google Maps API key
- [ ] Set up email service for contact form
- [ ] Update domain in SEO files
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Verify Instagram embed works
- [ ] Test contact form submission
- [ ] Check all internal links
- [ ] Verify Open Graph preview on social media

## 🎯 Performance

Target metrics:
- Lighthouse Score: 90+ (mobile & desktop)
- CSS Bundle: <100KB
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Optimization Tips
1. Compress images with TinyPNG or Squoosh
2. Use WebP format when possible
3. Enable image lazy loading (default in Next.js)
4. Minimize custom fonts
5. Remove unused dependencies before deploy

## 🆘 Troubleshooting

**Images not loading?**
- Check file paths match exactly
- Ensure images are in `public/` directory
- Clear Next.js cache: `rm -rf .next`

**Styles not applying?**
- Run `pnpm dev` to rebuild Tailwind
- Check for typos in className props
- Verify `globals.css` is imported in layout

**Build errors?**
- Run `pnpm lint` to check for issues
- Check TypeScript errors: `pnpm tsc --noEmit`
- Clear cache and reinstall: `rm -rf node_modules .next && pnpm install`

## 📄 License

Proprietary - All rights reserved by Sneaker Zoo & Apparel

## 🤝 Support

For questions or issues with this codebase:
- Create an issue in the repository
- Contact the development team

---

Built with ❤️ for Sneaker Zoo & Apparel, Staten Island
