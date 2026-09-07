"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { Sparkle, Star } from "reicon-react";
import { IntelLogo, OracleLogo, GoFundMeLogo, NutanixLogo } from "../svgs/brand-logos";

function AnimatedWords({
  text,
  className,
  delayStart = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delayStart?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.15] pb-[0.2em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: delayStart + i * stagger,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

function AnimatedDottedFrame({ startDelay = 4200 }: { startDelay?: number }) {
  const [dots, setDots] = useState<{ cx: number; cy: number }[]>([]);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const total = el.getTotalLength();
    const points: { cx: number; cy: number }[] = [];
    for (let d = 2; d <= total; d += 4) {
      const p = el.getPointAtLength(d);
      points.push({ cx: p.x, cy: p.y });
    }
    setDots(points);
  }, []);

  return (
    <svg
      className="absolute"
      style={{ left: "-135.75px", top: "43.25px" }}
      width="141"
      height="107"
      viewBox="0 0 141 107"
      fill="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d="M140.75 3.75H5.75C2.98857 3.75 0.75 5.98858 0.75 8.75V95.75C0.75 98.5114 2.98858 100.75 5.75 100.75H40"
        style={{ stroke: "none", fill: "none" }}
      />
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="1.2"
          fill="white"
          className="dot-pop"
          style={{
            animationDelay: `${(startDelay + i * 40)}ms`,
            opacity: 0.36,
          }}
        />
      ))}
    </svg>
  );
}

import { MESH_SHOWCASE_CONTENT, ASSETS } from "@/lib/ui";

