"use client";

import * as motion from "motion/react-client";
import { ToolIcon } from "../lib/animations";

const MEDIA = "https://qclay.design/lovable/codeba/";
const ICONS = "https://qclay.design/lovable/codeba/icons/";
const bgAsset = { url: MEDIA + "Bg.png" };
const macDotUrl = ICONS + "MacDot.svg";
const whiteCursorUrl = ICONS + "WhiteCursor.svg";
const copyUrl = ICONS + "Copy.svg";
const plusUrl = ICONS + "plus.svg";

export function MadForDesigner({
  className,
}: {
  className?: string;
}) {
  return (
    <section aria-label="ডিজাইনার ও ডেভেলপারদের জন্য" className={`bg-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-white font-medium">
            ডিজাইনার ও ডেভেলপারদের জন্য উন্মুক্ত স্বাধীনতা
          </h2>
          <p className="text-sm sm:text-base opacity-70 text-neutral-200 max-w-[460px] leading-relaxed">
            প্রহর স্টুডিও ও ডিজাইনের সমন্বয়ে ক্যানভাস থেকে সরাসরি প্রোডাকশন-রেডি ক্লিন কোড তৈরি করুন। কোনো কনফিগারেশন ঝামেলা ছাড়াই তাৎক্ষণিক প্রিভিউ ও এক্সপোর্ট।
          </p>
          <div className="flex gap-2 pt-2">
            <button className="bg-white text-black px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
              কীভাবে কাজ করে
            </button>
            <button className="bg-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
              কোড দেখুন
            </button>
          </div>
        </div>

        <div
          className="rounded-2xl border border-white/10 overflow-hidden flex flex-col"
          style={{ backgroundColor: "#0F0D0F" }}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/5">
            <img src={macDotUrl} alt="" width={48} height={10} />
            <div className="flex gap-2">
              {[whiteCursorUrl, copyUrl, plusUrl].map((src, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ToolIcon src={src} />
                </motion.div>
              ))}
            </div>
            <button className="bg-white text-black text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
              কোড এক্সপোর্ট
            </button>
          </div>

          <div className="mx-3 my-3 relative rounded-xl overflow-hidden">
            <img src={bgAsset.url} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/85" />
            <div className="relative p-4 sm:p-6">
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl sm:text-2xl text-white max-w-[360px] leading-tight font-medium">
                  ডিজাইন ও কোড একসাথে সরাসরি ব্রাউজারে
                </h3>
                <button
                  className="size-7 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 mt-1 cursor-pointer hover:bg-zinc-700 transition-colors"
                  aria-label="কোড কপি করুন"
                >
                  <img src={copyUrl} alt="" width={12} height={12} />
                </button>
              </div>
              <pre className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap font-mono bg-black/40 p-3 rounded-lg border border-white/5">
{`/* প্রহর ডিজাইন সিস্টেম সিএসএস টোকেন */
--prohor-brand-primary: #00D084;
--prohor-local-gateway: "bKash", "Nagad";
--prohor-region: "bd-dhaka-01";
font-family: "Hind Siliguri", sans-serif;
border-radius: 12px;
backdrop-filter: blur(16px);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
