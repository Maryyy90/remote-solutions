import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.remotesolutionss.com"),
  title: "Remote Solutions | People. Process. Performance.",
  description:
    "Elite remote teams, streamlined processes, and results-driven performance for growing businesses worldwide.",
  keywords: [
    "remote teams", "virtual assistants", "business growth",
    "remote solutions", "outsourcing", "cold calling", "lead generation",
  ],
  authors: [{ name: "Remote Solutions" }],
  openGraph: {
    title: "Remote Solutions | People. Process. Performance.",
    description:
      "Elite remote teams, streamlined processes, and results-driven performance for growing businesses worldwide.",
    url: "https://www.remotesolutionss.com",
    siteName: "Remote Solutions",
    images: [{ url: "/logo.png", width: 177, height: 160, alt: "Remote Solutions Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Remote Solutions | People. Process. Performance.",
    description: "Elite remote teams for growing businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}