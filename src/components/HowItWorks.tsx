import type { ComponentType, SVGProps } from "react";
import { CameraIcon, ChatIcon, DoorCheckIcon, UploadIcon } from "./icons";

type Step = {
  title: string;
  lead: string;
  detail: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    title: "Import",
    lead: "Add your past clients.",
    detail: "Upload your old customer list in one go, and add new customers as they walk in.",
    Icon: UploadIcon,
  },
  {
    title: "Send",
    lead: "Offers go out on WhatsApp automatically.",
    detail: "Pick an offer, set the schedule, and we send it to your clients every two weeks.",
    Icon: ChatIcon,
  },
  {
    title: "Preview",
    lead: "Show the design on their skin in seconds.",
    detail: "When a customer hesitates, your artist takes a photo, uploads the design, and shows the preview in the chair.",
    Icon: CameraIcon,
  },
  {
    title: "Welcome them back",
    lead: "More clients walk through your door.",
    detail: "Track who came back from each offer and see what's working.",
    Icon: DoorCheckIcon,
  },
];

// Brief: four numbered steps in a row on desktop, joined by a thin line,
// stacked on mobile; accent-colour numbers in large type; small line icons.
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section tone-sunken divider" data-reveal>
      <header className="sec-head">
        <h2 className="display h-xl">Up and running in 4 simple steps.</h2>
        <p className="lead">No tech skills needed. Your artists will get it in minutes.</p>
      </header>

      <ol className="steps-row" data-stagger>
        {STEPS.map(({ Icon, ...step }, i) => (
          <li className="step" key={step.title}>
            <div className="step-top">
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              {i < STEPS.length - 1 && <span className="step-rule" aria-hidden="true" />}
            </div>
            <span className="step-icon">
              <Icon />
            </span>
            <h3 className="step-title">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="step-lead">{step.lead}</p>
            <p className="step-text">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
