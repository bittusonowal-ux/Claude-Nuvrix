import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  expandOnHover = true,
}: {
  className?: string;
  expandOnHover?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Nuvrix — Home"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-all duration-300",
        className
      )}
    >
      {/* Exact Master Vector Circuit "N" Monogram */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/nuvrix-symbol.svg"
          alt="Nuvrix"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Exact Master Vector "NUVRIX" Wordmark (Reveals smoothly on hover when expandOnHover is true) */}
      <div
        className={cn(
          "relative h-6 sm:h-7 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          expandOnHover
            ? "max-w-0 opacity-0 -translate-x-2 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:translate-x-0 w-28 sm:w-32"
            : "max-w-[140px] opacity-100 translate-x-0 w-28 sm:w-32"
        )}
      >
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
