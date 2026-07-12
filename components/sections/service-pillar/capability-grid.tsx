"use client";

import { m } from "framer-motion";
import { StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";

interface Capability {
  title: string;
  description: string;
}

export function CapabilityGrid({ capabilities }: { capabilities: Capability[] }) {
  return (
    <StaggerGroup
      staggerMs={100}
      className="section-container grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {capabilities.map((cap) => (
        <m.div
          key={cap.title}
          variants={staggerItem}
          className="glass glass-hover rounded-lg p-6"
        >
          <h3 className="font-display text-lg font-semibold text-text-primary">
            {cap.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">{cap.description}</p>
        </m.div>
      ))}
    </StaggerGroup>
  );
}
