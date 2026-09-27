import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "elective \u2014 Student course reviews",
  description:
    "Find something worth learning, with a workload you can actually live with.",
  icons: { icon: "/favicon.svg" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
