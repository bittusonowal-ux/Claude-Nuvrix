"use client";

import { useRef, useState } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max rotation in degrees — kept within blueprint's "subtle to moderate" range */
  maxTilt?: number;
}

/**
 * CSS-based 3D tilt card — per blueprint Section 6 (3D Usage Strategy):
 * "CSS-based 3D tilt on hover (max 6°), NOT true WebGL — cheaper,
 * equally premium-feeling." Disabled entirely on touch devices (no
 * meaningful hover) and under reduced-motion.
 */
export function TiltCard({ children, className, maxTilt = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * maxTilt, y: x * maxTilt });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, y: tilt.x !== 0 || tilt.y !== 0 ? -6 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className={cn(
        "glass glass-hover rounded-lg",
        className
      )}
    >
      {children}
    </m.div>
  );
}
