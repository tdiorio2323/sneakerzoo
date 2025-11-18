"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Phone, ChevronRight } from "lucide-react";
import { BUSINESS, SOCIAL_LINKS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hide header and footer with CSS */}
      <style jsx global>{`
        header, footer, .mobile-stick {
          display: none !important;
        }
        main {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>

      <div
        className="min-h-[100svh] md:min-h-[100dvh] w-full flex items-center justify-center p-3 sm:p-4 md:p-6 relative"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "max(env(safe-area-inset-top), 0px)",
          paddingBottom: "max(env(safe-area-inset-bottom), 0px)",
        }}
      >
        <Card className="w-full max-w-[95vw] sm:max-w-md bg-black/10 backdrop-blur-sm border-2 border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.3)] relative z-10 min-h-[72vh] sm:min-h-[60vh]">
          <CardHeader className="text-center space-y-4 sm:space-y-5 p-6 sm:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/Sneaker zoo Logo White.png"
                alt="Sneaker Zoo"
                className="h-24 sm:h-28 md:h-32 w-auto object-contain"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl text-white text-center font-bebas">
              Sneaker Zoo
            </h1>

            {/* Buttons */}
            <div className="flex flex-col gap-2.5 sm:gap-3 w-full px-4 sm:px-8">
              {/* Row 1: Enter Site (Full Width) */}
              <Button
                type="button"
                onClick={() => window.location.href = "/gallery"}
                className="w-full h-12 sm:h-14 text-black font-bold text-xl sm:text-2xl tracking-wider font-bebas bg-white hover:bg-white/90 shadow-[0_8px_30px_rgb(255,255,255,0.4)] border-2 border-white/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                ENTER SITE
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>

              {/* Row 2: Follow Us (Full Width) */}
              <Button
                type="button"
                onClick={() => window.open("https://www.instagram.com/sneakerzooapparel/", "_blank")}
                className="w-full h-12 sm:h-14 text-black font-bold text-xl sm:text-2xl tracking-wider font-bebas bg-white hover:bg-white/90 shadow-[0_8px_30px_rgb(255,255,255,0.4)] border-2 border-white/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                FOLLOW US
              </Button>

              {/* Row 3: Shop In Person (Full Width) */}
              <Button
                type="button"
                onClick={() => window.open("https://share.google/BGdYANudsnHXSzTff", "_blank")}
                className="w-full h-12 sm:h-14 text-black font-bold text-xl sm:text-2xl tracking-wider font-bebas bg-white hover:bg-white/90 shadow-[0_8px_30px_rgb(255,255,255,0.4)] border-2 border-white/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                SHOP IN PERSON
              </Button>

              {/* Row 4: Call Us (Full Width) */}
              <Button
                type="button"
                onClick={() => window.open("tel:3476838053", "_self")}
                className="w-full h-12 sm:h-14 text-black font-bold text-xl sm:text-2xl tracking-wider font-bebas bg-white hover:bg-white/90 shadow-[0_8px_30px_rgb(255,255,255,0.4)] border-2 border-white/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 100%)",
                  boxShadow: "0 8px 30px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                CALL US
              </Button>
            </div>

            {/* Image Box */}
            <div className="w-full px-4 sm:px-8 mt-3 sm:mt-4">
              <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                <img
                  src="/imagebox-1.jpg"
                  alt="Sneaker Zoo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-3 sm:mt-4 text-center space-y-2 sm:space-y-3">
              <div className="text-white text-xs sm:text-sm px-2 font-sans">
                {BUSINESS.addressLine}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
              </div>
              <div className="flex items-center justify-center gap-4 sm:gap-5">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                {BUSINESS.phone && (
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label="Location"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-4 sm:pb-6" />
        </Card>
      </div>
    </>
  );
}
