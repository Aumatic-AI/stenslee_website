const CHATS = [
  { name: "Rahul Sharma", initials: "RS", seen: "Last visit · 8 months ago" },
  { name: "Priya Nair", initials: "PN", seen: "Last visit · 1 year ago" },
  { name: "Arjun Mehta", initials: "AM", seen: "Last visit · 5 months ago" },
  { name: "Sneha Reddy", initials: "SR", seen: "Last visit · 2 years ago" },
  { name: "Vikram Rao", initials: "VR", seen: "Last visit · 11 months ago" },
  { name: "Ananya Iyer", initials: "AI", seen: "Last visit · 7 months ago" },
  { name: "Karan Singh", initials: "KS", seen: "Last visit · 1 year ago" },
];

// "A phone screen showing a row of unread WhatsApp chats labeled
// 'Past clients: 0 messages sent'".
export default function PastClientsPhone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <span className="phone-island" />
          <span>100%</span>
        </div>
        <div className="phone-head">
          <span className="phone-title">Chats</span>
        </div>
        <p className="phone-label">
          Past clients: <b>0</b> messages sent
        </p>
        <ul className="phone-list">
          {CHATS.map((chat) => (
            <li className="phone-row" key={chat.name}>
              <span className="phone-avatar">{chat.initials}</span>
              <span className="phone-meta">
                <span className="phone-name">{chat.name}</span>
                <span className="phone-preview">{chat.seen}</span>
              </span>
              <span className="phone-time">No messages</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
