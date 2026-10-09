export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stenslee.app";

// The studio dashboard the Get started / Log in buttons lead to.
export const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://dashboard.stenslee.com");

export const LINKS = {
  getStarted: process.env.NEXT_PUBLIC_GET_STARTED_URL ?? `${DASHBOARD_URL}/studio/signup`,
  demo: process.env.NEXT_PUBLIC_DEMO_URL ?? "#how-it-works",
  login: process.env.NEXT_PUBLIC_LOGIN_URL ?? `${DASHBOARD_URL}/studio/login`,
};
