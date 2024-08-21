import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decentralized Fiverr",
  description: "Platform built for ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <SessionWrapper>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
      </SessionWrapper>
    </html>
  );
}
