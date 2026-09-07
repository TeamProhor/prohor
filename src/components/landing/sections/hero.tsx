"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import {
  WordsReveal,
  StaggeredWords,
  CountUpInView,
  TypingPlaceholderInput,
  ToolIcon,
} from "../lib/animations";

const MEDIA = "https://qclay.design/lovable/codeba/";
const ICONS = "https://qclay.design/lovable/codeba/icons/";
const bgAsset = { url: MEDIA + "Bg.png" };
const dash01 = { url: MEDIA + "01.svg" };
const dash02 = { url: MEDIA + "dash02.svg" };
const dashLine = { url: MEDIA + "Line.svg" };
const dashCard3 = { url: MEDIA + "Card_3.png" };
const dashCard3Pink = { url: MEDIA + "Card_3pink.png" };
const dashCard4 = { url: MEDIA + "Card_4.png" };
const dashCard5 = { url: MEDIA + "Card_5.png" };

const searchUrl = ICONS + "search.svg";

export function Hero({
  className,
  heading = "The easiest way to build your great design products.",
  headingClassName,
  subtitle = "E-Endless designer — the AI-powered content and design creator for content and marketing teams.",
  subtitleClassName,
  placeholderText = "Write your prompt/",
}: {
  className?: string;
  heading?: string;
  headingClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  placeholderText?: string;
}) {
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section aria-label="Hero" className={`relative ${className ?? ""}`}>
      <div
        className="relative mx-2 sm:mx-4 rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#0F0D0F" }}
      >
        <div className="relative">
          <div className="flex items-center px-4 py-4 sm:py-6">
            <div className="flex-1 flex items-center justify-end gap-3">
              <div className="flex items-center space-x-[-8px]"></div>
            </div>
          </div>

          <div className="relative overflow-hidden mx-1.5 sm:mx-3 mb-0 border border-white/10 rounded-2xl flex flex-col items-center text-center pt-12 sm:pt-16 px-4 sm:px-6 pb-0">
            <img
              src={bgAsset.url}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/80 z-0" />
            <h1
              className={`relative z-10 text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-100 max-w-4xl tracking-tight leading-[1.1] mb-5 sm:mb-6 mt-10 sm:mt-15 text-balance ${headingClassName ?? ""}`}
            >
              <StaggeredWords text={heading} baseDelay={300} step={54} />
            </h1>
            <p
              className={`relative z-10 text-sm sm:text-lg text-balance opacity-60 text-neutral-100 max-w-3xl leading-relaxed mb-6 sm:mb-8 ${subtitleClassName ?? ""}`}
            >
              <StaggeredWords text={subtitle} baseDelay={900} step={33} />
            </p>
            <div className="relative z-10 w-full max-w-md h-12 mb-6 my-2 sm:my-4">
              <div className="absolute inset-0 bg-neutral-900 outline outline-[1.30px] outline-white/10 rounded-xl flex items-center pl-10 pr-1.5 sm:px-4 gap-2 sm:gap-3">
                <TypingPlaceholderInput
                  placeholder={placeholderText}
                  startDelay={2040}
                  speed={70}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg h-8 px-3 sm:px-4 transition-colors cursor-pointer shrink-0"
                  aria-label="Generate design"
                >
                  Generate
                </button>
              </div>
              <img
                src={searchUrl}
                alt=""
                width={18}
                height={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
              />
            </div>
            <DashboardPreview heroReady={heroReady} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-50" />
    </section>
  );
}

