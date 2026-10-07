import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

// 24px line icons for the onboarding steps -- one stroke weight for all four.
const line = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M5.5 3.6v8.8a.6.6 0 0 0 .9.5l6.9-4.4a.6.6 0 0 0 0-1L6.4 3.1a.6.6 0 0 0-.9.5Z" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3.5 5.5 8l4.5 4.5" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6 8 10.5 12.5 6" />
    </svg>
  );
}

// WhatsApp-style double tick ("read").
export function DoubleTick(props: IconProps) {
  return (
    <svg viewBox="0 0 18 11" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M1 6l3.2 3.2L10.5 2.5M7.4 8.6l.6.6 6.5-6.7" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 15V4.5M7.5 9 12 4.5 16.5 9" />
      <path d="M4.5 14.5v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M12 3.75a8.25 8.25 0 0 0-7.2 12.28L3.75 20.25l4.33-1.03A8.25 8.25 0 1 0 12 3.75Z" />
      <path d="M9.4 8.9c.3-.6.7-.6 1-.2l.6 1.3c.1.3 0 .6-.2.8l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.2-.2.5-.3.8-.2l1.3.6c.4.2.4.7-.2 1-1.2.6-2.9.2-4.4-1.3S8.8 10.1 9.4 8.9Z" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.2l1.6-2.2h5.4L16.3 7h2.2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />
      <circle cx="12" cy="12.8" r="3.4" />
    </svg>
  );
}

export function DoorCheckIcon(props: IconProps) {
  return (
    <svg {...line} {...props}>
      <path d="M3.5 20.25h17M6 20.25V4.6a.85.85 0 0 1 .85-.85h6.8a.85.85 0 0 1 .85.85v15.65" />
      <path d="M11.75 12.25v.01" />
      <path d="m15.75 10.25 1.75 1.75 3.25-3.5" />
    </svg>
  );
}
