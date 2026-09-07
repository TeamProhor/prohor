"use client";

import * as motion from "motion/react-client";
import { UPDATES_CONTENT, ASSETS } from "@/lib/ui";

export function Updates({
  className,
}: {
  className?: string;
}) {
  return (
    <section id="updates" aria-label="সংবাদ ও আপডেট" className={`bg-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col gap-8 relative">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 leading-tight flex items-center gap-2.5 flex-wrap">
              <img src={ASSETS.logo} alt="প্রহর" className="h-7 sm:h-9 w-auto object-contain" />
              <span>{UPDATES_CONTENT.headerTitle}</span>
            </h2>
            <p className="text-sm sm:text-base opacity-60 text-neutral-100 leading-6">
              {UPDATES_CONTENT.headerDescription}
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 bg-white text-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            {UPDATES_CONTENT.ctaText}
          </a>
        </header>

        <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          <div className="w-full lg:w-[35%] shrink-0">
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
              <img src={ASSETS.card} alt="প্রহর ক্লাউড ঘোষণা" className="w-full h-auto block" />
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col relative pb-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl sm:text-2xl text-neutral-100">{UPDATES_CONTENT.articleTitle}</h3>
              <img src={ASSETS.icons.whiteArrowUpRight} alt="" width={18} height={18} />
            </div>
            {UPDATES_CONTENT.paragraphs.map((p, i) => (
              <p key={i} className={`text-sm sm:text-base text-neutral-100 ${i === 2 ? "opacity-40" : "opacity-60"} leading-6 mb-3`}>
                {p}
              </p>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </article>
      </div>
    </section>
  );
}
