# Instagram Feed Setup

The site now includes an Instagram feed integration using `react-social-media-embed` on the About page.

## How to Add Instagram Posts

### Step 1: Get Instagram Post URLs

1. Go to your Instagram profile: https://www.instagram.com/sneakerzooapparel/
2. Open any post you want to feature
3. Click the three dots (•••) in the top right corner
4. Select "Copy link"
5. The URL will look like: `https://www.instagram.com/p/ABC123xyz/`

### Step 2: Add URLs to the Component

Open `components/IGFeed.tsx` and add your post URLs to the `FEATURED_POSTS` array:

```typescript
const FEATURED_POSTS: string[] = [
  "https://www.instagram.com/p/YOUR_POST_ID_1/",
  "https://www.instagram.com/p/YOUR_POST_ID_2/",
  "https://www.instagram.com/p/YOUR_POST_ID_3/",
];
```

### Step 3: Preview Your Changes

Run the development server:
```bash
pnpm dev
```

Navigate to `/about` to see your Instagram posts displayed.

## Features

- **No API Key Required**: Uses Instagram's public embed system
- **Automatic Updates**: Posts update their content automatically from Instagram
- **Responsive Design**: Displays as 1 column on mobile, 3 columns on desktop
- **Fallback State**: Shows a "Follow Us" CTA when no posts are configured

## Current Setup

- **Location**: About page (`app/about/page.tsx`)
- **Component**: `components/IGFeed.tsx`
- **Package**: `react-social-media-embed` v2.5.18
- **Display**: Shows up to 3 featured posts

## Tips

- **Choose Your Best Posts**: Pick posts that showcase your products or store
- **Mix Content Types**: Include sneaker showcases, store photos, and customer content
- **Keep It Fresh**: Update the featured posts regularly to keep content current
- **Test on Mobile**: Instagram embeds are responsive but test to ensure good UX

## Troubleshooting

**Posts not loading?**
- Verify the URL format is correct: `https://www.instagram.com/p/POST_ID/`
- Check that the post is public (not private)
- Clear your browser cache and refresh

**Embed looks broken?**
- Instagram's embed script may take a moment to load
- Check browser console for any errors
- Ensure you have a stable internet connection

## Alternative: Show All Pages

You can add the Instagram feed to other pages by importing and using the `<IGFeed />` component:

```typescript
import IGFeed from "@/components/IGFeed";

// In your page component:
<IGFeed />
```
