import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { BookCallButton } from "@/components/ui/book-call-button";
import { CheckIcon } from "@/components/ui/icons";
import { footerLinks } from "@/content/navigation";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: "Executive Inquiries & Systems Diagnostic",
  description:
    "Schedule an executive systems consultation or submit a private RFQ. Confidential review within 2 hours.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-32 pb-24">
      <section className="section-container section !pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            {contactContent.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {contactContent.headline}
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            {contactContent.subhead}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Left: form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: alternate paths + expectation-setting */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-7 border border-white/10">
              <h2 className="font-display text-lg font-bold text-white">
                Direct Principal Consultation
              </h2>
              <p className="mt-2 text-xs text-slate-400">
                Reserve an instant 30-minute discovery briefing directly with our systems architecture lead.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <BookCallButton size="lg" label="Schedule Executive Briefing" className="w-full justify-center shadow-glow-primary" />
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="text-center text-xs font-mono text-slate-400 hover:text-primary-light transition-colors pt-2"
                >
                  Direct Email: {footerLinks.contact.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {contactContent.afterBookingTitle}
              </h2>
              <ul className="mt-4 space-y-3.5">
                {contactContent.afterBookingSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span className="text-xs text-slate-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
