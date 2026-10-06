import Button from "./Button";
import { LINKS } from "@/lib/site";

const STEPS = [
  { title: "Import", body: "Upload your customer list, or add customers as they walk in." },
  { title: "Send", body: "Create an offer and schedule when it goes out." },
  { title: "Show", body: "Use the preview tool with customers sitting in your chair." },
  { title: "Track", body: "See how every campaign performs." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section tex-dots divider" data-reveal>
      <div className="steps-wrap">
        <h2 className="display h-xl">Up and running in 4 simple steps.</h2>
        <p className="lead">No tech skills needed. Your artists will get it in minutes.</p>

        <ol className="steps" data-stagger>
          {STEPS.map((step, i) => (
            <li className="step" key={step.title} data-step>
              <span className="step-num" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3 className="step-title">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}.
                </h3>
                <p className="step-text">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="steps-cta">
          <Button href={LINKS.getStarted}>Get started</Button>
        </div>
      </div>
    </section>
  );
}
