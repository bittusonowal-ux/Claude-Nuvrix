import { cn } from "@/lib/utils";

/**
 * 4-layer hero background per blueprint spec:
 * 1. Base solid (#09090B, handled by body bg)
 * 2. Aurora mesh — violet+cyan blobs, blurred, slow CSS drift
 * 3. Noise texture — subtle film-grain, prevents gradient banding
 * 4. Grid lines — faint, signals "structured/technical" subconsciously
 *
 * Deliberately CSS-only, not Three.js — renders immediately with zero
 * JS dependency, so hero is visually complete before any script runs.
 * Reduced to a static gradient below 768px via the `reduced` prop.
 */
export function AuroraBackground({ reduced = false }: { reduced?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 2: Aurora blobs */}
      <div
        className={cn(
          "absolute -left-[10%] top-[-10%] h-[60%] w-[60%] rounded-full bg-gradient-start/25 blur-[120px]",
          !reduced && "animate-aurora-drift"
        )}
      />
      <div
        className={cn(
          "absolute right-[-10%] top-[10%] h-[55%] w-[55%] rounded-full bg-gradient-end/20 blur-[120px]",
          !reduced && "animate-aurora-drift"
        )}
        style={{ animationDelay: "-7s" }}
      />
      <div
        className={cn(
          "absolute bottom-[-15%] left-[20%] h-[50%] w-[50%] rounded-full bg-primary/15 blur-[120px]",
          !reduced && "animate-aurora-drift"
        )}
        style={{ animationDelay: "-14s" }}
      />

      {/* Layer 3: Noise texture */}
      <div className="noise-overlay" />

      {/* Layer 4: Faint grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
