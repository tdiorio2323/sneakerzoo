export const BUSINESS: {
  name: string;
  shortName: string;
  tagline: string;
  addressLine: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone?: string;
  email: string;
  website: string;
  instagram: string;
  hours: { day: string; open: string; close: string }[];
  mapQuery: string;
} = {
  name: "Sneaker Zoo & Apparel",
  shortName: "Sneaker Zoo",
  tagline: "Premium Sneakers • Apparel • Accessories",
  addressLine: "2481 Richmond Rd",
  city: "Staten Island",
  region: "NY",
  postalCode: "10306",
  country: "US",
  phone: "(347) 683-8053", // add when confirmed
  email: "TODO",
  website: "https://www.thesneakerzoo.com",
  instagram: "sneakerzooapparel",
  hours: [
    { day: "Mon–Sat", open: "11:00", close: "19:00" },
    { day: "Sun", open: "11:00", close: "17:00" },
  ],
  mapQuery: "2481 Richmond Rd, Staten Island, NY 10306",
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  instagram: `https://instagram.com/${BUSINESS.instagram}`,
} as const;
