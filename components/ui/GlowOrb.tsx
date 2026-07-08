type GlowOrbProps = {
  color?: "gold" | "green";
  size?: number;
  className?: string;
  speed?: "slow" | "slower";
};

const COLORS = {
  gold: "rgba(198,169,97,0.35)",
  green: "rgba(27,59,47,0.55)",
};

export function GlowOrb({ color = "gold", size = 420, className = "", speed = "slow" }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${
        speed === "slow" ? "animate-float-slow" : "animate-float-slower"
      } ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${COLORS[color]}, transparent)`,
      }}
    />
  );
}
