import Button from "./Button";
import Glyph from "./Glyph";
import SplitText from "./SplitText";
import { LINKS } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="get-started" className="cta-banner tex-grain" data-reveal data-letter-host>
      <Glyph className="cta-mark" />
      <div className="cta-inner">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Built for tattoo studios
        </p>
        <h2 className="cta-h">
          <SplitText parts={[{ text: "Win back old customers. " }, { text: "Close", em: true }, { text: " new ones." }]} />
        </h2>
        <p className="cta-sub">Automatic WhatsApp offers for past clients. Realistic tattoo previews for new ones.</p>
        <div className="cta-buttons">
          <Button href={LINKS.getStarted}>Get started</Button>
          <Button href={LINKS.demo} variant="ghost">
            Watch demo
          </Button>
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