export function Showcase({ className }: { className?: string }) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 mt-16 ${className ?? ""}`}>
      <motion.div
        className="mesh-showcase rounded-[28px] overflow-hidden p-5 md:p-7"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.25, 1, 0.5, 1],
          delay: 3.0,
        }}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {/* LEFT INNER CARD */}
          <motion.div
            className="relative min-h-[360px] rounded-[22px] p-6 md:p-7 text-white flex flex-col"
            style={{ backgroundColor: "#1E1D19" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 3.2,
            }}
          >
            <div className="flex items-center justify-between">
              <motion.div
                className="px-2.5 h-[24px] rounded-[6px] bg-white flex items-center justify-center gap-1.5 text-[11px] font-semibold text-black"
                initial={{ scale: 2.4, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 3.45,
                }}
              >
                <img src={ASSETS.logo} alt="প্রহর" className="h-3.5 w-auto object-contain inline-block" />
                <span>{MESH_SHOWCASE_CONTENT.badge}</span>
              </motion.div>
            </div>

            <h2 className="mt-5 text-[24px] font-medium leading-[1.2] tracking-tight text-white">
              <AnimatedWords
                text={MESH_SHOWCASE_CONTENT.headlineLine1}
                delayStart={3.6}
                stagger={0.05}
              />
              <br />
              <AnimatedWords
                text={MESH_SHOWCASE_CONTENT.headlineLine2}
                delayStart={3.75}
                stagger={0.05}
              />
            </h2>

            <div className="mt-auto pt-6">
              <p
                className="text-[14px] font-normal leading-[22px] text-neutral-300 whitespace-pre-line"
              >
                {MESH_SHOWCASE_CONTENT.description}
              </p>
            </div>

            {/* Browser mockup — md+ only */}
            <div className="hidden md:block absolute bottom-0 right-0 w-[330px]">
              <img
                src={ASSETS.browserMockup}
                alt="Medical.AI browser"
                className="w-full"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.45))" }}
              />
              <div
                className="absolute"
                style={{ top: "40px", left: "1px", width: "8px", height: "8px" }}
              >
                <div
                  className="w-[8px] h-[8px] rounded-full bg-white"
                  style={{ border: "2px solid rgba(255,255,255,0.12)", content: "" }}
                />
              </div>
              <AnimatedDottedFrame startDelay={4200} />
            </div>

            {/* Key Features popover — md+ only */}
            <motion.div
              className="hidden md:flex flex-col absolute z-10 glass-node"
              style={{
                bottom: "-24px",
                right: "214px",
                width: "210px",
                height: "222px",
                borderRadius: "13.654px",
                padding: "12px",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 3.95,
              }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkle size={14} className="text-white" />
                <span className="text-[12px] font-medium text-white">
                  {MESH_SHOWCASE_CONTENT.featuresTitle}
                </span>
              </div>
              <div
                className="relative mb-2"
                style={{
                  marginLeft: "-12px",
                  marginRight: "-12px",
                  height: "1px",
                  background: "rgba(255,255,255,0.19)",
                }}
              >
                <div
                  className="absolute rounded-full bg-white"
                  style={{
                    left: "-4px",
                    top: "-4px",
                    width: "8px",
                    height: "8px",
                    border: "2px solid rgba(255,255,255,0.12)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                {MESH_SHOWCASE_CONTENT.features.map((feat) => (
                  <div
                    key={feat.label}
                    className={`flex items-center gap-2 px-1.5 py-1.5 ${
                      feat.active
                        ? "rounded-[4.312px] text-foreground"
                        : "text-white/90"
                    }`}
                    style={
                      feat.active
                        ? { backgroundColor: "#F4F4F4" }
                        : undefined
                    }
                  >
                    <div
                      className={`flex items-center justify-center w-[12px] h-[12px] rounded-[3px] ${
                        feat.active ? "bg-accent" : "bg-white/15"
                      }`}
                      style={
                        feat.active
                          ? { borderRadius: "1.006px" }
                          : { borderRadius: "3px" }
                      }
                    >
                      {feat.active && (
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-[11px] font-medium ${
                        feat.active ? "text-foreground" : "text-white/90"
                      }`}
                    >
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT INNER CARD */}
          <motion.div
            className="relative min-h-[360px] rounded-[22px] p-6 md:p-7 border border-white/10 text-white flex flex-col"
            style={{ backgroundColor: "#0F0D0F" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 3.3,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2">
                <img
                  src={ASSETS.frame207}
                  alt="Customers"
                  className="h-[36px]"
                />
                <span className="text-[14px] font-medium text-neutral-200">
                  {MESH_SHOWCASE_CONTENT.testimonial.title}
                </span>
              </div>
              <div className="flex flex-col gap-[4.34px]">
                <div
                  className="rounded-[5.428px]"
                  style={{
                    width: "4.343px",
                    height: "32.569px",
                    backgroundColor: "#ffffff",
                  }}
                />
                <div
                  className="rounded-[5.428px]"
                  style={{
                    width: "4.343px",
                    height: "16.285px",
                    backgroundColor: "rgba(255,255,255,0.25)",
                  }}
                />
              </div>
            </div>

            <p className="mt-12 text-[12px] text-neutral-400">
              {MESH_SHOWCASE_CONTENT.testimonial.date}
            </p>
            <blockquote className="mt-2 max-w-[420px] text-[18px] font-medium leading-[1.4] tracking-tight">
              <AnimatedWords
                text={MESH_SHOWCASE_CONTENT.testimonial.quote1}
                className="text-white"
                delayStart={3.6}
                stagger={0.04}
              />
              {" "}
              <AnimatedWords
                text={MESH_SHOWCASE_CONTENT.testimonial.quote2}
                className="text-neutral-400"
                delayStart={3.75}
                stagger={0.04}
              />
            </blockquote>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-neutral-300">
                {MESH_SHOWCASE_CONTENT.testimonial.author}
              </span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: MESH_SHOWCASE_CONTENT.testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight="Filled"
                    color="#ffffff"
                    className="text-white"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* TRUSTED-BY ROW */}
        <div className="mt-7 px-1 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
          <p className="max-w-md text-[13px] leading-[1.6] text-neutral-300 whitespace-pre-line">
            {MESH_SHOWCASE_CONTENT.trustedByText}
          </p>
          <div className="w-full md:max-w-[60%] md:ml-auto overflow-hidden">
            <div
              className="flex"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%)",
              }}
            >
              <div
                className="flex items-center gap-10 animate-marquee"
                style={{ paddingRight: "40px" }}
              >
                <IntelLogo />
                <OracleLogo />
                <GoFundMeLogo />
                <NutanixLogo />
                <img
                  src={ASSETS.upsideLogo}
                  alt="Upside"
                  className="h-[24px]"
                />
                <IntelLogo />
                <OracleLogo />
                <GoFundMeLogo />
                <NutanixLogo />
                <img
                  src={ASSETS.upsideLogo}
                  alt="Upside"
                  className="h-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Showcase;
