import Image from "next/image";
import { GALLERY_IMAGES, getGalleryImagePath } from "@/lib/constants/gallery";

export default function GalleryPreview() {
  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
      {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
        <a key={img.filename} href="/gallery" className="group relative">
          <Image
            src={getGalleryImagePath(img.filename)}
            alt={img.alt}
            width={400}
            height={400}
            className="aspect-square object-cover rounded-xl"
            unoptimized
          />
          <span className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 transition" />
        </a>
      ))}
    </div>
  );
}