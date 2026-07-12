import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { BookCallButton } from "@/components/ui/book-call-button";
import { CheckIcon } from "@/components/ui/icons";
import { WHATSAPP_URL, footerLinks } from "@/content/navigation";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call or send Nuvrix a message. We respond within 2 hours.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-32">
      <section className="section-container section !pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wider text-primary">
            {contactContent.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary">
            {contactContent.headline}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
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
            <div className="glass rounded-lg p-6">
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Prefer to talk directly?
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <BookCallButton size="lg" className="w-full" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex h-13 w-full items-center justify-center rounded-md border border-border text-base font-semibold text-text-primary transition-all"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="text-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {footerLinks.contact.email}
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h2 className="font-display text-base font-semibold text-text-primary">
                {contactContent.afterBookingTitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {contactContent.afterBookingSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-text-secondary">{step}</span>
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
