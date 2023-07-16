import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "../redux/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
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
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
