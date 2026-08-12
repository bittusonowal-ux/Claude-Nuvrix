"use client";

import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { howItWorksContent } from "@/content/how-it-works";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !lineRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );

        stepRefs.current.forEach((step, i) => {
          if (!step) return;
          gsap.fromTo(
            step,
            { opacity: 0.4 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 60%",
                scrub: 0.5,
              },
              delay: i * 0.05,
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="section bg-[#080911] relative overflow-hidden"
      aria-label="How our consulting delivery framework works"
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{howItWorksContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {howItWorksContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {howItWorksContent.subhead}
          </p>
        </ScrollReveal>

        {/* Desktop: 4-Stage Consulting Pathway */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-0 top-6 h-px w-full origin-left bg-gradient-to-r from-primary via-purple-500 to-cyan-400"
            style={{ transform: "scaleX(0)" }}
          />
          <div className="grid grid-cols-4 gap-6">
            {howItWorksContent.steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="rounded-2xl border border-white/5 bg-[#101326]/60 p-6 backdrop-blur-xl transition-all hover:border-primary/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 font-mono text-sm font-bold text-primary-light shadow-glow-primary">
                      {step.number}
                    </div>
                    <span className="font-mono text-[11px] text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">DELIVERABLE:</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical stepper */}
        <div className="mt-14 space-y-6 lg:hidden">
          {howItWorksContent.steps.map((step, i) => (
            <m.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#101326]/70 p-6 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 font-mono text-xs font-bold text-primary-light border border-primary/40">
                  {step.number}
                </span>
                <span className="font-mono text-[11px] text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  {step.phase}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {step.description}
              </p>
              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[10px] font-mono text-slate-500 uppercase">DELIVERABLE:</p>
                <p className="text-xs font-medium text-slate-300 mt-0.5">
                  {step.deliverable}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
