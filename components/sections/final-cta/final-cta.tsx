"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { WHATSAPP_URL } from "@/content/navigation";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 lg:py-36 border-t border-white/10 bg-[#07080f]"
      aria-label="Book your systems diagnostic call"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.2), rgba(6,182,212,0.08) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative text-center">
        <ScrollReveal>
          <div className="badge-pill mb-6 mx-auto">
            <span>TRANSFORMATION STARTS HERE</span>
          </div>

          <h2 className="mx-auto max-w-3xl font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Ready to Transition to Autonomous Digital Systems?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-xl leading-relaxed text-slate-300">
            Schedule a complimentary 30-minute Systems Diagnostic &amp; Architecture Call. We&apos;ll map your exact automation blueprint with zero obligation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <m.div
              animate={{
                boxShadow: [
                  "0 0 24px rgba(99,102,241,0.35)",
                  "0 0 48px rgba(99,102,241,0.65)",
                  "0 0 24px rgba(99,102,241,0.35)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl"
            >
              <BookCallButton size="lg" label="Schedule Diagnostic Call" />
            </m.div>
            <Button asChild variant="secondary" size="lg" className="border-white/10 hover:border-primary/40">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Chat on WhatsApp</span>
                <span className="text-xs text-emerald-400 font-mono">● Online</span>
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> 100% Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Direct Partner Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Actionable ROI Feasibility Map
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
