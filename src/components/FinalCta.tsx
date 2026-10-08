import Button from "./Button";
import Glyph from "./Glyph";
import SplitText from "./SplitText";
import { LINKS } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="get-started" className="cta-banner tex-grain" data-reveal data-letter-host>
      <Glyph className="cta-mark" />
      <div className="cta-inner">
        <h2 className="cta-h">
          <SplitText parts={[{ text: "Fill your chairs. " }, { text: "Without chasing anyone.", em: true }]} />
        </h2>
        <p className="cta-sub">Win back your old clients and close new ones faster.</p>
        <div className="cta-buttons">
          <Button href={LINKS.getStarted}>Get started free</Button>
        </div>
        <p className="fine cta-fine">
          <span>No credit card required</span>
          <span className="fine-sep" aria-hidden="true" />
          <span>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
