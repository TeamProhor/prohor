import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Endless — Design Without Limits",
  description:
    "An infinite canvas for designers and developers. AI-powered design tools, collaboration, and export workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-foreground font-sans">{children}</body>
    </html>
  );
}
