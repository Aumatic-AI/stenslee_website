import type { CSSProperties } from "react";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const LEADING_BLANKS = 3; // October 2026 starts on a Thursday
const DAYS_IN_MONTH = 31;
// Day of month -> order it lights up in. Two weeks apart, like the brief says.
const OFFER_DAYS: Record<number, number> = { 6: 0, 20: 1 };

// "Campaign calendar with scheduled offers".
export default function CalendarMock() {
  return (
    <div className="cal" aria-hidden="true">
      <div className="cal-head">
        <span className="cal-month">October</span>
        <span className="cal-chip">Every 2 weeks</span>
      </div>
      <div className="cal-grid">
        {WEEKDAYS.map((day, i) => (
          <span className="cal-dow" key={`dow-${i}`}>
            {day}
          </span>
        ))}
        {Array.from({ length: LEADING_BLANKS }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {Array.from({ length: DAYS_IN_MONTH }, (_, i) => {
          const day = i + 1;
          const order = OFFER_DAYS[day];
          const isOffer = order !== undefined;
          return (
            <span
              key={day}
              className={`cal-day${isOffer ? " is-offer" : ""}`}
              style={isOffer ? ({ "--d": order } as CSSProperties) : undefined}
            >
              {day}
            </span>
          );
        })}
      </div>
      <p className="cal-legend">
        <i />
        Offer goes out automatically
      </p>
    </div>
  );
}
