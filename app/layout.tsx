import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Loader } from "@/components/layout/Loader";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UGrowth — Impossible to Ignore | Creative Growth Partner",
  description:
    "UGrowth is a creative growth partner for brands that refuse to blend in. Strategy, branding, and cinematic production for premium hospitality, nightlife, and lifestyle brands — from Colombo, for the world.",
  openGraph: {
    title: "UGrowth — Impossible to Ignore",
    description: "A creative growth partner for brands that refuse to blend in.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0e0f0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">
          <GrainOverlay />
          <Loader />
          <CustomCursor />
          <SmoothScrollProvider>
            <Header />
            <main id="top">{children}</main>
            <Footer />
            <StickyCta />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
