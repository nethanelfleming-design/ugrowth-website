"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

type VideoCardProps = {
  src: string;
  poster: string;
  label: string;
  duration: string;
  index: string;
  onOpen: () => void;
};

export function VideoCard({ src, poster, label, duration, index, onOpen }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleEnter() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  }

  function handleLeave() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  }

  return (
    <div
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-sm bg-ink-2"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onOpen}
      data-cursor="Play"
    >
      <TiltCard className="h-full w-full" strength={4}>
        <div className="relative h-full w-full">
          <Image
            src={poster}
            alt={label}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-off/30 bg-ink/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play size={18} className="ml-0.5 text-off" fill="currentColor" />
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="font-serif italic text-step-0 text-gold">{index}</span>
            <span className="text-step-n1 tracking-[0.08em] text-off-dim">{duration}</span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
            <span className="block text-step-n1 uppercase tracking-[0.14em] text-off-dim">
              Real Estate · Reel
            </span>
            <h3 className="text-step-1">{label}</h3>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
