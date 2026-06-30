"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith("/hostels")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          AK Groups
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/daily-rentals" className="hover:text-primary transition-colors">
            Daily Rentals
          </Link>
          <Link href="/airbnb" className="hover:text-primary transition-colors">
            Airbnb
          </Link>
          <Link href="/hostels" className="hover:text-primary transition-colors">
            Hostels
          </Link>
          <Link href="/properties" className="hover:text-primary transition-colors">
            Properties
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}