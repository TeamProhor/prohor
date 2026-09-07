import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "প্রহর (Prohor) — ডিজিটাল বাংলাদেশ গড়ার পূর্ণাঙ্গ ইকোসিস্টেম",
  description:
    "ওয়েবসাইট ও ডিজিটাল প্রোডাক্ট ডিজাইন, ডেভেলপমেন্ট, ডিপ্লয় এবং পরিচালনার জন্য বাংলাদেশের প্রথম সমন্বিত ক্লাউড প্ল্যাটফর্ম।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-foreground font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
