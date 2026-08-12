"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { workflowShowcaseContent } from "@/content/workflow-showcase";
import { BookCallButton } from "@/components/ui/book-call-button";

export function WorkflowShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [selectedStep, setSelectedStep] = useState<number | null>(0);

  const activeUseCase = workflowShowcaseContent.useCases[selectedIndustry];

  return (
    <section
      className="section bg-[#090b14] border-y border-white/5 relative overflow-hidden"
      aria-label="Interactive Industry Automation Studio"
      id="workflows"
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{workflowShowcaseContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {workflowShowcaseContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {workflowShowcaseContent.subhead}
          </p>
        </ScrollReveal>

        {/* Industry Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {workflowShowcaseContent.useCases.map((useCase, idx) => {
            const isSelected = selectedIndustry === idx;
            return (
              <button
                key={useCase.id}
                onClick={() => {
                  setSelectedIndustry(idx);
                  setSelectedStep(0);
                }}
                className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-glow-primary scale-105"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {useCase.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Studio Board */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0f1224]/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          {/* Header of Active Architecture */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-cyan-950/60 px-3 py-1 font-mono text-[11px] font-bold text-cyan-300 border border-cyan-500/30">
                  {activeUseCase.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Autonomous Multi-Agent Blueprint
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-2">
                {activeUseCase.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                {activeUseCase.description}
              </p>
            </div>

            {/* ROI Metrics Pill */}
            <div className="flex sm:flex-col gap-3 justify-end shrink-0">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-4 py-2.5 text-right">
                <p className="text-[10px] font-mono text-emerald-400 uppercase">PROVEN OUTCOME</p>
                <p className="font-display text-base font-bold text-emerald-300">{activeUseCase.roiStat}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-right">
                <p className="text-[10px] font-mono text-slate-400 uppercase">TIME LEVERAGE</p>
                <p className="font-display text-xs font-bold text-slate-200">{activeUseCase.hoursSaved}</p>
              </div>
            </div>
          </div>

          {/* Interactive Pipeline Step Nodes */}
          <div className="mt-8">
            <p className="text-xs font-mono text-slate-400 uppercase mb-4 tracking-wider">
              CLICK ANY STEP TO INSPECT AUTOMATION PAYLOAD & RUNTIME:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {activeUseCase.steps.map((step, stepIdx) => {
                const isStepActive = selectedStep === stepIdx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setSelectedStep(stepIdx)}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      isStepActive
                        ? "border-primary bg-primary/20 shadow-glow-primary scale-[1.02]"
                        : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-primary-light">
                        STEP 0{stepIdx + 1}
                      </span>
                      {isStepActive && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-white">{step.name}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Detail Inspector Box */}
          <AnimatePresence mode="wait">
            {selectedStep !== null && (
              <m.div
                key={`${selectedIndustry}-${selectedStep}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-6 rounded-xl border border-white/10 bg-black/50 p-5 font-mono text-xs text-slate-300"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2 mb-3">
                  <span className="text-cyan-300 font-bold">
                    INSPECTOR: {activeUseCase.steps[selectedStep].name}
                  </span>
                  <span>RUNTIME STATUS: 200 OK (Latency &lt; 150ms)</span>
                </div>
                <p className="text-sm font-sans text-white">
                  {activeUseCase.steps[selectedStep].detail}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                  <span className="rounded bg-white/10 px-2 py-0.5 text-slate-300">Deterministic Logic</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-slate-300">Encrypted Webhook</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-slate-300">Automatic Failover</span>
                </div>
              </m.div>
            )}
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Need this exact architecture tailored for your custom CRM and workflows?
            </p>
            <BookCallButton size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
