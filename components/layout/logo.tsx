import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Nuvrix — Home"
      className={cn(
        "inline-flex items-center gap-3 group transition-opacity duration-200 hover:opacity-90",
        className
      )}
    >
      {/* Exact Master Vector Circuit "N" Monogram */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0">
        <Image
          src="/images/nuvrix-symbol.svg"
          alt="Nuvrix Symbol"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Exact Master Vector "NUVRIX" Wordmark (White letters + Electric Purple X) */}
      <div className="relative h-6 sm:h-7 w-28 sm:w-32">
        <Image
          src="/images/nuvrix-wordmark.svg"
          alt="NUVRIX"
          width={130}
          height={28}
          className="h-full w-full object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
