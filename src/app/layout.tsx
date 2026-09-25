import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "3D Coding Academy",
  description: "Learn to code in an interactive 3D universe.",
};

import Navigation from "@/components/Navigation";
import MiniProfile from "@/components/MiniProfile";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-white pt-16">
        <Navigation />
        {children}
        <MiniProfile />
      </body>
    </html>
  );
}
