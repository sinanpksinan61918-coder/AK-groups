import React from "react";
import { clsx } from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
}

export default function Section({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-16 md:py-24",
        {
          "bg-background text-foreground": variant === "default",
          "bg-secondary text-secondary-foreground": variant === "muted",
          "bg-accent/10 text-foreground": variant === "accent",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
