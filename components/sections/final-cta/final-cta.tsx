"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 lg:py-36 border-t border-white/10 bg-[#07080f]"
      aria-label="Schedule executive consultation"
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
            <span>STRATEGIC ENGAGEMENT</span>
          </div>

          <h2 className="mx-auto max-w-3xl font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Ready to Transition to Autonomous Digital Systems?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-xl leading-relaxed text-slate-300">
            Schedule a confidential 30-minute Systems Diagnostic &amp; Architecture Session. We&apos;ll assess your operational bottlenecks and map an actionable multi-agent implementation blueprint.
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
              <BookCallButton size="lg" label="Schedule Executive Consultation" />
            </m.div>

            <Button asChild variant="secondary" size="lg" className="border-white/10 hover:border-primary/40 bg-white/5">
              <Link href="/work" className="flex items-center gap-2">
                <span>Review Verified Case Studies</span>
                <span>→</span>
              </Link>
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
