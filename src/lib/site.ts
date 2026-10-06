export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stenslee.app";

// Where the page's buttons lead. Set these env vars to the real signup flow,
// demo video and studio login before launch -- the fallbacks only keep the
// buttons from dead-ending while the page is being reviewed.
export const LINKS = {
  getStarted: process.env.NEXT_PUBLIC_GET_STARTED_URL ?? "#get-started",
  demo: process.env.NEXT_PUBLIC_DEMO_URL ?? "#how-it-works",
  login:
    process.env.NEXT_PUBLIC_LOGIN_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000/studio/login" : "#"),
};
