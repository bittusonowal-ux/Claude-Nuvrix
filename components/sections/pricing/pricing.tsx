"use client";

import { m } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CheckIcon } from "@/components/ui/icons";
import { pricingContent } from "@/content/pricing";
import { fadeOnly } from "@/lib/motion";

export function Pricing() {
  return (
    <section className="section bg-[#07080f] relative overflow-hidden" aria-label="Pricing" id="pricing">
      <div className="section-container">
        <ScrollReveal variant="fadeOnly" className="mx-auto max-w-3xl text-center">
          <div className="badge-pill mb-4">
            <span>{pricingContent.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {pricingContent.headline}
          </h2>
          <p className="mt-4 text-base text-slate-400 md:text-lg">
            {pricingContent.subhead}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingContent.tiers.map((tier, i) => (
            <m.div
              key={tier.id}
              variants={fadeOnly}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 backdrop-blur-xl transition-all flex flex-col justify-between shadow-2xl relative ${
                tier.popular
                  ? "border-2 border-primary bg-gradient-to-b from-[#131732] to-[#0d1020] shadow-glow-primary scale-105 z-10"
                  : "border border-white/10 bg-[#0e1122]/70 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-wider ${
                      tier.popular
                        ? "bg-primary text-white"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {tier.subtitle}
                </p>

                <div className="mt-6 border-y border-white/5 py-4">
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-white">
                    {tier.price}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {tier.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400 font-bold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <BookCallButton
                  variant={tier.popular ? "primary" : "secondary"}
                  size="md"
                  label={tier.cta}
                  className="w-full justify-center"
                />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
