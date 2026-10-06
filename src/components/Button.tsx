import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  size?: "md" | "lg";
};

export default function Button({ href, children, variant = "gold", size = "lg" }: ButtonProps) {
  const gold = variant === "gold";
  return (
    <a href={href} className={`btn btn-${size} btn-${variant}${gold ? " btn-shine" : ""}`}>
      <span className="btn-label">{children}</span>
      {gold && (
        <span className="btn-circle" aria-hidden="true">
          <ArrowRight />
        </span>
      )}
    </a>
  );
}
