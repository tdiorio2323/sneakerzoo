"use client";
import { InstagramEmbed } from "react-social-media-embed";
import { BUSINESS } from "@/lib/constants";

/**
 * Featured Instagram Posts
 *
 * Add up to 3 Instagram post URLs to display in the feed.
 *
 * How to get post URLs:
 * 1. Visit https://www.instagram.com/sneakerzooapparel/
 * 2. Open any post you want to feature
 * 3. Click "..." (three dots) → "Copy link"
 * 4. Paste the URL below
 *
 * Example: "https://www.instagram.com/p/ABC123xyz/"
 *
 * See INSTAGRAM_SETUP.md for detailed instructions.
 */
const FEATURED_POSTS: string[] = [
  // Add your Instagram post URLs here:
  // "https://www.instagram.com/p/YOUR_POST_ID/",
];

export default function IGFeed({ handle = BUSINESS.instagram }: { handle?: string }) {
  const profileUrl = `https://instagram.com/${handle ?? ""}`;

  return (
    <div className="card-surface p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold">@{handle}</p>
        <a className="btn-ghost" href={profileUrl} target="_blank" rel="noreferrer">
          Follow Us
        </a>
      </div>

      {FEATURED_POSTS.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURED_POSTS.slice(0, 3).map((url) => (
            <div key={url} className="w-full">
              <InstagramEmbed
                url={url}
                width="100%"
              />
            </div>
          ))}
        </div>
      ) : (
        // Fallback when no posts are configured
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Check out our latest drops and exclusive releases
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View on Instagram
          </a>
        </div>
      )}
    </div>
  );
}