import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AK Groups. All rights reserved. Kalamassery, Kochi, Kerala.
        </p>
      </Container>
    </footer>
  );
}
