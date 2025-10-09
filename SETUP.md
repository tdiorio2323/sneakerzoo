# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd /Users/tylerdiorio/sneakerzoo
pnpm install
```

## Step 2: Start Development Server

```bash
pnpm dev
```

Visit http://localhost:3000

## Step 3: Customize Your Content

### Priority 1: Update Business Info
Edit `lib/constants.ts` and replace these TODO values:
- `phone`: Your store phone number
- `email`: Your store email address
- Verify hours are correct

### Priority 2: Add Real Images
1. Drop product photos into `public/gallery/`
2. Name them: `01.jpg`, `02.jpg`, etc.
3. Replace `public/logo.svg` with your logo
4. Replace `public/og.jpg.svg` with a 1200×630px OG image
5. Update `components/GalleryGrid.tsx` to use `.jpg` instead of `.jpg.svg`

### Priority 3: Configure Services
1. Get Google Maps API key: https://console.cloud.google.com/google/maps-apis
2. Copy `.env.example` to `.env.local`
3. Add your API key to `.env.local`
4. Update `components/MapEmbed.tsx` to use the env variable

## Step 4: Test Everything

- [ ] Home page loads
- [ ] Gallery lightbox works (click images, use arrow keys, press Esc)
- [ ] Contact form submits (check console logs)
- [ ] Mobile menu works
- [ ] All links function
- [ ] Hours display correctly
- [ ] "Open Now" badge shows accurate status

## Step 5: Deploy

### Option A: Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Option B: Other Platforms
See README.md for instructions

## 📋 Files You MUST Update

| File | Action |
|------|--------|
| `lib/constants.ts` | Replace TODO values |
| `public/gallery/*.jpg` | Add real product photos |
| `public/logo.svg` | Replace with your logo |
| `public/og.jpg` | Replace with OG image |
| `.env.local` | Add API keys |
| `lib/seo.ts` | Update domain before deploy |

## 🎨 Optional Customization

- **Colors**: Edit `app/globals.css` CSS variables
- **Fonts**: Change font in `app/layout.tsx`
- **Content**: Edit page copy in `app/page.tsx`, `app/about/page.tsx`, etc.
- **Instagram**: Update `components/IGFeed.tsx` with real embed
- **Email**: Configure `app/api/contact/route.ts` for email sending

## 🐛 Common Issues

**"Module not found" errors?**
```bash
rm -rf node_modules .next
pnpm install
```

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/` not `public/public/`

**Styles broken?**
```bash
pnpm dev
# Tailwind rebuilds on dev start
```

## 📞 Need Help?

Check the full README.md for detailed documentation.
