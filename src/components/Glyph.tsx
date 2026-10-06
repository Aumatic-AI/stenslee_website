// The Stenslee mark (left half of the brand icon in /public/favicon.png),
// redrawn as a vector so it stays crisp at any size and can be tinted.
export default function Glyph({ className }: { className?: string }) {
  return (
    <svg viewBox="187 226 273 574" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M322 226 L460 362 L460 712 C460 760 421 800 377 800 C331 800 293 762 293 716 C293 664 360 626 460 620 L187 357 Z" />
    </svg>
  );
}
