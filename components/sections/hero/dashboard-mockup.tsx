"use client";

import { m, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/content/hero";
import { EASE } from "@/lib/motion";

interface DashboardMockupProps {
  reducedMotion: boolean;
}

/**
 * The hero's signature visual: a glass card showing an abstract
 * automation chain (Lead -> AI Qualifies -> Books Call -> Close).
 * Connection lines self-draw via SVG stroke-dashoffset, staggered
 * 200ms apart, nodes pulse gently once their inbound line completes.
 * Subtle mouse-parallax on desktop only. Hidden entirely below 1024px
 * per blueprint mobile spec (rendered by parent conditionally).
 */
export function DashboardMockup({ reducedMotion }: DashboardMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [linesDrawn, setLinesDrawn] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Parallax moves opposite to mouse position, 8-12px range per spec
  const translateX = useTransform(mouseX, [-1, 1], [10, -10]);
  const translateY = useTransform(mouseY, [-1, 1], [10, -10]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  const nodes = heroContent.flowNodes;
  const nodePositions = [
    { x: 20, y: 30 },
    { x: 180, y: 90 },
    { x: 20, y: 150 },
    { x: 180, y: 210 },
  ];

  return (
    <m.div
      ref={containerRef}
      style={reducedMotion ? undefined : { x: translateX, y: translateY }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: EASE.out, delay: 1.2 }}
      onAnimationComplete={() => setLinesDrawn(true)}
      className="glass relative hidden h-[280px] w-full max-w-[420px] overflow-hidden rounded-xl p-6 shadow-lg lg:block"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 260 260"
        fill="none"
      >
        {/* Connection lines: lead->qualify, qualify->book, book->close */}
        {[0, 1, 2].map((i) => {
          const from = nodePositions[i];
          const to = nodePositions[i + 1];
          return (
            <m.line
              key={i}
              x1={from.x + 40}
              y1={from.y + 12}
              x2={to.x}
              y2={to.y + 12}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                linesDrawn
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: reducedMotion ? 0.01 : 1.5,
                ease: EASE.out,
                delay: reducedMotion ? 0 : i * 0.2,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, i) => (
        <m.div
          key={node.id}
          className="glass absolute flex h-10 items-center rounded-md border border-glass-border px-3 text-xs font-medium text-text-primary"
          style={{ left: nodePositions[i].x, top: nodePositions[i].y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.15 }}
        >
          <span
            className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"
            style={
              !reducedMotion
                ? {
                    animation: `glow-pulse 2s ease-in-out infinite`,
                    animationDelay: `${1.8 + i * 0.15}s`,
                  }
                : undefined
            }
          />
          {node.label}
        </m.div>
      ))}
    </m.div>
  );
}
