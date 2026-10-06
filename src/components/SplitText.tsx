import { Fragment, type CSSProperties } from "react";

type Part = { text: string; em?: boolean };

// Splits a headline into per-letter spans for the rise-in reveal. The letter
// spans are hidden from assistive tech; the plain sentence is read instead.
export default function SplitText({ parts }: { parts: Part[] }) {
  let index = 0;

  return (
    <>
      <span className="sr-only">{parts.map((p) => p.text).join("")}</span>
      <span aria-hidden="true">
        {parts.map((part, partIndex) => {
          const words = part.text.split(/(\s+)/).map((chunk, chunkIndex) => {
            if (!chunk) return null;
            if (/^\s+$/.test(chunk)) return " ";
            return (
              <span className="split-word" key={chunkIndex}>
                {Array.from(chunk).map((char, charIndex) => (
                  <span className="split-char" style={{ "--i": index++ } as CSSProperties} key={charIndex}>
                    {char}
                  </span>
                ))}
              </span>
            );
          });
          return part.em ? <em key={partIndex}>{words}</em> : <Fragment key={partIndex}>{words}</Fragment>;
        })}
      </span>
    </>
  );
}