function DashboardPreview({ heroReady }: { heroReady: boolean }) {
  return (
    <div className="w-full max-w-[940px] h-[380px] sm:h-[460px] mx-auto bg-black rounded-xl outline outline-[1.4px] outline-neutral-100/10 flex overflow-hidden relative z-10 top-10 sm:top-20">
      <aside
        aria-label="Layer panel"
        className="hidden sm:block w-40 md:w-44 shrink-0 h-full relative bg-black border-r border-white/10"
      >
        <motion.div
          className="flex items-center gap-4 px-3 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.36, delay: 0.06, ease: "easeOut" }}
        >
          <span className="text-xs font-medium text-neutral-100">Layers</span>
          <span className="text-xs font-medium text-neutral-100 opacity-30">
            Assets
          </span>
        </motion.div>
        <div className="flex flex-col gap-3 p-3 w-[calc(100%+1rem)] -ml-4 pl-7 border-t border-white/10">
          {[
            <img
              key="d1"
              src={dash01.url}
              alt="Headlines"
              className="h-7 w-auto object-contain object-left ml-2"
            />,
            <img
              key="d2"
              src={dash02.url}
              alt="Images and fill"
              className="h-7 w-auto object-contain object-left ml-2"
            />,
            <div
              key="tools"
              className="flex items-center gap-2 h-7 px-2 text-neutral-300 text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14.7 6.3 3 3" />
                  <path d="M3 21v-3l11-11 3 3L6 21z" />
                </svg>
              </span>
              Tools
            </div>,
            <div
              key="cards"
              className="flex items-center gap-2 h-8 px-1 rounded-lg bg-white/[0.08] outline outline-1 outline-white/5"
            >
              <span className="w-7 h-7 ml-1 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              <span className="text-xs text-neutral-100">Cards</span>
            </div>,
            <div
              key="add"
              className="flex items-center gap-2 h-7 px-2 text-neutral-300 text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </span>
              Add more
            </div>,
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.72,
                delay: 0.12 + i * 0.2,
                ease: "easeOut",
              }}
            >
              {node}
            </motion.div>
          ))}
        </div>
      </aside>

      <div className="flex-1 p-2 sm:p-3 flex flex-wrap gap-x-3 gap-y-3 content-start justify-center sm:justify-start">
        <article className="w-full max-w-[288px] sm:w-72 h-44 relative bg-[#D0C9B9] rounded-2xl overflow-hidden p-4 flex flex-col text-[#131113]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.18, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <div className="flex justify-between relative z-10">
              <div className="flex flex-col">
                <WordsReveal
                  as="span"
                  className="text-[10px] opacity-40"
                  text="Design token style"
                  delay={0.66}
                  step={0.048}
                  duration={0.3}
                  active={heroReady}
                />
                <WordsReveal
                  as="span"
                  className="text-lg font-medium mt-0.5"
                  text="17 Updated"
                  delay={0.75}
                  step={0.048}
                  duration={0.3}
                  active={heroReady}
                />
              </div>
              <div className="flex flex-col items-end">
                <WordsReveal
                  as="span"
                  className="text-[10px] opacity-40"
                  text="Status"
                  delay={0.66}
                  step={0.048}
                  duration={0.3}
                  active={heroReady}
                />
                <span className="text-lg font-medium mt-0.5">
                  <CountUpInView
                    end={93}
                    duration={1200}
                    delay={780}
                    active={heroReady}
                  />
                  %
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full mt-2 relative z-10">
              <WordsReveal
                as="span"
                className="text-[10px] text-stone-950"
                text="Pr"
                delay={0.9}
                step={0.048}
                duration={0.3}
                active={heroReady}
              />
              <WordsReveal
                as="span"
                className="text-[10px] opacity-40"
                text="Sec"
                delay={0.9}
                step={0.048}
                duration={0.3}
                active={heroReady}
              />
            </div>
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={
                heroReady
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { clipPath: "inset(0 100% 0 0)" }
              }
              transition={{ duration: 0.72, delay: 0.48, ease: "easeInOut" }}
            >
              <img
                src={dashLine.url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-[1.015] origin-center pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </article>

        <article className="w-28 h-44 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.24, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={dashCard3Pink.url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center pt-10">
              <span className="text-2xl font-medium text-neutral-900">
                <CountUpInView
                  end={8000}
                  duration={1200}
                  delay={360}
                  active={heroReady}
                />
              </span>
              <motion.span
                className="text-xs text-neutral-900/60 mt-0.5"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.42, ease: "easeOut" }}
              >
                Components
              </motion.span>
            </div>
          </motion.div>
        </article>

        <article className="w-52 h-44 rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={dashCard3.url}
              alt="Custom AI design card"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </article>

        <article className="w-52 h-44 rounded-2xl overflow-hidden -mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.36, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={dashCard4.url}
              alt="Magic design card"
              className="w-full h-full object-contain object-center"
            />
          </motion.div>
        </article>

        <article className="w-[420px] h-44 rounded-2xl overflow-hidden -mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.42, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={dashCard5.url}
              alt="AI created design card"
              className="w-full h-full object-contain object-center"
            />
          </motion.div>
        </article>
      </div>
    </div>
  );
}
