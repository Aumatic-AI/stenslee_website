import { DoubleTick } from "../icons";

// "WhatsApp offer message" -- plays once when its card scrolls into view.
export default function WhatsAppMock() {
  return (
    <div className="wa" aria-hidden="true">
      <div className="wa-head">
        <span className="wa-avatar">YS</span>
        <div>
          <p className="wa-name">Your studio</p>
          <p className="wa-status">Sent automatically</p>
        </div>
      </div>
      <div className="wa-thread">
        <div className="wa-msg wa-out">
          <p>Hi Rahul! It&apos;s been a while since your last session. Here&apos;s 15% off your next tattoo this month.</p>
          <span className="wa-meta">
            11:02
            <DoubleTick className="wa-ticks" />
          </span>
        </div>
        <div className="wa-reply">
          <span className="wa-typing">
            <i />
            <i />
            <i />
          </span>
          <div className="wa-msg wa-in">
            <p>Yes! Can I come in on Saturday?</p>
            <span className="wa-meta">11:09</span>
          </div>
        </div>
      </div>
    </div>
  );
}
