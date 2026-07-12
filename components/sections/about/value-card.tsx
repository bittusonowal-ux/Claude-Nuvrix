"use client";

import { m } from "framer-motion";
import { staggerItem } from "@/components/motion/scroll-reveal";

interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <m.div variants={staggerItem} className="glass rounded-lg p-6 text-center">
      <h3 className="font-display text-base font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
    </m.div>
  );
}
