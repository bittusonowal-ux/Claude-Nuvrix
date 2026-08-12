import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Nuvrix Systems Consulting — Home"
      className={cn(
        "inline-flex items-center gap-3.5 group transition-transform duration-200 hover:scale-[1.02]",
        className
      )}
    >
      {/* Circuit "N" Monogram Icon */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0e1122] border border-primary/30 p-1.5 shadow-[0_0_16px_rgba(99,102,241,0.3)] transition-all group-hover:border-primary group-hover:shadow-[0_0_24px_rgba(99,102,241,0.5)]">
        <svg viewBox="0 0 500 500" fill="none" className="h-full w-full">
          <defs>
            <linearGradient id="logoNuvrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Stylized N Body with dynamic cuts */}
          <path
            d="M 135 60 L 235 60 L 375 360 L 375 110 L 430 110 L 430 440 L 330 440 L 190 140 L 190 390 L 135 390 Z"
            fill="url(#logoNuvrixGrad)"
          />
          {/* Aerodynamic Cuts */}
          <path d="M 190 170 L 310 270 L 190 270 Z" fill="#0e1122" />
          <path d="M 375 330 L 255 230 L 375 230 Z" fill="#0e1122" />

          {/* 3 Circuit Traces & Nodes */}
          <path
            d="M 85 180 L 115 180 L 175 240 L 175 300"
            stroke="#818CF8"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="85" cy="180" r="14" fill="#0e1122" stroke="#818CF8" strokeWidth="10" />

          <path
            d="M 85 270 L 125 270 L 175 320 L 175 360"
            stroke="#818CF8"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="85" cy="270" r="14" fill="#0e1122" stroke="#818CF8" strokeWidth="10" />

          <path
            d="M 115 350 L 145 350 L 165 370 L 165 410"
            stroke="#818CF8"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="115" cy="350" r="14" fill="#0e1122" stroke="#818CF8" strokeWidth="10" />

          <circle cx="175" cy="300" r="10" fill="#818CF8" />
          <circle cx="175" cy="360" r="10" fill="#818CF8" />
          <circle cx="165" cy="410" r="10" fill="#818CF8" />
        </svg>
      </div>

      {/* Futuristic Wordmark: NUVRI (White) + X (Purple Accent) matching Image 3 */}
      {showWordmark && (
        <div className="flex items-center tracking-[0.18em] font-extrabold text-xl select-none">
          <span className="text-white font-mono uppercase tracking-[0.22em]">
            NUVRI
          </span>
          <span className="text-primary-light font-mono font-black text-2xl ml-0.5 transform -skew-x-6">
            X
          </span>
        </div>
      )}
    </Link>
  );
}
