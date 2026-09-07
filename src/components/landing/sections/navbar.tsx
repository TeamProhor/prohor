"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

interface NavItem {
  label: string;
  active?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "ইকোসিস্টেম", active: true },
  { label: "ডিজাইন ও স্টুডিও" },
  { label: "ক্লাউড ও ডিপ্লয়" },
  { label: "মূল্যতালিকা" },
  { label: "মার্কেটপ্লেস" },
];

export function Navbar({
  className,
  logoHref = "/",
  navItems = defaultNavItems,
}: {
  className?: string;
  logoHref?: string;
  navItems?: NavItem[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`sticky top-4 z-50 px-4 ${className ?? ""}`}>
        <div className="mx-auto max-w-6xl backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-3 flex items-center shadow-lg shadow-black/20">
          <a href={logoHref} className="shrink-0 flex items-center">
            <img src="/prohor.webp" alt="প্রহর" className="h-7 w-auto object-contain" />
          </a>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
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
          <button className="hidden md:block bg-white text-black text-sm font-medium rounded-lg px-4 py-2 hover:bg-neutral-200 transition-colors cursor-pointer shrink-0">
            শুরু করুন
          </button>
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
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl md:hidden flex flex-col p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/prohor.webp" alt="প্রহর" className="h-7 w-auto object-contain" />
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
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                  item.active ? "text-white bg-white/10" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="mt-auto bg-white text-black rounded-xl py-3 text-sm font-medium">
            শুরু করুন
          </button>
        </motion.div>
      )}
    </>
  );
}
