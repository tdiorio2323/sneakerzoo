"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryFiles = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
  "/gallery/07.jpg",
];

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (active === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      } else if (e.key === "ArrowLeft") {
        setActive((prev) =>
          prev === null || prev === 0 ? galleryFiles.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActive((prev) =>
          prev === null || prev === galleryFiles.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const handlePrevious = () => {
    setActive((prev) =>
      prev === null || prev === 0 ? galleryFiles.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActive((prev) =>
      prev === null || prev === galleryFiles.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {galleryFiles.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform group-hover:scale-105"
              unoptimized
            />
            <span className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl group-hover:ring-white/30 transition pointer-events-none" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryFiles[active]}
              alt={`Full size image ${active + 1}`}
              fill
              sizes="90vw"
              className="object-contain rounded-2xl"
              priority
              unoptimized
            />
          </div>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-sm">
            {active + 1} / {galleryFiles.length}
          </div>
        </div>
      )}
    </>
  );
}
