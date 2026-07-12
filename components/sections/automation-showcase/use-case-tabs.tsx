"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { workflowShowcaseContent } from "@/content/workflow-showcase";

export function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const useCases = workflowShowcaseContent.useCases;

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Automation use cases by audience"
        className="flex flex-wrap gap-2"
      >
        {useCases.map((useCase, i) => (
          <button
            key={useCase.persona}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-base",
              active === i
                ? "bg-primary text-white"
                : "glass text-text-secondary hover:text-text-primary"
            )}
          >
            {useCase.persona}
          </button>
        ))}
      </div>

      <div className="relative mt-5 min-h-[60px]">
        <AnimatePresence mode="wait">
          <m.p
            key={active}
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl text-base text-text-secondary"
          >
            {useCases[active].outcome}
          </m.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
