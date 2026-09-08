"use client";

import Image from "next/image";
import { useState } from "react";
import * as motion from "motion/react-client";

import { NAVBAR_ITEMS, NavItem, ASSETS } from "@/lib/ui";

export function Navbar({
  className,
  logoHref = "/",
  navItems = NAVBAR_ITEMS,
}: {
  className?: string;
  logoHref?: string;
  navItems?: NavItem[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`sticky top-4 z-[100] px-4 ${className ?? ""}`}>
        <div className="mx-auto max-w-6xl backdrop-blur-2xl bg-black/60 border border-white/10 rounded-2xl px-5 py-3 flex items-center shadow-lg shadow-black/40">
          <a href={logoHref} className="shrink-0 flex items-center">
              <Image src="/prohor.webp" alt="প্রহর" width={200} height={200} unoptimized className="h-7 w-auto" />
          </a>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  item.active
                    ? "text-white bg-white/10"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center justify-center bg-white text-black text-sm font-medium rounded-lg px-4 py-2 hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            শুরু করুন
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="ml-auto md:hidden flex flex-col gap-1.5 p-1.5"
          >
            <span className="block w-5 h-0.5 bg-neutral-100 rounded-full" />
            <span className="block w-5 h-0.5 bg-neutral-100 rounded-full" />
            <span className="block w-5 h-0.5 bg-neutral-100 rounded-full" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl md:hidden flex flex-col p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/prohor.webp" alt="প্রহর" width={200} height={200} unoptimized className="h-7 w-auto" />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="size-8 flex items-center justify-center text-neutral-100 text-2xl leading-none rounded-lg hover:bg-white/10 transition-colors"
            >
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2 mt-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                  item.active ? "text-white bg-white/10" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-auto text-center bg-white text-black rounded-xl py-3 text-sm font-medium"
          >
            শুরু করুন
          </a>
        </motion.div>
      )}
    </>
  );
}
