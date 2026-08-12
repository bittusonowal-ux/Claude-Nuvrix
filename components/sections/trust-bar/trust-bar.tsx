"use client";

import { m } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { trustBarContent } from "@/content/trust-bar";

export function TrustBar() {
  return (
    <section
      className="border-y border-white/5 bg-[#0b0d18]/60 py-12 relative overflow-hidden backdrop-blur-md"
      aria-label="Executive Trust & Technology Ecosystem"
    >
      <div className="section-container">
        {/* Capability Metrics Grid */}
        <StaggerGroup
          staggerMs={80}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 pb-10 border-b border-white/5"
        >
          {trustBarContent.metrics.map((item) => (
            <m.div
              key={item.label}
              variants={staggerItem}
              className="text-left group"
            >
              <p className="font-display text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {item.sub}
              </p>
            </m.div>
          ))}
        </StaggerGroup>

        {/* Strategic Technology Alliances Marquee */}
        <div className="pt-8">
          <p className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-6">
            {trustBarContent.eyebrow}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustBarContent.ecosystem.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-primary/40 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
