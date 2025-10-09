"use client";

import Image from "next/image";
import heroLogo from '@/public/Sneaker zoo Logo White.png';
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  const tel = BUSINESS.phone ? `tel:${BUSINESS.phone.replace(/\D/g, "")}` : undefined;

  return (
    <section className="relative w-full h-[72vh] md:h-[80vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-image.jpg"
        alt="Store hero"
        fill
        priority
        className="object-cover"
        unoptimized
      />

      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />

      {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-8 md:pt-12">
                <Image
                  src={heroLogo}
                  alt='Sneaker Zoo & Apparel'
                  priority
                  className='mx-auto mb-5 md:mb-6 h-20 md:h-24 w-auto object-contain drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]'
                />
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">          Sneaker Zoo &amp; Apparel
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] break-words">
          The Tri-State’s destination for exclusive sneakers and premium streetwear.
        </p>
        <p className="mt-1 text-xs text-white/70">
          {BUSINESS.addressLine}, {BUSINESS.city}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            className="btn-primary"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              BUSINESS.mapQuery
            )}`}
          >
            Get Directions
          </a>
          {tel ? (
            <a className="btn-ghost" href={tel}>
              Call Now
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
