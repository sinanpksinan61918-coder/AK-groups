"use client";

import HeroSection from "@/components/hostels/HeroSection";
import GallerySection from "@/components/hostels/GallerySection";
import AmenitiesSection from "@/components/hostels/AmenitiesSection";
import CtaSection from "@/components/hostels/CtaSection";
import HostelFooter from "@/components/hostels/HostelFooter";

export default function HostelsPage() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <HeroSection />
      <GallerySection />
      <AmenitiesSection />
      <CtaSection />
      <HostelFooter />
    </div>
  );
}
