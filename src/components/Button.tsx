import type { ReactNode } from "react";
import { ArrowRight, Play } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  size?: "md" | "lg";
  icon?: "arrow" | "play";
};

export default function Button({ href, children, variant = "gold", size = "lg", icon = "arrow" }: ButtonProps) {
  const gold = variant === "gold";
  return (
    <a href={href} className={`btn btn-${size} btn-${variant}${gold ? " btn-shine" : ""}`}>
      <span className="btn-label">{children}</span>
      {gold && (
        <span className={`btn-circle${icon === "play" ? " btn-circle-play" : ""}`} aria-hidden="true">
          {icon === "play" ? <Play /> : <ArrowRight />}
        </span>
      )}
    </a>
  );
}
