import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { footerLinks } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-text-secondary">
            AI automation, websites, and SEO built for coaches, consultants,
            and growing businesses across India.
          </p>
        </div>

        <nav aria-label="Services">
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Services
          </h3>
          <ul className="space-y-3">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Company
          </h3>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            Get in touch
          </h3>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li>
              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="transition-colors hover:text-text-primary"
              >
                {footerLinks.contact.email}
              </a>
            </li>
            <li>
              <a
                href={footerLinks.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="section-container flex flex-col items-center justify-between gap-4 text-xs text-text-secondary sm:flex-row">
          <p>© {year} Nuvrix. All rights reserved.</p>
          <p>Built in India, for businesses going global.</p>
        </div>
      </div>
    </footer>
  );
}
