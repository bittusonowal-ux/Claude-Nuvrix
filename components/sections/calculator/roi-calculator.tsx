"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { BookCallButton } from "@/components/ui/book-call-button";
import { WHATSAPP_URL } from "@/content/navigation";

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(6);
  const [manualHours, setManualHours] = useState(14);
  const [dealValue, setDealValue] = useState(120000); // INR

  // Math models
  const totalWeeklyManualHours = teamSize * manualHours;
  const monthlyHoursReclaimed = Math.round(totalWeeklyManualHours * 4.2 * 0.82); // 82% automation capture
  const hourlyRateINR = 650; // Standard blended knowledge worker rate
  const annualSavingsINR = monthlyHoursReclaimed * hourlyRateINR * 12;
  const estimatedAnnualDealsUnlocked = Math.max(2, Math.round(teamSize * 1.8));
  const estimatedRevenueUpsideINR = estimatedAnnualDealsUnlocked * dealValue;

  const formattedSavings = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(annualSavingsINR);

  const formattedRevenueUpside = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(estimatedRevenueUpsideINR);

  return (
    <section className="section relative overflow-hidden bg-[#080a12] border-t border-white/5" id="roi-calculator" aria-label="ROI & Automation Calculator">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="section-container relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>ECONOMIC IMPACT MODEL</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Calculate Your Practice&apos;s Autonomous ROI
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            See how many high-leverage executive hours your firm reclaims and how much operational payroll you save annually with Nuvrix autonomous agent pipelines.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          {/* Sliders Card */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0f1222]/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-primary">⚙️</span>
              <span>Input Your Operational Metrics</span>
            </h3>

            {/* Slider 1: Team Size */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <label htmlFor="team-size" className="text-sm font-medium text-slate-300">
                  Knowledge Workers / Sales & Admin Staff
                </label>
                <span className="font-mono text-sm font-bold text-primary-light bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                  {teamSize} {teamSize === 1 ? "person" : "people"}
                </span>
              </div>
              <input
                id="team-size"
                type="range"
                min="1"
                max="30"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 solo</span>
                <span>15 team</span>
                <span>30+ enterprise</span>
              </div>
            </div>

            {/* Slider 2: Weekly Repetitive Hours */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <label htmlFor="manual-hours" className="text-sm font-medium text-slate-300">
                  Repetitive Manual Hours / Week (per person)
                </label>
                <span className="font-mono text-sm font-bold text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30">
                  {manualHours} hrs/week
                </span>
              </div>
              <input
                id="manual-hours"
                type="range"
                min="2"
                max="30"
                step="1"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>2 hrs (light)</span>
                <span>15 hrs (typical)</span>
                <span>30 hrs (heavy)</span>
              </div>
            </div>

            {/* Slider 3: Average Client Deal Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="deal-value" className="text-sm font-medium text-slate-300">
                  Average Deal / Client Lifetime Value (LTV)
                </label>
                <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                  ₹{(dealValue / 1000).toFixed(0)}k
                </span>
              </div>
              <input
                id="deal-value"
                type="range"
                min="25000"
                max="600000"
                step="25000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹25,000</span>
                <span>₹3,00,000</span>
                <span>₹6,00,000+</span>
              </div>
            </div>
          </div>

          {/* Results Display Output Card */}
          <div className="lg:col-span-5 rounded-2xl border border-primary/30 bg-gradient-to-b from-[#161a32] to-[#0c0e1a] p-6 md:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-wider text-primary-light uppercase">
                ESTIMATED ANNUAL IMPACT
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                PROVEN BENCHMARK
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-400 font-medium">Monthly Human Hours Reclaimed</p>
                <p className="font-display text-4xl font-extrabold text-white mt-1">
                  +{monthlyHoursReclaimed} <span className="text-lg font-normal text-slate-400">hrs/month</span>
                </p>
                <p className="text-xs text-cyan-300 mt-0.5">
                  ⚡ Equivalent to hiring {(monthlyHoursReclaimed / 160).toFixed(1)} full-time operators
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-400 font-medium">Annual Operational Payroll Avoidance</p>
                <p className="font-display text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 mt-1">
                  {formattedSavings}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Direct cost savings from automated data triage & follow-up</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-400 font-medium">Estimated New Pipeline Unlocked</p>
                <p className="font-display text-2xl font-bold text-white mt-1">
                  {formattedRevenueUpside}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">From sub-60s instant lead response & zero no-show scheduling</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <BookCallButton size="md" className="w-full justify-center" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
