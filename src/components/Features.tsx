import Button from "./Button";
import PreviewMock from "./mocks/PreviewMock";
import WhatsAppMock from "./mocks/WhatsAppMock";
import CalendarMock from "./mocks/CalendarMock";
import StatMock from "./mocks/StatMock";
import { LINKS } from "@/lib/site";

// Copy is the brief's, feature by feature: name, bold line, detail line.
const WIN_BACK = {
  title: "Win back old customers",
  lead: "Import your past clients. We message them for you.",
  detail: "Upload your list once and send offers on WhatsApp every two weeks. Email is coming soon.",
};
const AUTOPILOT = {
  title: "Follow-ups on autopilot",
  lead: "No more messaging clients one by one.",
  detail: "Set your offer once and it goes out automatically, so you can keep tattooing.",
};
const PREVIEW = {
  title: "Preview before the needle",
  lead: "Show the design on their skin in seconds.",
  detail: "Take a photo of the body part, upload the design, and the customer sees how it looks right in the chair.",
};
const TRACK = {
  title: "Know what works",
  lead: "See who came back from each offer.",
  detail: "Track every campaign so you know which offers bring people through the door.",
};

function CardText({ title, lead, detail }: { title: string; lead: string; detail: string }) {
  return (
    <>
      <h3 className="card-title">{title}</h3>
      <p className="card-lead">{lead}</p>
      <p className="card-text">{detail}</p>
    </>
  );
}

export default function Features() {
  return (
    <section id="features" className="section tone-sunken divider" data-reveal>
      <header className="sec-head">
        <h2 className="display h-xl">
          Everything you need to <em>fill your chairs.</em>
        </h2>
        <p className="lead">Win back old clients, close new ones, and see what&apos;s working.</p>
      </header>

      <div className="bento">
        <article className="card bento-cell" data-play>
          <div className="card-media">
            <WhatsAppMock />
          </div>
          <div className="card-body">
            <CardText {...WIN_BACK} />
          </div>
        </article>

        <article className="card bento-cell" data-play>
          <div className="card-media">
            <CalendarMock />
          </div>
          <div className="card-body">
            <CardText {...AUTOPILOT} />
          </div>
        </article>

        {/* The brief's strongest visual, so it gets the biggest card. */}
        <article className="card bento-hero" data-tilt>
          <div className="card-media">
            <PreviewMock />
          </div>
          <div className="card-body">
            <div>
              <h3 className="card-title">{PREVIEW.title}</h3>
              <p className="card-lead">{PREVIEW.lead}</p>
            </div>
            <p className="card-text">{PREVIEW.detail}</p>
          </div>
        </article>

        <article className="card bento-closer" data-play>
          <div className="card-body">
            <CardText {...TRACK} />
          </div>
          <div className="card-media">
            <StatMock />
          </div>
        </article>
      </div>

      <div className="feat-cta">
        <Button href={LINKS.demo} icon="play">
          Watch demo
        </Button>
      </div>
    </section>
  );
}
