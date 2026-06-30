"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGES = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/hero/hero-3.webp",
] as const;

const SLIDE_DURATION_MS = 5500;
const CROSSFADE_DURATION = 1.2;

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      setZoomKey((prev) => prev + 1);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {HERO_IMAGES.map((src, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: CROSSFADE_DURATION, ease: "easeInOut" }}
          >
            <motion.div
              key={isActive ? `zoom-${index}-${zoomKey}` : `idle-${index}`}
              className="relative h-full w-full"
              initial={{ scale: 1 }}
              animate={{ scale: isActive ? 1.08 : 1.08 }}
              transition={
                isActive
                  ? {
                      duration: SLIDE_DURATION_MS / 1000,
                      ease: "linear",
                    }
                  : { duration: 0 }
              }
            >
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/30" />
    </div>
  );
}
