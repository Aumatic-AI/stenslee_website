import PreviewMock from "./mocks/PreviewMock";
import WhatsAppMock from "./mocks/WhatsAppMock";
import CalendarMock from "./mocks/CalendarMock";
import StatMock from "./mocks/StatMock";

const CELLS = [
  {
    eyebrow: "WhatsApp offers",
    title: "Win back old customers",
    body: "Import your past clients and Stenslee sends them offers on WhatsApp automatically, every two weeks. Email is coming soon.",
    Visual: WhatsAppMock,
  },
  {
    eyebrow: "Autopilot",
    title: "Follow-ups on autopilot",
    body: "Set an offer once. It sends automatically, so your artists stay focused on tattooing.",
    Visual: CalendarMock,
  },
  {
    eyebrow: "Tracking",
    title: "Know what works",
    body: "Track which offers bring customers back and turn into bookings.",
    Visual: StatMock,
  },
];

export default function Features() {
  return (
    <section id="features" className="section tone-sunken divider" data-reveal>
      <div className="feat-head">
        <h2 className="display h-xl">
          Everything you need to <em>fill your chairs.</em>
        </h2>
        <p className="lead">Win back old clients, close new ones, and see what&apos;s working.</p>
      </div>

      <div className="bento">
        {/* The brief's strongest visual, so it gets the full-width card. */}
        <article className="card bento-hero" data-tilt>
          <div className="card-media">
            <PreviewMock />
          </div>
          <div className="card-body">
            <div>
              <p className="card-eyebrow">Design preview</p>
              <h3 className="card-title">Preview before the needle</h3>
            </div>
            <p className="card-text">
              Upload a design and a photo of the body part. Your customer sees a realistic preview right there in
              the chair.
            </p>
          </div>
        </article>

        {CELLS.map(({ Visual, ...cell }) => (
          <article className="card bento-cell" key={cell.title} data-play>
            <div className="card-media">
              <Visual />
            </div>
            <div className="card-body">
              <p className="card-eyebrow">{cell.eyebrow}</p>
              <h3 className="card-title">{cell.title}</h3>
              <p className="card-text">{cell.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
