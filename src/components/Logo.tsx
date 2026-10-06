import Image from "next/image";
import logo from "../../public/brand/stenslee-logo.png";

// The official Stenslee lockup -- /public/logo.png, cut out to a transparent
// PNG in /public/brand. The only logo on the site: nav and footer.
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <Image
      src={logo}
      alt="Stenslee"
      className={`logo${size === "lg" ? " logo-lg" : ""}`}
      priority={size === "md"}
    />
  );
}
