"use client";

import { useState } from "react";
import Image from "next/image";
import { HERO_STATS } from "./constants";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen bg-[#0d0d0d] lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-between px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <div>
          <span className="inline-block rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#c9a84c]">
            Affordable Student Living
          </span>

          <h1 className="mt-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            Shared Hostels in{" "}
            <span className="text-[#c9a84c]">Kalamassery, Kochi</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
            Safe, clean, and affordable shared accommodation for students and working
            professionals. Essential amenities, great location.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center bg-[#c9a84c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#0d0d0d] transition-all duration-300 hover:bg-[#d4b65e]"
            >
              View Gallery
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center border border-[#c9a84c] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c]/10"
            >
              Book a Visit
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1e1e1e] pt-8 lg:mt-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {HERO_STATS.map((stat) => (
              <p
                key={stat}
                className="text-sm font-medium text-white/80 sm:text-center lg:text-left"
              >
                {stat}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center border-t border-[#2a2010] bg-[#1c1408] px-6 py-10 sm:px-10 lg:border-t-0 lg:border-l lg:px-10 lg:py-16">
        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[480px]">
          {imageError ? (
            <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border-2 border-dashed border-[#c9a84c]/50 bg-[#0d0d0d]/50">
              <p className="text-sm font-medium tracking-wide text-[#c9a84c]/70">
                Photo Coming Soon
              </p>
            </div>
          ) : (
            <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/hostel/hero.jpg"
                alt="AK Groups shared hostel in Kalamassery, Kochi"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-300"
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
