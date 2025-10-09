import type { Metadata } from "next";
import { BUSINESS } from "./constants";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.thesneakerzoo.com"),
  title: {
    default: `${BUSINESS.shortName} — Staten Island`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description: `${BUSINESS.tagline} • ${BUSINESS.addressLine}, ${BUSINESS.city}`,
  keywords: [
    "sneakers",
    "streetwear",
    "apparel",
    "accessories",
    "Staten Island",
    "NYC",
    "sneaker boutique",
    "premium footwear",
  ],
  openGraph: {
    title: `${BUSINESS.shortName} — Staten Island`,
    description: BUSINESS.tagline,
    url: "/",
    siteName: BUSINESS.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: BUSINESS.shortName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${BUSINESS.instagram}`,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function getPageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  const desc = (baseMetadata.description as string | null | undefined) ?? undefined;
  return {
    title,
    description: description || desc,
    openGraph: {
      title,
      description: description || desc,
      url: path || "/",
    },
  };
}
