"use client";

import { m } from "framer-motion";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { pricingContent } from "@/content/pricing";
import { fadeOnly } from "@/lib/motion";

/**
 * Pricing Preview — Section 11 per blueprint. Deliberately the
 * "quietest" section on the page: fade-only reveal, NO translateY,
 * calmer stagger. Per Trust Psychology table: reduced motion at
 * financial-decision moments lowers perceived risk/pressure.
 */
export function Pricing() {
  return (
    <section className="section" aria-label="Pricing">
      <div className="section-container">
        <ScrollReveal variant="fadeOnly" className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            INVESTMENT
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text-primary">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Every project is scoped to your needs — these are starting
            points, not final quotes.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricingContent.map((tier, i) => (
            <m.div
              key={tier.name}
              variants={fadeOnly}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex flex-col rounded-lg p-8",
                tier.featured
                  ? "glass border-2 border-primary shadow-glow-subtle"
                  : "glass border border-border"
              )}
            >
              {tier.featured && (
                <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {tier.description}
              </p>
              <p className="mt-6 font-display text-3xl font-bold text-text-primary">
                {tier.startingPrice}
                {tier.startingPrice !== "Custom" && (
                  <span className="text-sm font-normal text-text-secondary">
                    {" "}
                    starting
                  </span>
                )}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <BookCallButton
                variant={tier.featured ? "primary" : "secondary"}
                size="md"
                className="mt-8 w-full"
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
