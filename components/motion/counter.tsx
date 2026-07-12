"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CounterProps {
  /** The full target string, e.g. "68%" or "3.2x" — numeric part is extracted and animated */
  value: string;
  className?: string;
}

/**
 * Extracts the leading numeric portion of a metric string and animates
 * it counting up on scroll-into-view (1.2s per Motion Spec table),
 * preserving any suffix (%, x, +) as static text.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : "0");

  const match = value.match(/^([\d.]+)(.*)$/);
  const numericTarget = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? 1 : 0;

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const controls = animate(0, numericTarget, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, numericTarget, decimals, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
