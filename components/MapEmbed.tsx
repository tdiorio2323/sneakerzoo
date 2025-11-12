import { BUSINESS } from "@/lib/constants";

export function MapEmbed() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const q = encodeURIComponent(BUSINESS.mapQuery);

  // Use Google Maps Embed API if key is available, otherwise use standard embed URL
  // Coordinates: 40.5755529,-74.1210826 for 2481 Richmond Rd, Staten Island, NY 10306
  const src = key
    ? `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}&zoom=15`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.4735654359773!2d-74.12326892346336!3d40.57555297134729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24f8a7c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2s2481%20Richmond%20Rd%2C%20Staten%20Island%2C%20NY%2010306!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus`;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        aria-label={`Google Map of ${BUSINESS.name} location at ${BUSINESS.addressLine}, ${BUSINESS.city}`}
        className="absolute inset-0"
        title="Store Location Map"
      ></iframe>
    </div>
  );
}
