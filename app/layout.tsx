import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HashScroll } from "./components/hash-scroll/HashScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terrano - Hire an Executive Assistant",
  description: "Terrano is a platform that helps you hire the best executive assistants. We are a team of experienced executive assistants who are dedicated to helping you get the work done that you don't want to do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
