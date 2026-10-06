import type { CSSProperties } from "react";

const BARS = [3, 4, 3.5, 6, 5, 7.5, 9, 12];

// "Dashboard showing 'Offer redeemed: 12'" -- the number counts up on reveal.
export default function StatMock() {
  return (
    <div className="stat" aria-hidden="true">
      <div className="stat-top">
        <p className="stat-label">Offer redeemed</p>
        <p className="stat-offer">15% off, October</p>
      </div>
      <p className="stat-num" />
      <div className="stat-bars">
        {BARS.map((value, i) => (
          <span key={i} style={{ "--h": value / 12, "--d": i } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
