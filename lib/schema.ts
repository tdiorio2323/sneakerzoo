import { BUSINESS } from "./constants";

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ShoeStore",
  name: BUSINESS.name,
  description: BUSINESS.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.addressLine,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: BUSINESS.website,
  sameAs: [`https://instagram.com/${BUSINESS.instagram}`],
  openingHoursSpecification: BUSINESS.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
  priceRange: "$$",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.5755529",
    longitude: "-74.1210826",
  },
});
