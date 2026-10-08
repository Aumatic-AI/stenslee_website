import Logo from "./Logo";
import { LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#top" aria-label="Stenslee home">
            <Logo size="lg" />
          </a>
        </div>
        <nav className="footer-nav" aria-label="Product">
          <p className="footer-head">Product</p>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <nav className="footer-nav" aria-label="Account">
          <p className="footer-head">Account</p>
          <ul>
            <li><a href={LINKS.login}>Log in</a></li>
            <li><a href={LINKS.getStarted}>Get started free</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-legal">
        <span>&copy; {new Date().getFullYear()} Stenslee</span>
      </div>
    </footer>
  );
}
