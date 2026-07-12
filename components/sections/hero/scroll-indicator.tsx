"use client";

import { m } from "framer-motion";

export function ScrollIndicator({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    >
      <m.div
        animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-9 w-6 items-start justify-center rounded-full border border-text-secondary/40 p-1.5"
      >
        <div className="h-1.5 w-1 rounded-full bg-text-secondary/60" />
      </m.div>
    </m.div>
  );
}
