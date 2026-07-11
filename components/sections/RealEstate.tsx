"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/ui/VideoCard";
import { VideoLightbox } from "@/components/ui/VideoLightbox";

const FILMS = [
  {
    index: "01",
    label: "Estate Walkthrough",
    duration: "0:30",
    src: "/assets/real-estate/listing-1.mp4",
    poster: "/assets/real-estate/listing-1-poster.jpg",
  },
  {
    index: "02",
    label: "Listing Introduction",
    duration: "0:54",
    src: "/assets/real-estate/listing-2.mp4",
    poster: "/assets/real-estate/listing-2-poster.jpg",
  },
  {
    index: "03",
    label: "Property Reveal",
    duration: "0:37",
    src: "/assets/real-estate/listing-3.mp4",
    poster: "/assets/real-estate/listing-3-poster.jpg",
  },
];

export function RealEstate() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? FILMS[openIndex] : null;

  return (
    <section id="real-estate" className="py-[var(--gap)]">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--pad)]">
        <div className="mb-[clamp(2rem,5vw,4rem)] flex flex-wrap items-baseline justify-between gap-8">
          <div>
            <Reveal as="p" className="text-step-n1 font-semibold uppercase tracking-[0.28em] text-gold">
              Real Estate Marketing
            </Reveal>
            <Reveal as="h2" delay={0.08} className="mt-4 max-w-[18ch] text-step-2">
              Every listing, shot like it&rsquo;s already sold.
            </Reveal>
            <Reveal as="p" delay={0.16} className="mt-6 max-w-[52ch] text-step-0 text-off-dim">
              Cinematic walkthroughs and social-native property films built to help agencies
              attract serious buyers, generate qualified leads, and present every listing like
              it belongs on the cover of a magazine.
            </Reveal>
          </div>
          <Reveal as="span" className="font-serif italic text-step-1 text-gold">
            03 films
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8" stagger={0.12}>
          {FILMS.map((film, i) => (
            <RevealItem key={film.index}>
              <VideoCard
                src={film.src}
                poster={film.poster}
                label={film.label}
                duration={film.duration}
                index={film.index}
                onOpen={() => setOpenIndex(i)}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <VideoLightbox
        src={active?.src ?? null}
        poster={active?.poster}
        title={active?.label}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
