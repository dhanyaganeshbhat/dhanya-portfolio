import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlitterCursor from "@/components/GlitterCursor";
import AmbientParticles from "@/components/AmbientParticles";

export const metadata: Metadata = {
  title: "Dhanya Ganesh Bhat · CS Engineering Student | BIT Bengaluru",
  description:
    "Personal portfolio of Dhanya Ganesh Bhat — Computer Science Engineering student at Bangalore Institute of Technology, Bengaluru. Exploring technology, writing code, and turning ideas into meaningful digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#080808] text-white antialiased">
        {/* White & Champagne glitter trail cursor */}
        <GlitterCursor />

        {/* Ambient floating champagne particles */}
        <AmbientParticles />

        {/* Top subtle golden light reflection */}
        <div
          className="pointer-events-none fixed top-0 inset-x-0 h-56 bg-gradient-to-b from-[#D6C29A]/08 via-[#D6C29A]/02 to-transparent z-[2]"
          aria-hidden
        />

        {/* Main layout container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
