"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

// PLACEHOLDER QUOTES -- the brief says the real testimonials (with photos)
// will be shared later. Replace these before the page goes live.
const QUOTES = [
  {
    lead: "We sent one offer to our old client list.",
    hit: "Three bookings came back by the next morning.",
    name: "Studio owner",
  },
  {
    lead: "Customers used to ask what it would look like on them.",
    hit: "Now they just see it.",
    name: "Tattoo artist",
  },
  {
    lead: "I set the offer up once and forgot about it.",
    hit: "It keeps bringing people back.",
    name: "Studio manager",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const swipeStart = useRef<number | null>(null);

  useEffect(() => {
    setAutoplay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = (delta: number) => setActive((i) => (i + delta + QUOTES.length) % QUOTES.length);

  const onPointerDown = (e: PointerEvent) => {
    swipeStart.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
  };

  return (
    <section id="testimonials" className="section tone-sunken divider" aria-roledescription="carousel" aria-label="What studios say">
      <div
        className="pq"
        data-autoplay={autoplay}
        data-paused={paused}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="pq-mark" aria-hidden="true">
          &ldquo;
        </div>

        <div className="pq-stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp} aria-live={paused ? "polite" : "off"}>
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className={`pq-slide${i === active ? " is-active" : ""}`}
              aria-hidden={i !== active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${QUOTES.length}`}
            >
              <blockquote className="pq-quote">
                {q.lead}
                <span className="pq-hit">{q.hit}</span>
              </blockquote>
              <figcaption className="pq-cite">
                <span className="pq-name">{q.name}</span>
                <span className="pq-meta">Sample testimonial</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="pq-controls">
          <button type="button" className="pq-btn" aria-label="Previous testimonial" onClick={() => go(-1)}>
            <ChevronLeft />
          </button>
          <div className="pq-dots">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                type="button"
                className="pq-dot"
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                onAnimationEnd={() => {
                  if (i === active) go(1);
                }}
              />
            ))}
          </div>
          <button type="button" className="pq-btn" aria-label="Next testimonial" onClick={() => go(1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
