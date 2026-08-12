"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { problemContent } from "@/content/problem";

export function Problem() {
  return (
    <section className="section bg-[#07080f] relative overflow-hidden" aria-label="The executive bottleneck">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{problemContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {problemContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {problemContent.subhead}
          </p>
        </ScrollReveal>

        <StaggerGroup
          staggerMs={120}
          delayChildrenMs={100}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {problemContent.points.map((point) => (
            <m.div
              key={point.title}
              variants={staggerItem}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                  <span className="font-display text-3xl font-extrabold text-red-400">
                    {point.metric}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-red-950/30 px-2.5 py-1 rounded-full border border-red-500/20">
                    {point.metricLabel}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white group-hover:text-primary-light transition-colors">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </div>
            </m.div>
          ))}
        </StaggerGroup>

        {/* The Nuvrix Paradigm Callout */}
        <ScrollReveal className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-6 md:p-8 text-center backdrop-blur-xl max-w-3xl mx-auto shadow-glow-primary">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-mono font-bold text-primary-light mb-3">
            {problemContent.callout.badge}
          </span>
          <p className="text-base md:text-lg font-medium text-white">
            &ldquo;{problemContent.callout.text}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
