"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";
import { whyNuvrixContent } from "@/content/why-nuvrix";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-2",
  small: "",
};

/**
 * Why Nuvrix — Section 9 per blueprint. Bento grid where the AI-first
 * cell is visually largest (spans 2x2), reinforcing flagship service
 * through visual hierarchy without explicitly claiming "we're best at
 * this" in copy — per Section-by-Section Visual Storytelling table.
 */
export function WhyNuvrix() {
  return (
    <section className="section" aria-label="Why choose Nuvrix">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {whyNuvrixContent.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            {whyNuvrixContent.headline}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {whyNuvrixContent.subhead}
          </p>
        </ScrollReveal>

        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={100}
          className="mt-16 grid auto-rows-[160px] grid-cols-1 gap-4 md:grid-cols-3"
        >
          {whyNuvrixContent.cells.map((cell) => (
            <m.div
              key={cell.id}
              variants={staggerItem}
              className={cn(
                "glass glass-hover flex flex-col justify-end rounded-lg p-6",
                sizeClasses[cell.size]
              )}
            >
              <h3 className="font-display text-lg font-semibold text-text-primary md:text-xl">
                {cell.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {cell.description}
              </p>
            </m.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
