import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "./context/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

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

    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
