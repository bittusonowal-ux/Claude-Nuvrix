import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Nuvrix — home"
      className={cn(
        "inline-flex items-center gap-3",
        "transition-opacity duration-fast hover:opacity-80",
        className
      )}
    >
      <Image
        src="/images/nuvrix-logo.svg"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 rounded-xl object-contain"
      />
      <span className="font-display text-xl font-bold tracking-[0.16em] text-text-primary">
        NUVRIX
      </span>
    </Link>
  );
}
