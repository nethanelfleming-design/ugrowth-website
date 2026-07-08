export function WorkTilePlaceholder() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-2">
      <div
        className="absolute inset-0 animate-shimmer opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, transparent 30%, var(--off) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-deep/30 via-transparent to-transparent" />
      <div className="absolute inset-0 border border-off/[0.06]" />
    </div>
  );
}
