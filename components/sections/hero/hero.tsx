"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { SoothingWaveCanvas } from "@/components/sections/hero/soothing-wave-canvas";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  const trustMetrics = [
    {
      label: "Velocity",
      value: "14-Day Delivery Sprints",
      accent: "bg-indigo-400",
      glow: "shadow-[0_0_10px_rgba(129,140,248,0.7)]",
    },
    {
      label: "Ownership",
      value: "100% IP Sovereignty",
      accent: "bg-emerald-400",
      glow: "shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    },
    {
      label: "Architecture",
      value: "Deterministic Multi-Agent AI",
      accent: "bg-cyan-400",
      glow: "shadow-[0_0_10px_rgba(34,211,238,0.7)]",
    },
    {
      label: "Performance",
      value: "Sub-Second Web Platforms",
      accent: "bg-purple-400",
      glow: "shadow-[0_0_10px_rgba(192,132,252,0.7)]",
    },
  ];

  return (
    <section
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden pt-32 pb-20 bg-[#070709]"
      aria-label="Hero"
    >
      {/* TCS-Style Soothing Ambient Wave & Light Flow Canvas */}
      <SoothingWaveCanvas reduced={reducedMotion} />

      <div className="section-container relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
        {/* Top Enterprise Badge */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/25 bg-indigo-950/40 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-indigo-200">
            Next-Gen Enterprise Systems &amp; AI Consulting
          </span>
        </m.div>

        {/* Grand Authoritative Headline */}
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 font-display font-extrabold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.08] select-none"
        >
          Engineering Autonomous Intelligence for the{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Modern Enterprise
          </span>
        </m.h1>

        {/* Clear, High-Impact Executive Statement */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          We architect deterministic multi-agent AI ecosystems, sub-second web platforms, and automated intelligence pipelines with enterprise precision and guaranteed velocity.
        </m.p>

        {/* Executive Action CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <BookCallButton
            size="lg"
            label="Schedule Executive Consultation"
            className="w-full sm:w-auto shadow-glow-primary hover:shadow-[0_0_36px_rgba(99,102,241,0.6)] transition-all duration-300 text-sm md:text-base font-semibold"
          />

          <Link
            href="/services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-13 rounded-md font-semibold text-sm md:text-base text-slate-200 border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-500/40 hover:text-white backdrop-blur-md transition-all duration-300"
          >
            <span>Explore Capabilities</span>
            <span className="text-indigo-400 transition-transform duration-200 group-hover:translate-x-1 font-bold">
              →
            </span>
          </Link>
        </m.div>

        {/* Proof / Trust Pillar Indicators */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${metric.accent} ${metric.glow}`} />
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {metric.label}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 whitespace-nowrap">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
