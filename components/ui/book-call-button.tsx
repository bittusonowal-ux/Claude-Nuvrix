"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { cn } from "@/lib/utils";

interface BookCallButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg" | "sm";
  className?: string;
  label?: string;
  children?: React.ReactNode;
}

/**
 * The single correct way to render an executive consultation CTA anywhere on the
 * site. Opens CalendlyModal (lazy-loads the iframe only on click)
 * rather than linking directly to Calendly's site.
 */
export function BookCallButton({
  variant = "primary",
  size = "md",
  className,
  label,
  children,
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const content = label || children || "Schedule Executive Consultation";

  return (
    <>
      <Button
        variant={variant}
        size={size === "sm" ? "md" : size}
        className={cn(className)}
        onClick={() => setOpen(true)}
      >
        {content}
      </Button>
      <CalendlyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
