"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { whoWeServeContent } from "@/content/who-we-serve";
import { BookCallButton } from "@/components/ui/book-call-button";

export function WhoWeServe() {
  const [active, setActive] = useState(0);
  const personas = whoWeServeContent.personas;
  const activePersona = personas[active];

  return (
    <section className="section bg-[#07080f] relative overflow-hidden" aria-label="Who we serve" id="industries">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{whoWeServeContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {whoWeServeContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {whoWeServeContent.subhead}
          </p>
        </ScrollReveal>

        {/* Tab Buttons */}
        <div
          role="tablist"
          aria-label="Industry consulting specializations"
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {personas.map((seg, i) => (
            <button
              key={seg.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                active === i
                  ? "bg-primary text-white border-primary shadow-glow-primary scale-105"
                  : "bg-white/[0.03] text-slate-400 border-white/10 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {seg.label}
            </button>
          ))}
        </div>

        {/* Active Industry Card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-[#0f1224]/80 p-8 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <m.div
              key={activePersona.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
                  {activePersona.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">Tailored Architecture</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {activePersona.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {activePersona.description}
              </p>

              <div className="mt-6 space-y-3">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  KEY ARCHITECTURAL OUTCOMES:
                </p>
                {activePersona.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs text-slate-400 hidden sm:block">
                  Ready to deploy this system for your practice?
                </p>
                <BookCallButton size="sm" label="Book Industry Diagnostic" />
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
