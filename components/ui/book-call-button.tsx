"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { cn } from "@/lib/utils";

interface BookCallButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * The single correct way to render a "Book a Call" CTA anywhere on the
 * site. Opens CalendlyModal (lazy-loads the iframe only on click)
 * rather than linking directly to Calendly's site — keeps visitors on
 * Nuvrix, and matches the Performance Strategy's lazy-load requirement.
 */
export function BookCallButton({
  variant = "primary",
  size = "md",
  className,
  children = "Book a Free Strategy Call",
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <CalendlyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
