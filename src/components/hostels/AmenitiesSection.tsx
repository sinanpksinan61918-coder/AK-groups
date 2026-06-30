"use client";

import {
  Wifi,
  ShieldCheck,
  Droplets,
  Wind,
  Car,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { AMENITIES } from "./constants";

const ICON_MAP: Record<(typeof AMENITIES)[number]["icon"], LucideIcon> = {
  Wifi,
  ShieldCheck,
  Droplets,
  Wind,
  Car,
  MapPin,
};

export default function AmenitiesSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
          Facilities
        </span>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          What We Provide
        </h2>
        <p className="mt-3 text-sm text-white/55 sm:text-base">
          Everything included in your monthly rent.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {AMENITIES.map((amenity) => {
            const Icon = ICON_MAP[amenity.icon];

            return (
              <div
                key={amenity.title}
                className="rounded-xl border border-[#1e1e1e] bg-[#111] p-6 transition-all duration-300 hover:border-[#c9a84c]/50 hover:shadow-[0_0_24px_rgba(201,168,76,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1c1408]">
                  <Icon className="h-5 w-5 text-[#c9a84c]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{amenity.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
