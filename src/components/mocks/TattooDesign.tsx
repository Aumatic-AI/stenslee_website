// A fine-line sun-and-moon design, drawn in code so the preview mock needs no
// stock tattoo photography.
const RAYS = Array.from({ length: 24 }, (_, i) => i * 15);
const PETALS = Array.from({ length: 12 }, (_, i) => i * 30);
const DOTS = Array.from({ length: 48 }, (_, i) => i * 7.5);

export default function TattooDesign({ className }: { className?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle r="84" strokeWidth="0.8" />
        {PETALS.map((a) => (
          <path
            key={`petal-${a}`}
            d="M0 -47 C9 -56 9 -70 0 -80 C-9 -70 -9 -56 0 -47 Z"
            strokeWidth="1.15"
            transform={`rotate(${a})`}
          />
        ))}
        {PETALS.map((a) => (
          <path key={`stem-${a}`} d="M0 -49 L0 -64" strokeWidth="0.75" transform={`rotate(${a + 15})`} />
        ))}
        <circle r="44" strokeWidth="1.3" />
        {RAYS.map((a, i) => (
          <line
            key={`ray-${a}`}
            x1="0"
            y1="-27"
            x2="0"
            y2={i % 2 === 0 ? -40 : -33}
            strokeWidth="1"
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="23.5" strokeWidth="1.3" />
        <circle r="19" strokeWidth="0.6" />
      </g>
      <g fill="currentColor">
        {DOTS.map((a) => (
          <circle key={`dot-${a}`} cy="-92" r={a % 15 === 0 ? 1.5 : 0.85} transform={`rotate(${a})`} />
        ))}
        {PETALS.map((a) => (
          <circle key={`bead-${a}`} cy="-68" r="1.7" transform={`rotate(${a + 15})`} />
        ))}
        <path d="M3.12 -13.65 A14 14 0 1 0 10.68 9.05 A12 12 0 1 1 3.12 -13.65 Z" />
      </g>
    </svg>
  );
}
