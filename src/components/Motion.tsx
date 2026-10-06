"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type MotionWindow = Window & { __motion?: boolean; __lenis?: Lenis };

// Page-wide motion: smooth scrolling, scroll reveals, the steps' numeral
// fill, and the 3D tilt on the large feature card. Renders nothing.
export default function Motion() {
  useEffect(() => {
    const win = window as MotionWindow;
    win.__motion = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    if (!reduceMotion) {
      const lenis = new Lenis({ autoRaf: true, lerp: 0.11, anchors: { offset: -64 } });
      win.__lenis = lenis;
      cleanups.push(() => {
        lenis.destroy();
        win.__lenis = undefined;
      });
    }

    // Reveal each block once, the first time it enters the viewport.
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          revealIO.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document
      .querySelectorAll("[data-reveal], [data-stagger], [data-play], [data-letter-host]")
      .forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());

    // Steps: a numeral fills in once its row crosses the middle of the screen
    // (along with every step before it, in case a fast scroll skipped one);
    // the row currently in the middle is picked out in gold.
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-step]"));
    const stepIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const reached = steps.indexOf(entry.target as HTMLElement);
          steps.forEach((s, i) => {
            if (i <= reached) s.classList.add("is-active");
            s.classList.toggle("is-current", i === reached);
          });
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((s) => stepIO.observe(s));
    cleanups.push(() => stepIO.disconnect());

    // Gentle 3D tilt that follows the pointer (paused while dragging inside it).
    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        const max = 3;
        let targetX = 0;
        let targetY = 0;
        let x = 0;
        let y = 0;
        let raf = 0;

        const loop = () => {
          x += (targetX - x) * 0.12;
          y += (targetY - y) * 0.12;
          card.style.setProperty("--rx", `${x.toFixed(2)}deg`);
          card.style.setProperty("--ry", `${y.toFixed(2)}deg`);
          raf = Math.abs(targetX - x) > 0.02 || Math.abs(targetY - y) > 0.02 ? requestAnimationFrame(loop) : 0;
        };
        const kick = () => {
          if (!raf) raf = requestAnimationFrame(loop);
        };
        const onMove = (e: PointerEvent) => {
          if (e.buttons) {
            targetX = 0;
            targetY = 0;
          } else {
            const rect = card.getBoundingClientRect();
            targetY = ((e.clientX - rect.left) / rect.width - 0.5) * 2 * max;
            targetX = -((e.clientY - rect.top) / rect.height - 0.5) * 2 * max;
          }
          kick();
        };
        const onLeave = () => {
          targetX = 0;
          targetY = 0;
          kick();
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
          cancelAnimationFrame(raf);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
