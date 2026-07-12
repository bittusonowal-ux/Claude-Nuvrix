"use client";

import { m } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { trustBarContent } from "@/content/trust-bar";

/**
 * Trust Bar — Section 3 per blueprint. Purpose: reduce bounce in first
 * 3 seconds with immediate credibility, even without real client logos
 * yet. Uses capability metrics instead (honesty signaling > vague logos
 * of unknown companies, per Trust Psychology table).
 */
export function TrustBar() {
  return (
    <section
      className="border-y border-border bg-surface/30 py-10"
      aria-label="Trust indicators"
    >
      <div className="section-container">
        <StaggerGroup
          staggerMs={80}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {trustBarContent.items.map((item) => (
            <m.div
              key={item.label}
              variants={staggerItem}
              className="text-center sm:text-left"
            >
              <p className="font-display text-2xl font-bold text-text-primary">
                {item.metric}
              </p>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                {item.label}
              </p>
            </m.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
