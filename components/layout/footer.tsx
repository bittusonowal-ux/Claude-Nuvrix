import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { footerLinks } from "@/content/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#06070b]">
      <div className="section-container grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-xs md:text-sm leading-relaxed text-slate-400">
            Autonomous multi-agent AI workflows, custom Next.js 15 web engines, and search intelligence engineered for modern high-velocity enterprises.
          </p>
        </div>

        <nav aria-label="Practices">
          <h3 className="mb-4 text-xs font-mono font-bold tracking-wider text-white uppercase">
            Consulting Practices
          </h3>
          <ul className="space-y-3">
            {footerLinks.practices.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-400 transition-colors hover:text-primary-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Organization">
          <h3 className="mb-4 text-xs font-mono font-bold tracking-wider text-white uppercase">
            Organization
          </h3>
          <ul className="space-y-3">
            {footerLinks.organization.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-400 transition-colors hover:text-primary-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-xs font-mono font-bold tracking-wider text-white uppercase">
            Executive Inquiries
          </h3>
          <ul className="space-y-3 text-xs text-slate-400">
            <li>
              <a
                href={`mailto:${footerLinks.contact.email}`}
                className="transition-colors hover:text-primary-light font-mono"
              >
                {footerLinks.contact.email}
              </a>
            </li>
            <li className="pt-2 text-slate-400">
              Response SLA: Confidential review within 2 business hours.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="section-container flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>© {year} Nuvrix Systems Consulting. All rights reserved.</p>
          <p className="font-mono text-[11px]">Engineered in India · Serving Global Enterprises</p>
        </div>
      </div>
    </footer>
  );
}
