import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface ServiceFAQ {
  question: string;
  answer: string;
}

export function ServiceFAQSection({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <section className="section-container pb-24">
      <ScrollReveal className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-2xl font-bold tracking-tight text-text-primary">
          Common questions
        </h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-display text-base font-semibold text-text-primary">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
