import Link from "next/link";
import Logo from "./Logo";
import SectionLink from "./SectionLink";
import { LINKS } from "@/lib/site";

// linkBase "/" points the section links back to the home page from other pages.
export default function Footer({ linkBase = "" }: { linkBase?: string }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <SectionLink base={linkBase} href={linkBase ? "" : "#top"} aria-label="Stenslee home">
            <Logo size="lg" />
          </SectionLink>
        </div>
        <nav className="footer-nav" aria-label="Product">
          <p className="footer-head">Product</p>
          <ul>
            <li><SectionLink base={linkBase} href="#features">Features</SectionLink></li>
            <li><SectionLink base={linkBase} href="#how-it-works">How it works</SectionLink></li>
            <li><SectionLink base={linkBase} href="#faq">FAQ</SectionLink></li>
          </ul>
        </nav>
        <nav className="footer-nav" aria-label="Account">
          <p className="footer-head">Account</p>
          <ul>
            <li><a href={LINKS.login}>Log in</a></li>
            <li><a href={LINKS.getStarted}>Get started free</a></li>
          </ul>
        </nav>
        <nav className="footer-nav" aria-label="Legal">
          <p className="footer-head">Legal</p>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-legal">
        <span>&copy; {new Date().getFullYear()} Stenslee</span>
      </div>
    </footer>
  );
}
