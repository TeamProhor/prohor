"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { Edit, Grid, Plus, Text, Image, Search, Sparkle } from "reicon-react";
import { FigmaLogo, FramerLogo, WebflowLogo } from "../svgs/brand-logos";
import {
  WordsReveal,
  StaggeredWords,
  CountUpInView,
  TypingPlaceholderInput,
} from "../lib/animations";
import { HERO_CONTENT } from "@/lib/ui";

export function Hero({
  className,
  heading = HERO_CONTENT.heading,
  headingClassName,
  subtitle = HERO_CONTENT.subtitle,
  subtitleClassName,
  placeholderText = HERO_CONTENT.placeholderText,
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
            {/* Background Ambient Glow & Grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-black to-black pointer-events-none z-0" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-3xl rounded-full pointer-events-none z-0" />
            
            <h1
              className={`relative z-10 text-3xl sm:text-5xl lg:text-6xl font-medium text-neutral-100 max-w-4xl tracking-tight leading-[1.15] mb-5 sm:mb-6 mt-10 sm:mt-15 text-balance ${headingClassName ?? ""}`}
            >
              <StaggeredWords text={heading} baseDelay={300} step={54} />
            </h1>
            <p
              className={`relative z-10 text-sm sm:text-lg text-balance opacity-75 text-neutral-100 max-w-3xl leading-relaxed mb-6 sm:mb-8 ${subtitleClassName ?? ""}`}
            >
              <StaggeredWords text={subtitle} baseDelay={900} step={33} />
            </p>
            <div className="relative z-10 w-full max-w-md h-12 mb-6 my-2 sm:my-4">
              <div className="w-full h-full bg-neutral-900 outline outline-[1.30px] outline-white/10 rounded-xl flex items-center pl-3.5 pr-1.5 sm:px-3 gap-2.5">
                <Search
                  size={18}
                  className="shrink-0 text-neutral-400 pointer-events-none"
                />
                <TypingPlaceholderInput
                  placeholder={placeholderText}
                  startDelay={2040}
                  speed={70}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg h-8 px-3 sm:px-4 transition-colors cursor-pointer shrink-0"
                  aria-label="Generate design"
                >
                  তৈরি করুন
                </button>
              </div>
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
          <span className="text-xs font-medium text-neutral-100">লেয়ার্স</span>
          <span className="text-xs font-medium text-neutral-100 opacity-30">
            এসেটস
          </span>
        </motion.div>
        <div className="flex flex-col gap-3 p-3 w-[calc(100%+1rem)] -ml-4 pl-7 border-t border-white/10">
          {[
            <div
              key="headline"
              className="flex items-center gap-2 h-7 px-2 text-neutral-300 text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <Text size={14} />
              </span>
              হেডলাইন
            </div>,
            <div
              key="tools"
              className="flex items-center gap-2 h-7 px-2 text-neutral-300 text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <Edit size={14} />
              </span>
              টুলস
            </div>,
            <div
              key="cards"
              className="flex items-center gap-2 h-8 px-1 rounded-lg bg-white/[0.08] outline outline-1 outline-white/5"
            >
              <span className="w-7 h-7 ml-1 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                <Grid size={14} />
              </span>
              <span className="text-xs text-neutral-100">কার্ডসমূহ</span>
            </div>,
            <div
              key="add"
              className="flex items-center gap-2 h-7 px-2 text-neutral-300 text-xs"
            >
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <Plus size={14} />
              </span>
              আরো যোগ করুন
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

      <div className="flex-1 p-3 sm:p-4 flex flex-wrap gap-3 sm:gap-4 content-start items-center justify-center sm:justify-start overflow-y-auto sm:overflow-visible">
        {/* Card 1: Design Tokens & Live Chart */}
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
                  text="ডিজাইন টোকেন"
                  delay={0.66}
                  step={0.048}
                  duration={0.3}
                  active={heroReady}
                />
                <WordsReveal
                  as="span"
                  className="text-lg font-medium mt-0.5"
                  text="২৪টি আপডেট"
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
                  text="আপটাইম"
                  delay={0.66}
                  step={0.048}
                  duration={0.3}
                  active={heroReady}
                />
                <span className="text-lg font-medium mt-0.5">
                  <CountUpInView
                    end={99}
                    duration={1200}
                    delay={780}
                    active={heroReady}
                  />
                  .৯%
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full mt-2 relative z-10">
              <WordsReveal
                as="span"
                className="text-[10px] text-stone-950 font-medium"
                text="কোর ইঞ্জিন"
                delay={0.9}
                step={0.048}
                duration={0.3}
                active={heroReady}
              />
              <WordsReveal
                as="span"
                className="text-[10px] opacity-40"
                text="ক্লাউড v২.৪"
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
              <svg
                className="absolute inset-0 w-full h-full object-cover scale-[1.015] origin-center pointer-events-none"
                viewBox="0 0 396 237"
                fill="none"
              >
                <g opacity="0.12">
                  <rect x="231" width="40" height="236" fill="#121012" />
                </g>
                <path
                  d="M1 180L18 178L23 172L27 168L32 157L39 159L42 166L46 154V147L52 145L54 139L58 137L62 133L67 137H71L76 133L82 128L87 133L92 137L99 142L101 157L105 160L107 168L111 171L116 174L120 188L127 191H130L139 188L145 190L150 191C151 192 153 193 154 194C155 194 158 195 160 195H170L177 194L182 195L184 186L189 182L190 177L192 171V164L198 160L201 154V145L207 142L210 137L213 130L217 128L226 141L233 147L236 151H239L241 138L246 137L255 138L259 137L261 127H266L270 120L275 119L282 125L284 130L290 133L294 141H300L303 151L309 132H314L321 114L329 115L333 155L340 164L343 174L349 164H357L362 174H364L367 155L371 158L384 163L401 160"
                  stroke="#121012"
                  strokeOpacity="0.18"
                  strokeWidth="1.5"
                />
                <path
                  d="M233 147L236 151H239L241 138L246 137L255 138L259 137L261 127H266L270 120"
                  stroke="#121012"
                  strokeWidth="2"
                />
                <circle cx="270" cy="120" r="3" fill="#121012" />
              </svg>
            </motion.div>
          </motion.div>
        </article>

        {/* Card 2: Components Count & Pink Accent Card */}
        <article className="w-28 h-44 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center bg-[#E5D4F3]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.24, ease: "easeOut" }}
            className="w-full h-full relative flex flex-col justify-center items-center select-none"
          >
            {/* Subtle diamond motifs matching original Card_3pink */}
            <div className="absolute top-1.5 right-1.5 w-10 h-10 border-4 border-white/20 rotate-45 rounded-lg pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-12 h-12 border-4 border-white/20 rotate-45 rounded-xl pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-2xl font-semibold text-neutral-900 tracking-tight">
                <CountUpInView
                  end={12000}
                  duration={1200}
                  delay={360}
                  active={heroReady}
                />
                +
              </span>
              <motion.span
                className="text-xs text-neutral-900/70 font-medium mt-0.5"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.42, ease: "easeOut" }}
              >
                কম্পোনেন্টস
              </motion.span>
            </div>
          </motion.div>
        </article>

        {/* Card 3: Tool Collaborations / Custom AI */}
        <article className="w-52 h-44 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.36, delay: 0.3, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-between text-center"
          >
            <div className="pt-0.5">
              <span className="text-[10px] text-neutral-400 font-medium block">টুলস সমন্বয়</span>
              <h4 className="text-base font-medium text-neutral-100 tracking-tight mt-0.5">কাস্টম AI</h4>
            </div>
            
            <div className="flex items-center justify-center gap-3.5 my-auto">
              <div className="w-9 h-9 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center p-2 shadow-sm hover:scale-105 transition-transform">
                <FigmaLogo className="w-full h-full object-contain" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center p-2 shadow-sm hover:scale-105 transition-transform">
                <FramerLogo className="w-full h-full object-contain" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center p-2 shadow-sm hover:scale-105 transition-transform">
                <WebflowLogo className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="pb-0.5">
              <span className="text-[11px] font-medium text-blue-400 cursor-pointer hover:underline">+ আরো টুলস</span>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}

