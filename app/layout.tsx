import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "../redux/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import { Manrope, DM_Sans } from "next/font/google"; // eslint-disable-line

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Jobit",
  description: "Job finder for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <ReduxProvider>
          <NavBar />
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
