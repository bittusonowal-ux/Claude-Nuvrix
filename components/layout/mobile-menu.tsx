"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { BookCallButton } from "@/components/ui/book-call-button";
import { Logo } from "@/components/layout/logo";
import { navLinks } from "@/content/navigation";
import { EASE } from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: EASE.out }}
          className="fixed inset-0 z-modal flex flex-col bg-[#070709]/98 backdrop-blur-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Logo expandOnHover={false} />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.label} className="border-b border-white/5 pb-3.5">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center text-lg font-medium capitalize text-slate-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-white/10 p-8 pb-10">
            <BookCallButton size="lg" label="Schedule Executive Briefing" className="w-full justify-center" />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
