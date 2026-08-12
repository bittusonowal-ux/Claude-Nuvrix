"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { whyNuvrixContent } from "@/content/why-nuvrix";

export function WhyNuvrix() {
  return (
    <section className="section bg-[#07080f] relative overflow-hidden" aria-label="Why choose Nuvrix" id="why-nuvrix">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{whyNuvrixContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {whyNuvrixContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {whyNuvrixContent.subhead}
          </p>
        </ScrollReveal>

        {/* Bento Grid 2.0 */}
        <StaggerGroup
          staggerMs={100}
          delayChildrenMs={100}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {/* Card 1 (Large 2x2): Autonomous Multi-Agent Architecture */}
          <m.div
            variants={staggerItem}
            className="md:col-span-2 rounded-2xl border border-primary/30 bg-gradient-to-br from-[#10142a] via-[#0c0e1c] to-[#070810] p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 h-48 w-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-primary/20 px-3 py-1 font-mono text-[10px] font-bold text-primary-light border border-primary/30">
                  FLAGSHIP ADVANTAGE
                </span>
                <span className="font-mono text-xs text-emerald-400">
                  ● 99.8% Execution Accuracy
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Autonomous Multi-Agent Architecture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 max-w-xl">
                We deploy multi-agent networks that reason, validate, qualify, and execute complex business logic autonomously. Deterministic rules ensure zero hallucinations.
              </p>
            </div>

            {/* Embedded Live Agent Terminal */}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/70 p-4 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 text-[10px] text-slate-400">
                <span className="text-cyan-300">AGENT ORCHESTRATION ENGINE</span>
                <span className="text-emerald-400 animate-pulse">RUNNING</span>
              </div>
              <p className="text-slate-400">$ nuvrix-cluster --evaluate --lead-id=L-9842</p>
              <p className="text-emerald-300 mt-1">✔ [Agent 01 - Triage] Extracted budget: ₹3,50,000 | Intent: Immediate</p>
              <p className="text-cyan-300 mt-1">✔ [Agent 02 - Calendar] Found optimal slot: Thursday 4:00 PM IST</p>
              <p className="text-purple-300 mt-1">✔ [Agent 03 - WhatsApp] Message delivered &amp; confirmed in 18.4s</p>
            </div>
          </m.div>

          {/* Card 2: Sub-Second Inbound Velocity */}
          <m.div
            variants={staggerItem}
            className="rounded-2xl border border-white/10 bg-[#0e1122]/80 p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">⚡</span>
                <span className="rounded-full bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-300 border border-cyan-500/20">
                  &lt; 30s SPEED-TO-LEAD
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Sub-Second Inbound Velocity
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Engage qualified prospects instantly on WhatsApp while interest is at peak. Eliminates lead drop-off.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3 text-[11px] text-emerald-300 flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>4.8x faster conversion than human sales teams</span>
            </div>
          </m.div>

          {/* Card 3: 100/100 Core Web Vitals Next.js 15 */}
          <m.div
            variants={staggerItem}
            className="rounded-2xl border border-white/10 bg-[#0e1122]/80 p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🚀</span>
                <span className="rounded-full bg-primary/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-primary-light border border-primary/30">
                  NEXT.JS 15 SSR
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                100/100 Core Web Vitals
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Zero bloated WordPress code. Ultra-fast edge rendering with sub-100ms response times worldwide.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-xs">
              <span className="text-slate-400">Lighthouse:</span>
              <span className="text-emerald-400 font-bold">100 Performance · 100 SEO</span>
            </div>
          </m.div>

          {/* Card 4: 100% IP & Code Ownership */}
          <m.div
            variants={staggerItem}
            className="rounded-2xl border border-white/10 bg-[#0e1122]/80 p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🛡️</span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-200 border border-white/10">
                  SOVEREIGN IP
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                100% Code &amp; IP Ownership
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Direct GitHub repository handover. You own every workflow and API key. Zero vendor lock-in.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-xs">
              <span className="text-slate-400">Repository:</span>
              <span className="text-primary-light font-bold">Private GitHub Organization</span>
            </div>
          </m.div>

          {/* Card 5: Guaranteed ROI SLA */}
          <m.div
            variants={staggerItem}
            className="rounded-2xl border border-white/10 bg-[#0e1122]/80 p-7 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">📜</span>
                <span className="rounded-full bg-emerald-950/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/20">
                  GUARANTEED SLA
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                14-Day Delivery Guarantee
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Structured consulting sprints with strict milestone deliverables. Fast, reliable, enterprise-grade.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-xs">
              <span className="text-slate-400">Governance:</span>
              <span className="text-emerald-400 font-bold">Partner-Led Milestones</span>
            </div>
          </m.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
