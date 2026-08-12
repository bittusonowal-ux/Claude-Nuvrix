"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence, PanInfo } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { testimonialsContent } from "@/content/testimonials";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const list = testimonialsContent.testimonials;
  const total = list.length;

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, reducedMotion, total]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -50) {
      setActive((prev) => (prev + 1) % total);
    } else if (info.offset.x > 50) {
      setActive((prev) => (prev - 1 + total) % total);
    }
  }

  const testimonial = list[active];

  return (
    <section className="section bg-[#080a13] relative overflow-hidden" aria-label="Executive client testimonials" id="testimonials">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{testimonialsContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {testimonialsContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {testimonialsContent.subhead}
          </p>
        </ScrollReveal>

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-[#0f1224]/90 p-8 md:p-10 backdrop-blur-2xl shadow-2xl relative"
            >
              {/* Star Rating & Result Pill */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex text-amber-400 gap-1 text-sm">
                  {"★".repeat(testimonial.rating)}
                </div>
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                  {testimonial.result}
                </span>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-slate-200 font-medium italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {testimonial.role} · <span className="text-primary-light font-semibold">{testimonial.company}</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 hidden sm:block">
                  📍 {testimonial.location}
                </span>
              </div>
            </m.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1} of ${total}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-8 bg-primary shadow-glow-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
