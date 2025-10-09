import { BUSINESS } from "@/lib/constants";

export function MapEmbed() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const q = encodeURIComponent(BUSINESS.mapQuery);
  const src = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}`;

  if (!key) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white/5 flex items-center justify-center">
        <p className="text-white/60 text-center p-4">
          Google Maps API key not configured.
          <br />
          Please add NEXT_PUBLIC_GOOGLE_MAPS_KEY to your .env.local file.
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        aria-label="Google Map of Sneaker Zoo & Apparel location"
        className="absolute inset-0"
      ></iframe>
    </div>
  );
}
