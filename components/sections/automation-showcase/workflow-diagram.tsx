"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { workflowShowcaseContent } from "@/content/workflow-showcase";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Node positions on a normalized 0-100 grid, encoding the branching
 * flow described in the blueprint: Inquiry -> AI Qualifies -> branches
 * into Hot/Nurture -> converges into Confirmation/Follow-up results.
 */
const nodeLayout: Record<string, { x: number; y: number }> = {
  inquiry: { x: 0, y: 50 },
  "ai-qualify": { x: 22, y: 50 },
  hot: { x: 46, y: 20 },
  nurture: { x: 46, y: 80 },
  book: { x: 70, y: 20 },
  whatsapp: { x: 70, y: 80 },
  confirm: { x: 94, y: 20 },
  followup: { x: 94, y: 80 },
};

const edges: [string, string][] = [
  ["inquiry", "ai-qualify"],
  ["ai-qualify", "hot"],
  ["ai-qualify", "nurture"],
  ["hot", "book"],
  ["nurture", "whatsapp"],
  ["book", "confirm"],
  ["whatsapp", "followup"],
];

export function WorkflowDiagram() {
  const reducedMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Determine which nodes are "connected" to the hovered node for the
  // hover-highlight enhancement (desktop only, mouse-driven).
  function isConnected(nodeId: string): boolean {
    if (!hoveredNode) return true;
    if (nodeId === hoveredNode) return true;
    return edges.some(
      ([from, to]) =>
        (from === hoveredNode && to === nodeId) ||
        (to === hoveredNode && from === nodeId)
    );
  }

  return (
    <div className="relative">
      {/* Desktop: full horizontal branching flow */}
      <div className="relative hidden aspect-[2/1] w-full lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {edges.map(([from, to], i) => {
            const a = nodeLayout[from];
            const b = nodeLayout[to];
            const dimmed =
              hoveredNode && !(isConnected(from) && isConnected(to));
            return (
              <m.line
                key={`${from}-${to}`}
                x1={a.x + 8}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#workflowGradient)"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  delay: reducedMotion ? 0 : i * 0.15,
                  ease: "easeOut",
                }}
                animate={{ opacity: dimmed ? 0.15 : 0.8 }}
              />
            );
          })}
          <defs>
            <linearGradient id="workflowGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>

        {workflowShowcaseContent.flow.map((node, i) => (
          <m.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.08 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            animate={{ opacity: isConnected(node.id) ? 1 : 0.4 }}
            className="glass absolute flex w-[150px] -translate-x-0 -translate-y-1/2 flex-col rounded-md border border-glass-border px-3 py-2 transition-shadow"
            style={{
              left: `${nodeLayout[node.id].x}%`,
              top: `${nodeLayout[node.id].y}%`,
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {node.sublabel}
            </span>
            <span className="text-xs font-medium text-text-primary">
              {node.label}
            </span>
          </m.div>
        ))}
      </div>

      {/* Mobile/tablet: vertical flow, scroll-triggered per node */}
      <div className="flex flex-col gap-3 lg:hidden">
        {workflowShowcaseContent.flow.map((node, i) => (
          <m.div
            key={node.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.06 }}
            className="glass flex flex-col rounded-md border border-glass-border px-4 py-3"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {node.sublabel}
            </span>
            <span className="text-sm font-medium text-text-primary">
              {node.label}
            </span>
          </m.div>
        ))}
      </div>

      {/* Screen-reader-only text alternative — the node diagram itself
          isn't meaningfully conveyable via alt-text, per accessibility spec */}
      <p className="sr-only">
        Automation flow: A new inquiry form submission triggers an AI step
        that reads and qualifies the lead. Qualified leads branch into two
        paths: hot leads automatically get a Calendly slot booked and
        receive a confirmation; nurture leads are added to a WhatsApp
        follow-up sequence and have a follow-up scheduled automatically.
      </p>
    </div>
  );
}
