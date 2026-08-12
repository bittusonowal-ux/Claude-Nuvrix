"use client";

import { m } from "framer-motion";
import { ScrollReveal, StaggerGroup, staggerItem } from "@/components/motion/scroll-reveal";
import { caseStudiesContent } from "@/content/case-studies";
import { BookCallButton } from "@/components/ui/book-call-button";

export function Work() {
  return (
    <section className="section bg-[#080913] relative overflow-hidden" aria-label="Enterprise transformation case studies" id="work">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{caseStudiesContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {caseStudiesContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {caseStudiesContent.subhead}
          </p>
        </ScrollReveal>

        <StaggerGroup
          staggerMs={150}
          delayChildrenMs={100}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {caseStudiesContent.cases.map((study) => (
            <m.article
              key={study.id}
              variants={staggerItem}
              className="rounded-2xl border border-white/10 bg-[#0f1224]/80 p-7 backdrop-blur-xl hover:border-primary/40 transition-all flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <span className="font-mono text-[11px] font-bold text-primary-light uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {study.client}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-primary-light transition-colors">
                  {study.title}
                </h3>

                <div className="mt-5 space-y-3 text-xs leading-relaxed text-slate-300">
                  <p>
                    <strong className="text-red-300 font-semibold uppercase font-mono text-[10px] block mb-1">
                      THE CHALLENGE:
                    </strong>
                    {study.challenge}
                  </p>
                  <p className="pt-2 border-t border-white/5">
                    <strong className="text-cyan-300 font-semibold uppercase font-mono text-[10px] block mb-1">
                      AI ARCHITECTURE:
                    </strong>
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  QUANTIFIED IMPACT:
                </p>
                <div className="grid grid-cols-3 gap-2 text-center bg-black/40 rounded-xl p-2.5 border border-white/5">
                  {study.metrics.map((mItem) => (
                    <div key={mItem.label} className="p-1">
                      <p className="font-display text-sm font-extrabold text-white">
                        {mItem.value}
                      </p>
                      <p className="text-[9px] text-slate-400 font-mono mt-0.5 leading-tight">
                        {mItem.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </m.article>
          ))}
        </StaggerGroup>

        <div className="mt-12 text-center">
          <BookCallButton size="md" label="Discuss Your Custom Architecture" />
        </div>
      </div>
    </section>
  );
}
