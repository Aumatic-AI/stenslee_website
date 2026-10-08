import Image from "next/image";
import Button from "./Button";
import SplitText from "./SplitText";
import { LINKS } from "@/lib/site";
// TEMPORARY placeholder for local review only: this is tattoostudiopro.com's
// own hero photo (their product name is on the left tablet). Replace it with
// Stenslee's own image before this page goes live. A licensed alternative is
// already in /public/images/hero-studio.jpg.
import heroImage from "../../public/images/image.png";

export default function Hero() {
  return (
    <section id="top" className="hero" data-reveal data-letter-host>
      <div className="hero-media" aria-hidden="true">
        <Image src={heroImage} alt="" priority sizes="100vw" placeholder="blur" />
      </div>

      <div className="hero-inner">
        <h1 className="hero-h1">
          <SplitText
            parts={[
              { text: "Win back 20% of your " },
              { text: "old customers", em: true },
              { text: " & close 2x more new ones." },
            ]}
          />
        </h1>

        <div className="hero-foot">
          <p className="hero-sub">
            Stenslee sends automatic offers to your past clients on WhatsApp and lets your artists show a
            realistic tattoo preview on the customer&apos;s skin in seconds.
          </p>
          <div className="hero-cta">
            <Button href={LINKS.getStarted}>Get started free</Button>
            <Button href={LINKS.demo} variant="ghost">
              Watch demo
            </Button>
          </div>
          <p className="fine">
            <span>No credit card required</span>
            <span className="fine-sep" aria-hidden="true" />
            <span>Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  );
}
