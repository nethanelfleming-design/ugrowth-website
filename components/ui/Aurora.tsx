import { GlowOrb } from "@/components/ui/GlowOrb";

type AuroraProps = {
  variant?: "ink" | "green" | "gold";
  className?: string;
};

export function Aurora({ variant = "ink", className = "" }: AuroraProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {variant === "ink" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 75% 15%, rgba(27,59,47,.55), transparent 70%), radial-gradient(50% 40% at 15% 90%, rgba(27,59,47,.35), transparent 70%), var(--ink)",
            }}
          />
          <GlowOrb color="gold" size={360} className="right-[8%] top-[10%]" speed="slower" />
        </>
      )}

      {variant === "green" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 45% at 20% 20%, rgba(198,169,97,.14), transparent 70%), radial-gradient(45% 40% at 85% 80%, rgba(198,169,97,.1), transparent 70%)",
            }}
          />
          <GlowOrb color="gold" size={300} className="left-[10%] top-[20%]" speed="slow" />
        </>
      )}

      {variant === "gold" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(198,169,97,.16), transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(27,59,47,.4), transparent 70%)",
            }}
          />
          <GlowOrb color="gold" size={420} className="left-1/2 top-1/3 -translate-x-1/2" speed="slower" />
        </>
      )}
    </div>
  );
}
