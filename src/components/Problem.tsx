import Image from "next/image";
import PastClientsPhone from "./mocks/PastClientsPhone";
import chairImage from "../../public/images/band-studio.jpg";

const CARDS = [
  {
    title: "Old customers go quiet",
    detail: "They loved their tattoo, then drifted to another studio. The studio that messaged first got the booking.",
  },
  {
    title: "Follow-ups never happen",
    detail: "Your customer list is just sitting there. You're tattooing all day, so messaging past clients gets skipped.",
  },
  {
    title: "New customers hesitate",
    detail: "“I'll think about it” almost never becomes a booking. They can't picture the design on their skin, so they walk out.",
  },
];

// Layout from the brief: headline, subtext, visual, three cards, number line,
// and the bridge line as the last line of the section.
export default function Problem() {
  return (
    <section className="section tex-grain divider" aria-labelledby="problem-title" data-reveal>
      <header className="sec-head">
        <h2 id="problem-title" className="display h-lg">
          Your best customers are already in your phone. <em>You&apos;re just not talking to them.</em>
        </h2>
        <p className="lead">Two leaks, three ways you lose bookings every month.</p>
      </header>

      <div className="leak-visual" data-play>
        <Image
          src={chairImage}
          alt="Empty tattoo chairs in a quiet studio"
          fill
          sizes="(max-width: 1400px) 100vw, 1360px"
          placeholder="blur"
        />
        <PastClientsPhone />
      </div>

      <div className="leak-cards" data-stagger>
        {CARDS.map((card, i) => (
          <article className="leak-card" key={card.title}>
            <span className="leak-num" aria-hidden="true">
              0{i + 1}
            </span>
            <h3 className="leak-title">{card.title}</h3>
            <p className="leak-text">{card.detail}</p>
          </article>
        ))}
      </div>

      {/* The brief marks this figure a placeholder: confirm it before launch. */}
      <p className="number-line">
        The average studio has <strong>1000+</strong> past clients it never messages.
      </p>

      <p className="bridge-line">
        Your chairs shouldn&apos;t depend on luck or walk-ins. Stenslee fixes <em>both leaks.</em>
      </p>
    </section>
  );
}
