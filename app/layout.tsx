import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionProvider } from "@/components/motion/MotionProvider";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calusa Powersports — Motorcycle Rentals in Southwest Florida",
    template: "%s | Calusa Powersports",
  },
  description:
    "Rent motorcycles, scooters, and trikes in Fort Myers. Cruisers, sport bikes, and adventure machines for exploring Southwest Florida's Gulf Coast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1 pt-[64px]">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
