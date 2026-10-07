"use client";

import { useState } from "react";
import { ChevronDown } from "./icons";

const FAQS = [
  {
    q: "Do my customers need to opt in to get WhatsApp messages?",
    a: "Yes. We help you collect consent when you import your list, so your messages stay compliant and your account stays safe.",
  },
  {
    q: "How realistic is the tattoo preview?",
    a: "It shows size and placement on the customer's own skin, so they can decide with confidence. Your artist can resize and move the design before showing it.",
  },
  {
    q: "How long does the preview take?",
    a: "A few seconds, so you can use it right in the chair.",
  },
  {
    q: "Do I need special equipment?",
    a: "No. Any phone or tablet with a camera works.",
  },
  {
    q: "How do I add my old customers?",
    a: "Upload your list in one go (spreadsheet or contacts file). New customers can be added as they walk in.",
  },
  {
    q: "Can I send emails too?",
    a: "Email is coming soon. WhatsApp is available now.",
  },
  {
    q: "Is my customers' data safe?",
    a: "Yes. Customer lists and body photos are stored securely, and you stay in control of your data.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is coming soon. Pilot studios lock in a lower price for life.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, no long-term contracts.",
  },
];

// FAQ rich results for search.
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section tex-dots divider" aria-labelledby="faq-title" data-reveal>
      <div className="faq-wrap">
        <h2 id="faq-title" className="display h-xl">
          Questions? We&apos;ve got answers.
        </h2>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
                <h3 className="faq-q-wrap">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className="faq-chevron" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} className="faq-a" role="region" aria-labelledby={`faq-q-${i}`} inert={!isOpen}>
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
    </section>
  );
}
