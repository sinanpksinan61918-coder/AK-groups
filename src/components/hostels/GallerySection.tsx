"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES, VISIBLE_GALLERY_COUNT } from "./constants";

function GalleryCell({
  src,
  label,
  priority,
  onClick,
  overlay,
}: {
  src: string;
  label: string;
  priority?: boolean;
  onClick: () => void;
  overlay?: ReactNode;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-full min-h-[200px] w-full overflow-hidden rounded-xl bg-[#111] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]"
    >
      {!imageError ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#c9a84c]/30 bg-[#111]">
          <span className="text-xs text-white/40">{label}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/45" />

      <span className="absolute bottom-3 left-3 z-10 rounded bg-[#0d0d0d]/80 px-2.5 py-1 text-xs font-medium text-[#c9a84c] backdrop-blur-sm">
        {label}
      </span>

      {overlay}
    </button>
  );
}

export default function GallerySection() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hiddenCount = GALLERY_IMAGES.length - VISIBLE_GALLERY_COUNT;
  const visibleImages = expanded
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.slice(0, VISIBLE_GALLERY_COUNT);
  const sideImages = visibleImages.slice(1);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % GALLERY_IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <section id="gallery" className="bg-[#0d0d0d] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
            Gallery
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Take a Look Inside
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="relative h-full min-h-[320px] lg:min-h-[560px]">
              <GalleryCell
                src={GALLERY_IMAGES[0].src}
                label={GALLERY_IMAGES[0].label}
                priority
                onClick={() => openLightbox(0)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {sideImages.map((image, sideIndex) => {
                const globalIndex = sideIndex + 1;
                const isLastVisible = !expanded && sideIndex === sideImages.length - 1;
                const showMoreOverlay = isLastVisible && hiddenCount > 0;

                return (
                  <div
                    key={image.src}
                    className="relative h-full min-h-[200px]"
                  >
                    <GalleryCell
                      src={image.src}
                      label={image.label}
                      onClick={() => {
                        if (showMoreOverlay) {
                          setExpanded(true);
                        } else {
                          openLightbox(globalIndex);
                        }
                      }}
                      overlay={
                        showMoreOverlay ? (
                          <div className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/60 transition-all duration-300 hover:bg-black/70">
                            <span className="rounded-full border border-[#c9a84c] px-5 py-2 text-sm font-semibold text-[#c9a84c]">
                              +{hiddenCount} more
                            </span>
                          </div>
                        ) : undefined
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox"
          />

          <button
            type="button"
            onClick={goPrev}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full border border-[#c9a84c]/40 bg-[#111]/80 p-2 text-[#c9a84c] transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#1c1408]"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative z-10 h-[70vh] w-full max-w-5xl">
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].label}
              fill
              quality={90}
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 text-sm font-medium text-[#c9a84c]">
              {GALLERY_IMAGES[lightboxIndex].label}
            </p>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full border border-[#c9a84c]/40 bg-[#111]/80 p-2 text-[#c9a84c] transition-all duration-300 hover:border-[#c9a84c] hover:bg-[#1c1408]"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            Esc
          </button>
        </div>
      )}
    </>
  );
}
