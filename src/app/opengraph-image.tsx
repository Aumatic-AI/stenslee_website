import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0d0d",
          color: "#f5f0e8",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#c9a84c", fontWeight: 700, marginBottom: 24, letterSpacing: 2 }}>
          STENSLEE
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
          Win back 20% of your old customers &amp; close 2x more new ones.
        </div>
      </div>
    ),
    { ...size }
  );
}
