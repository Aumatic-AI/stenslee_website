import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { base: string; href: string };

// On the home page a hash link stays a plain anchor (Lenis smooth-scrolls it); from other pages it routes back without a reload.
export default function SectionLink({ base, href, ...props }: SectionLinkProps) {
  if (!base) return <a href={href} {...props} />;
  return <Link href={`${base}${href}`} {...props} />;
}
