import type { CSSProperties } from "react";
import Button from "./Button";
import { LINKS } from "@/lib/site";

const STATS = [
  { value: 10, unit: "", label: "Pilot studio spots", note: "Founder-led onboarding" },
  { value: 5, unit: "sec", label: "To preview a tattoo", note: "On the customer's own skin" },
  { value: 2, unit: "weeks", label: "Between automatic offers", note: "Sent on WhatsApp" },
  { value: 1, unit: "tap", label: "To see who came back", note: "Per offer, per campaign" },
];

// "Built to fill your chairs." -- big number, label, small grey line per card.
export default function Stats() {
  return (
    <section className="section tex-grain divider" aria-labelledby="stats-title" data-reveal>
      <header className="sec-head sec-head-center kpi-head">
        <h2 id="stats-title" className="display h-xl">
          Built to fill your <em>chairs.</em>
        </h2>
        <p className="lead">Everything your studio needs to win back clients and close new ones.</p>
      </header>

      <ul className="kpis" data-stagger>
        {STATS.map((stat) => (
          <li className="kpi" key={stat.label}>
            <p className="kpi-big">
              <span className="kpi-count" style={{ "--target": stat.value } as CSSProperties} aria-hidden="true" />
              <span className="sr-only">{stat.value}</span>
              {stat.unit && <span className="kpi-unit">{stat.unit}</span>}
            </p>
            <p className="kpi-label">{stat.label}</p>
            <p className="kpi-note">{stat.note}</p>
          </li>
        ))}
      </ul>

      <div className="kpi-cta">
        <Button href={LINKS.getStarted}>Get started</Button>
        <p className="fine">
          <span>No credit card required</span>
          <span className="fine-sep" aria-hidden="true" />
          <span>Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
