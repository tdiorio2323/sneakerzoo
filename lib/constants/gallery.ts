/**
 * Gallery Images Configuration
 * 
 * Single source of truth for all gallery images.
 * To add real images, simply drop them in /public/gallery/
 * and name them sequentially: 01.jpg, 02.jpg, etc.
 */

export interface GalleryImage {
  filename: string;
  alt: string;
  featured?: boolean;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { filename: "01.jpg", alt: "Premium sneakers display at Sneaker Zoo Staten Island" },
  { filename: "02.jpg", alt: "Exclusive streetwear and designer apparel collection" },
  { filename: "03.jpg", alt: "Limited edition Air Jordan and Nike sneaker releases" },
  { filename: "04.jpg", alt: "Designer accessories, bags, and sneaker care essentials" },
  { filename: "05.jpg", alt: "Latest sneaker drops from top brands at Sneaker Zoo" },
  { filename: "06.jpg", alt: "Urban fashion and streetwear styles from Chrome Hearts, Supreme, and more" },
  { filename: "07.jpg", alt: "Featured product showcase - New arrivals and exclusives", featured: true },
];

/**
 * Helper to get full image paths for use in components
 */
export function getGalleryImagePath(filename: string): string {
  return `/gallery/${filename}`;
}

/**
 * Get all gallery image paths as an array of strings
 */
export function getGalleryImages(): string[] {
  return GALLERY_IMAGES.map((img) => getGalleryImagePath(img.filename));
}
