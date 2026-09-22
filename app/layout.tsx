import type { Metadata } from "next";
import { Inter, Caveat, Patrick_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Happy Birthday!",
  description: "A special birthday surprise",
};

import CursorLove from "@/components/CursorLove";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${caveat.variable} ${patrickHand.variable} antialiased min-h-screen flex flex-col font-sans bg-cream text-navy overflow-x-hidden`}
      >
        <CursorLove />
        {children}
      </body>
    </html>
  );
}
