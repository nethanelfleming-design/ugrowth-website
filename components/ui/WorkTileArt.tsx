type WorkTileArtProps = {
  mark: string;
  accent: "gold" | "green";
};

const WASH = {
  gold: "radial-gradient(120% 90% at 15% 100%, rgba(198,169,97,.28), transparent 60%), radial-gradient(90% 70% at 100% 0%, rgba(27,59,47,.6), transparent 60%)",
  green: "radial-gradient(120% 90% at 100% 100%, rgba(27,59,47,.7), transparent 60%), radial-gradient(90% 70% at 0% 0%, rgba(198,169,97,.2), transparent 60%)",
};

export function WorkTileArt({ mark, accent }: WorkTileArtProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-2">
      <div className="absolute inset-0" style={{ background: WASH[accent] }} />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(245,242,234,.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="absolute -bottom-[6%] -right-[2%] select-none font-serif text-[clamp(6rem,16vw,11rem)] italic leading-none text-off/[0.07]">
        {mark}
      </div>

      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-off/10 to-transparent" />
      <div className="absolute inset-0 border border-off/[0.06]" />
    </div>
  );
}
