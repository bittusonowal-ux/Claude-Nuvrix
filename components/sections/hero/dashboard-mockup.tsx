"use client";

import { m, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/lib/motion";

interface DashboardMockupProps {
  reducedMotion: boolean;
}

const pipelineNodes = [
  { id: "lead", label: "Inbound Lead", sub: "Omnichannel capture", icon: "📥", status: "Received" },
  { id: "agent", label: "Claude 3.5 Agent", sub: "Intent & budget scoring", icon: "🧠", status: "Score: 98/100" },
  { id: "enrich", label: "Data Enrichment", sub: "CRM & LinkedIn sync", icon: "⚡", status: "Enriched" },
  { id: "schedule", label: "Auto-Scheduler", sub: "Instant WhatsApp slot", icon: "📅", status: "Slot Booked" },
  { id: "revenue", label: "Revenue Telemetry", sub: "Deal pipeline active", icon: "📈", status: "₹2.5L Pipeline" },
];

const mockLogs = [
  "⚡ [0.12s] Inbound lead captured via Meta API",
  "🧠 [0.35s] Claude 3.5: Lead qualified (High Intent)",
  "🔄 [0.68s] HubSpot & PostgreSQL auto-synced",
  "📲 [1.10s] WhatsApp VIP calendar invite confirmed",
  "📊 [1.45s] Telemetry: Speed-to-lead under 24 seconds",
];

export function DashboardMockup({ reducedMotion }: DashboardMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useTransform(mouseX, [-1, 1], [8, -8]);
  const translateY = useTransform(mouseY, [-1, 1], [8, -8]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  // Cycle through active pipeline steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineNodes.length);
      setLogIndex((prev) => (prev + 1) % mockLogs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <m.div
      ref={containerRef}
      style={reducedMotion ? undefined : { x: translateX, y: translateY }}
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE.out, delay: 0.4 }}
      className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d101d]/90 p-6 shadow-2xl backdrop-blur-2xl"
      aria-label="Autonomous AI Pipeline Simulation"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[80px]" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
            NUVRIX MULTI-AGENT RUNTIME
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
          <span className="text-emerald-400">● 99.9% SLA</span>
          <span className="text-slate-500">|</span>
          <span>v2.6 Edge</span>
        </div>
      </div>

      {/* Pipeline Visual Flow */}
      <div className="relative my-6 space-y-3">
        {pipelineNodes.map((node, i) => {
          const isActive = activeStep === i;
          const isPassed = activeStep > i;

          return (
            <div
              key={node.id}
              className={`relative flex items-center justify-between rounded-xl border p-3 transition-all duration-300 ${
                isActive
                  ? "border-primary/60 bg-primary/10 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                  : isPassed
                  ? "border-emerald-500/30 bg-emerald-950/10 text-slate-300"
                  : "border-white/5 bg-white/[0.02] text-slate-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-base ${
                    isActive
                      ? "bg-primary text-white shadow-glow-primary"
                      : isPassed
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {node.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">{node.label}</span>
                    {isActive && (
                      <span className="rounded bg-primary/30 px-1.5 py-0.5 text-[9px] font-bold text-primary-light">
                        PROCESSING
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{node.sub}</p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`font-mono text-xs font-medium ${
                    isActive
                      ? "text-cyan-300"
                      : isPassed
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  {node.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulated Live Terminal Execution Stream */}
      <div className="rounded-xl border border-white/10 bg-black/60 p-3 font-mono text-[11px] text-slate-300">
        <div className="mb-1.5 flex items-center justify-between text-[10px] text-slate-500">
          <span>EVENT STREAM TELEMETRY</span>
          <span className="animate-pulse text-primary-light">LIVE BUFFER</span>
        </div>
        <p className="text-cyan-300 transition-all duration-300">
          ❯ {mockLogs[logIndex]}
        </p>
      </div>
    </m.div>
  );
}
