"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-4xl flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className={`${playfair.className} text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          Your Perfect Space.
          <br />
          <span className="italic text-[#C5A059]">Your Perfect Stay.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg md:text-xl"
        >
          Premium daily rental apartments, Airbnb stays and hostels in Kalamassery,
          Kochi. Experience the intersection of local heritage and silent luxury.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6"
        >
          <Link
            href="/properties"
            className="inline-flex min-w-[220px] items-center justify-center bg-[#C5A059] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#1a1208] transition-colors hover:bg-[#d4b06a] sm:text-sm"
          >
            EXPLORE PROPERTIES
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-w-[220px] items-center justify-center border border-[#C5A059] bg-white/5 px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#C5A059] backdrop-blur-sm transition-colors hover:bg-[#C5A059]/10 sm:text-sm"
          >
            BOOK YOUR STAY
          </Link>
        </motion.div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0.45, 0.9, 0.45],
          y: [0, 6, 0],
        }}
        transition={{
          opacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.35em] text-white/80 uppercase sm:bottom-10 sm:text-xs"
      >
        Scroll
      </motion.span>
    </div>
  );
}
