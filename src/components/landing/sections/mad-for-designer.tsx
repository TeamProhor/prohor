"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Copy, Plus, Cursor } from "reicon-react";
import { MAD_FOR_DESIGNER_CONTENT, ASSETS } from "@/lib/ui";

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
            {MAD_FOR_DESIGNER_CONTENT.title}
          </h2>
          <p className="text-sm sm:text-base opacity-70 text-neutral-200 max-w-[460px] leading-relaxed">
            {MAD_FOR_DESIGNER_CONTENT.description}
          </p>
          <div className="flex gap-2 pt-2">
            <button className="bg-white text-black px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
              {MAD_FOR_DESIGNER_CONTENT.cta1}
            </button>
            <button className="bg-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
              {MAD_FOR_DESIGNER_CONTENT.cta2}
            </button>
          </div>
        </div>

        <div
          className="rounded-2xl border border-white/10 overflow-hidden flex flex-col bg-card-dark"
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="flex gap-2">
              {[
                <Cursor key="cursor" size={14} className="text-white" />,
                <Copy key="copy" size={14} className="text-white" />,
                <Plus key="plus" size={14} className="text-white" />,
              ].map((icon) => (
                <motion.div
                  key={icon.key}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="size-7 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
            <button className="bg-white text-black text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
              {MAD_FOR_DESIGNER_CONTENT.exportCta}
            </button>
          </div>

          <div className="mx-0 sm:mx-3 my-0 sm:my-3 relative rounded-none sm:rounded-xl overflow-hidden">
            <Image src={ASSETS.bg} alt="" width={800} height={600} unoptimized className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/85" />
            <div className="relative p-4 sm:p-6">
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl sm:text-2xl text-white max-w-[360px] leading-tight font-medium">
                  {MAD_FOR_DESIGNER_CONTENT.codeTitle}
                </h3>
                <button
                  className="size-7 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 mt-1 cursor-pointer hover:bg-zinc-700 transition-colors text-neutral-300 hover:text-white"
                  aria-label="কোড কপি করুন"
                >
                  <Copy size={13} />
                </button>
              </div>
              <pre className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap font-mono bg-black/40 p-3 rounded-lg border-0 sm:border border-white/5">
{MAD_FOR_DESIGNER_CONTENT.codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
