import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "./content";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Am I Nima? | Ho Games Studio",
  description:
    "Am I Nima puts you in control of Nima's fractured mind. Explore a dark narrative puzzle game from Ho Games Studio.",
  openGraph: {
    title: "Am I Nima? | Ho Games Studio",
    description:
      "Am I Nima puts you in control of Nima's fractured mind.",
    type: "website",
    images: [assetPath("/assets/images/nima-main-menu.png")],
  },
  icons: {
    icon: assetPath("/assets/logos/am-i-nima-logo.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
