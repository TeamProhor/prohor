"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
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

const keyFeatures = [
  { label: "AI Sales Agent", active: false },
  { label: "Lead Capture & Forms", active: false },
  { label: "Payments & Subscriptions", active: true },
  { label: "Automated Follow-ups", active: false },
  { label: "CRM for Academies", active: false },
];

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
                className="w-[36px] h-[22px] rounded-[6px] bg-white flex items-center justify-center text-[11px] font-medium"
                style={{ color: "#111114" }}
                initial={{ scale: 2.4, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 3.45,
                }}
              >
                Pro
              </motion.div>
            </div>

            <h2 className="mt-5 text-[24px] font-medium leading-[1.15] tracking-tight text-white">
              <AnimatedWords
                text="All-in-One"
                delayStart={3.6}
                stagger={0.05}
              />
              <br />
              <AnimatedWords
                text="Enrollment Platform"
                delayStart={3.75}
                stagger={0.05}
              />
            </h2>

            <div className="mt-auto pt-6">
              <p
                className="text-[14px] font-normal leading-[19px]"
                style={{ color: "rgba(255,255,255,0.36)" }}
              >
                From lead capture to recurring payments,
                <br />
                We run your enrollment with AI.
              </p>
            </div>

            {/* Browser mockup — md+ only */}
            <div className="hidden md:block absolute bottom-0 right-0 w-[330px]">
              <img
                src="https://qclay.design/lovable/nixole/browser-mockup.png"
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
              <div className="flex items-center gap-1 mb-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-white">
                  <path d="M8 0L9.6 5.6L16 6.4L11.2 10.4L12.8 16L8 12.8L3.2 16L4.8 10.4L0 6.4L6.4 5.6L8 0Z" />
                  <path d="M8 2L9 6L13 6.5L9.5 9.5L10.5 13.5L8 11L5.5 13.5L6.5 9.5L3 6.5L7 6L8 2Z" />
                </svg>
                <span className="text-[12px] font-medium text-white">
                  Key Features
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
                {keyFeatures.map((feat) => (
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
                  src="https://qclay.design/lovable/nixole/frame-207.svg"
                  alt="Customers"
                  className="h-[36px]"
                />
                <span className="text-[14px] font-medium text-neutral-200">
                  What our customers say
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
              Feb 02, 2026
            </p>
            <blockquote className="mt-2 max-w-[420px] text-[18px] font-medium leading-[1.3] tracking-tight">
              <AnimatedWords
                text="They converted 40% more leads"
                className="text-white"
                delayStart={3.6}
                stagger={0.04}
              />
              <AnimatedWords
                text="than our sales team — and never missed a follow-up."
                className="text-neutral-400"
                delayStart={3.75}
                stagger={0.04}
              />
            </blockquote>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <img
                src="https://qclay.design/lovable/nixole/nutanix-avatar.svg"
                alt="Nutanix"
                className="h-[24px]"
              />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    className="fill-current text-white"
                  >
                    <path d="M12 2.5l2.95 6.2 6.8.78-5.05 4.66 1.4 6.66L12 17.6l-6.1 3.2 1.4-6.66L2.25 9.48l6.8-.78L12 2.5z" />
                  </svg>
                ))}
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="half-star" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop
                        offset="50%"
                        stopColor="rgba(255,255,255,0.2)"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2.5l2.95 6.2 6.8.78-5.05 4.66 1.4 6.66L12 17.6l-6.1 3.2 1.4-6.66L2.25 9.48l6.8-.78L12 2.5z"
                    fill="url(#half-star)"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TRUSTED-BY ROW */}
        <div className="mt-7 px-1 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
          <p className="max-w-md text-[12px] leading-[1.5] text-neutral-400">
            Trusted by industry leaders in X who don&apos;t just follow trends,
            <br />
            but define how the industry moves forward.
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
                  src="https://qclay.design/lovable/nixole/upside-logo.svg"
                  alt="Upside"
                  className="h-[24px]"
                />
                <IntelLogo />
                <OracleLogo />
                <GoFundMeLogo />
                <NutanixLogo />
                <img
                  src="https://qclay.design/lovable/nixole/upside-logo.svg"
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
