"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ParticleField3D } from "@/components/sections/hero/particle-field-3d";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 bg-[#070709]"
      aria-label="Hero"
    >
      {/* 3D Motion Particle Background */}
      <ParticleField3D reduced={reducedMotion} />

      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-12">
        {/* Left Monumental Typography (Accenture Masterpiece Style) */}
        <div className="lg:col-span-7 select-none">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black tracking-tight uppercase leading-[0.92] text-white text-5xl sm:text-7xl md:text-8xl xl:text-[5.75rem]"
          >
            <span className="block">TOGETHER WE</span>
            <span className="block mt-2 sm:mt-3">
              REIN
              <span className="inline-flex items-center text-primary-light font-black tracking-tighter px-0.5 transform -skew-x-6 drop-shadow-[0_0_24px_rgba(99,102,241,0.8)]">
                &gt;
              </span>
              ENT
            </span>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex items-center gap-3 text-xs font-mono tracking-widest text-slate-400 uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI &amp; DIGITAL SYSTEMS CONSULTING · ENTERPRISE SCALE</span>
          </m.div>
        </div>

        {/* Right Accenture-Style Editorial Statement & Consulting Actions */}
        <m.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0d0f1c]/80 p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative"
        >
          {/* Accent Line */}
          <div className="h-1 w-12 bg-primary rounded-full mb-6 shadow-glow-primary" />

          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            Shaping the Autonomous Enterprise
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">
            In an era of accelerating complexity, operational reinvention is the ultimate competitive advantage. Nuvrix architects deterministic multi-agent AI ecosystems, sub-second web platforms, and growth intelligence.
          </p>

          <div className="mt-8 space-y-4">
            <BookCallButton
              size="lg"
              label="Schedule Executive Consultation"
              className="w-full justify-center shadow-glow-primary"
            />

            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors"
              >
                <span>See what we do</span>
                <span className="transition-transform group-hover:translate-x-1 font-bold">
                  &gt;
                </span>
              </Link>

              <Link
                href="/work"
                className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
              >
                Explore Client Impact →
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Guaranteed 14-Day Delivery</span>
            <span className="text-emerald-400">● 100% IP Sovereignty</span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
