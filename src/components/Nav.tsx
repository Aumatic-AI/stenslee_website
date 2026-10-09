"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import SectionLink from "./SectionLink";
import { ArrowRight } from "./icons";
import { LINKS } from "@/lib/site";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

type LenisLike = { stop(): void; start(): void };

// linkBase "/" points the section links back to the home page from other pages.
export default function Nav({ linkBase = "" }: { linkBase?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <SectionLink base={linkBase} href={linkBase ? "" : "#top"} aria-label="Stenslee home" onClick={close}>
          <Logo />
        </SectionLink>

        <nav className="nav-main" aria-label="Main">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink className="nav-link" base={linkBase} href={link.href}>
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a className="nav-util" href={LINKS.login}>
            Log in
          </a>
          <a className="nav-cta" href={LINKS.getStarted}>
            Start free
            <span className="nav-cta-circle" aria-hidden="true">
              <ArrowRight />
            </span>
          </a>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="nav-drawer" className="nav-drawer" data-open={open} inert={!open} data-lenis-prevent>
        {NAV_LINKS.map((link) => (
          <SectionLink key={link.href} className="nav-drawer-link" base={linkBase} href={link.href} onClick={close}>
            {link.label}
          </SectionLink>
        ))}
        <a className="nav-drawer-login" href={LINKS.login}>
          Log in
        </a>
        <a className="nav-drawer-cta" href={LINKS.getStarted} onClick={close}>
          Get started free
          <ArrowRight />
        </a>
      </div>
    </header>
  );
}
