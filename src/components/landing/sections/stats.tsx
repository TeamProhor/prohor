"use client";

import { useRef } from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { CountNumber } from "../lib/animations";
import { STATS_CONTENT, ASSETS } from "@/lib/ui";

export function Stats({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cursorKeyframes = {
    opacity: [0, 1, 1, 1, 1],
    x: [80, -100, 28, 90, 90],
    y: [80, -8, -8, 30, 30],
  };
  const cursorTransition = {
    duration: 2.6,
    delay: 0.9,
    times: [0, 0.25, 0.6, 0.85, 1],
    ease: "easeInOut" as const,
  };

  return (
    <section aria-label="পরিসংখ্যান" ref={ref} className={`bg-black py-16 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        >
          <span className="text-4xl sm:text-5xl text-neutral-100 font-semibold">
            <CountNumber to={STATS_CONTENT.stat1.number} start={inView} />{STATS_CONTENT.stat1.unit}
          </span>
          <p className="text-sm sm:text-base text-neutral-100 opacity-60 max-w-[220px]">
            {STATS_CONTENT.stat1.label}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="text-4xl sm:text-5xl text-neutral-100 font-semibold">
            <CountNumber to={STATS_CONTENT.stat2.number} start={inView} />{STATS_CONTENT.stat2.decimal}
          </span>
          <p className="text-sm sm:text-base text-neutral-100 opacity-60 max-w-[300px]">
            {STATS_CONTENT.stat2.label}
          </p>
        </motion.div>

        <article className="relative bg-neutral-900 rounded-2xl p-6 sm:p-8 w-full max-w-[480px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-snug">
              {STATS_CONTENT.banner.prefix}
              <span className="relative inline-block align-baseline px-1.5 py-0.5">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-white rounded-sm origin-left"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.91, delay: 1.55, ease: "linear" }}
                  style={{ transformOrigin: "left center" }}
                />
                <span className="relative font-medium text-white">{STATS_CONTENT.banner.highlight}</span>
                <motion.span
                  aria-hidden
                  className="absolute inset-0 px-1.5 py-0.5 font-medium text-stone-950 whitespace-nowrap"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                  transition={{ duration: 0.91, delay: 1.55, ease: "linear" }}
                >
                  {STATS_CONTENT.banner.highlight}
                </motion.span>
              </span>
              {STATS_CONTENT.banner.suffix}
            </p>
            <motion.div
              className="absolute pointer-events-none"
              style={{ top: "40%", left: "55%" }}
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={inView ? cursorKeyframes : { opacity: 0, x: 100, y: 100 }}
              transition={cursorTransition}
            >
              <img src={ASSETS.icons.blueArrow} alt="" width={22} height={22} />
              <span className="absolute top-[18px] left-[14px] whitespace-nowrap bg-blue-500 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-tr-md rounded-bl-md rounded-br-md">
                {STATS_CONTENT.banner.roleBadge}
              </span>
            </motion.div>
          </motion.div>
        </article>
      </div>
    </section>
  );
}
