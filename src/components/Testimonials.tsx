import Image from "next/image";

type Testimonial = { quote: string; name: string; image?: string };

// PLACEHOLDERS -- the brief says the real testimonials will be shared as
// pictures. When they arrive, add `image: "/images/testimonials/<file>"` to
// each entry (the card then shows the picture) and replace the quotes.
const TESTIMONIALS: Testimonial[] = [
  { quote: "We sent one offer to our old client list. Three bookings came back by the next morning.", name: "Studio owner" },
  { quote: "Customers used to ask what it would look like on them. Now they just see it.", name: "Tattoo artist" },
  { quote: "I set the offer up once and forgot about it. It keeps bringing people back.", name: "Studio manager" },
];

// Repeated so the scrolling strip is always wider than the screen; the second
// half exists only to make the loop seamless.
const SET = [...TESTIMONIALS, ...TESTIMONIALS];
const TRACK = [...SET, ...SET];

export default function Testimonials() {
  return (
    <section id="testimonials" className="proof" aria-label="Testimonials">
      <div className="proof-marquee">
        <ul className="proof-track">
          {TRACK.map((t, i) => (
            <li className="tcard" key={i} aria-hidden={i >= TESTIMONIALS.length ? true : undefined}>
              <figure>
                <div className="tcard-media">
                  {t.image ? (
                    <Image src={t.image} alt={`Testimonial from ${t.name}`} fill sizes="300px" />
                  ) : (
                    <>
                      <span className="tcard-mark" aria-hidden="true">
                        &ldquo;
                      </span>
                      <blockquote className="tcard-quote">{t.quote}</blockquote>
                    </>
                  )}
                </div>
                <figcaption className="tcard-cap">
                  <span className="tcard-name">{t.name}</span>
                  <span className="tcard-meta">Sample testimonial</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
