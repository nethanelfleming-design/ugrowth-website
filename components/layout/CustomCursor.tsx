"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Capability detection can only run client-side; state starts false on
    // both server and client to avoid a hydration mismatch, then flips here.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine && !reduce);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    }

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function onEnter(e: Event) {
      const el = e.currentTarget as HTMLElement;
      setHover(true);
      setLabel(el.getAttribute("data-cursor") || "");
    }
    function onLeave() {
      setHover(false);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] grid place-items-center rounded-full border border-off/70 mix-blend-difference transition-[width,height,background-color,border-color] duration-300 ease-premium ${
          hover ? "h-[76px] w-[76px] border-transparent bg-gold/10" : "h-[38px] w-[38px]"
        }`}
      >
        <span
          className={`font-sans text-[10px] uppercase tracking-[0.12em] text-off transition-opacity duration-200 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[5px] w-[5px] rounded-full bg-off mix-blend-difference"
      />
    </>
  );
}
