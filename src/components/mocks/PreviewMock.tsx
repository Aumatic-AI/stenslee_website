"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import TattooDesign from "./TattooDesign";
import { ChevronLeft, ChevronRight } from "../icons";

const clamp = (n: number) => Math.min(96, Math.max(4, n));

// "Preview before the needle" -- a draggable before/after comparison of the
// same skin with and without the design applied.
export default function PreviewMock() {
  const [pos, setPos] = useState(50);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const userMoved = useRef(false);

  // One slow sweep the first time it scrolls into view, to show it can be dragged.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let timer = 0;
    const stops = [50, 84, 20, 58];
    const duration = 3000;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const step = (now: number) => {
            if (userMoved.current) return;
            const t = Math.min(1, (now - start) / duration);
            const seg = t * (stops.length - 1);
            const i = Math.min(stops.length - 2, Math.floor(seg));
            const f = seg - i;
            const eased = f < 0.5 ? 4 * f ** 3 : 1 - (-2 * f + 2) ** 3 / 2;
            setPos(stops[i] + (stops[i + 1] - stops[i]) * eased);
            if (t < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }, 500);
      },
      { threshold: 0.55 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  const moveTo = (clientX: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    userMoved.current = true;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const next =
      e.key === "ArrowLeft" ? pos - 5 : e.key === "ArrowRight" ? pos + 5 : e.key === "Home" ? 4 : e.key === "End" ? 96 : null;
    if (next === null) return;
    e.preventDefault();
    userMoved.current = true;
    setPos(clamp(next));
  };

  return (
    <div className="pv">
      <div className="pv-window">
        <div className="pv-bar">
          <span className="pv-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="pv-title">Design preview</span>
          <span className="pv-status">
            <i aria-hidden="true" />
            Preview ready
          </span>
        </div>

        <div className="pv-body">
          <aside className="pv-side" aria-hidden="true">
            <p className="pv-label">Design</p>
            <div className="pv-thumb pv-thumb-paper">
              <TattooDesign />
            </div>
            <p className="pv-label">Body photo</p>
            <div className="pv-thumb pv-thumb-skin">
              <div className="pv-skin" />
              <span>Forearm</span>
            </div>
          </aside>

          <div
            ref={canvasRef}
            className="pv-canvas"
            style={{ "--pos": `${pos}%` } as CSSProperties}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <div className="pv-skin" />
            <div className="pv-after" aria-hidden="true">
              <div className="pv-skin" />
              <TattooDesign className="pv-ink" />
            </div>
            <span className="pv-tag pv-tag-l">Before</span>
            <span className="pv-tag pv-tag-r">After</span>
            <div
              className="pv-handle"
              role="slider"
              tabIndex={0}
              aria-label="Compare the skin before and after the preview"
              aria-valuemin={4}
              aria-valuemax={96}
              aria-valuenow={Math.round(pos)}
              onKeyDown={onKeyDown}
            >
              <span className="pv-knob" aria-hidden="true">
                <ChevronLeft />
                <ChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
