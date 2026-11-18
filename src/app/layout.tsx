import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhanya Bhat · Portfolio",
  description:
    "Personal portfolio of Dhanya Bhat — Computer Science Engineering student at Bangalore Institute of Technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#070816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
