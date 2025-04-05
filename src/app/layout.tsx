import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/CSS/global-min.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "PEF Education",
  description: "Turn your study abroad dream into reality. Explore top universities, experience new cultures, and build a future without limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
