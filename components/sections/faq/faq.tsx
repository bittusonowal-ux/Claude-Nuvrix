"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { faqContent } from "@/content/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqContent.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section bg-[#07080f] relative overflow-hidden" aria-label="Frequently asked questions" id="faq">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>EXECUTIVE CLARITY</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Frequently Addressed Inquiries
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            Everything you need to know regarding systems architecture, data privacy, IP ownership, and delivery timelines.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search questions (e.g. security, timeline, ownership)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary focus:outline-none backdrop-blur-md"
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-xs text-slate-400 py-8">
              No matching questions found. Feel free to contact our team directly.
            </p>
          ) : (
            filteredFaqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "border-primary/40 bg-[#0f1224]/90 shadow-lg"
                      : "border-white/5 bg-[#0e1120]/50 hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-sm md:text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <m.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-primary-light text-base font-bold"
                      aria-hidden="true"
                    >
                      +
                    </m.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-xs md:text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-3">
                          {item.answer}
                        </p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
