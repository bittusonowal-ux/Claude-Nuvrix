import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Nuvrix — home"
      className={cn(
        "font-display text-xl font-bold tracking-tight text-text-primary",
        "transition-opacity duration-fast hover:opacity-80",
        className
      )}
    >
      Nuvrix
    </Link>
  );
}
