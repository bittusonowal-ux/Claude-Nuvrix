"use client";

import { m } from "framer-motion";
import { fadeUp, fadeOnly, staggerContainer, viewportOnce } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Use the calmer fade-only variant (Pricing section per blueprint) */
  variant?: "fadeUp" | "fadeOnly";
  /** Delay in ms before this element's own reveal starts */
  delayMs?: number;
}

/**
 * Wraps a single element/section with the standard scroll-into-view
 * reveal used site-wide. Automatically collapses to instant appearance
 * when prefers-reduced-motion is set.
 */
export function ScrollReveal({
  children,
  className,
  variant = "fadeUp",
  delayMs = 0,
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();
  const base = variant === "fadeOnly" ? fadeOnly : fadeUp;

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: base.hidden,
        visible: {
          ...base.visible,
          transition: { ...base.visible.transition, delay: delayMs / 1000 },
        },
      }}
    >
      {children}
    </m.div>
  );
}

/**
 * Wraps a list of children, staggering their individual reveal.
 * Children should each be wrapped in a motion element using the
 * `staggerItem` variant below (or ScrollReveal's fadeUp shape).
 */
export function StaggerGroup({
  children,
  className,
  staggerMs = 100,
  delayChildrenMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
  delayChildrenMs?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(staggerMs, delayChildrenMs)}
    >
      {children}
    </m.div>
  );
}

/** Individual item variant for use inside a StaggerGroup */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
