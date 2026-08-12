"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { BookCallButton } from "@/components/ui/book-call-button";
import { navLinks } from "@/content/navigation";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollThreshold(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-sticky-nav transition-all duration-base ease-out-expo",
          scrolled
            ? "glass h-16 shadow-2xl border-b border-white/10"
            : "h-20 border-b border-transparent bg-transparent"
        )}
      >
        <div className="section-container flex h-full items-center justify-between">
          <Logo />

          <nav
            className="hidden items-center gap-7 lg:gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors duration-fast hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <BookCallButton size="md" label="Request Consultation" />
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white md:hidden focus-visible:outline-2 focus-visible:outline-primary"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
