"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Text, ImagePlus, CursorSquare, MoreH } from "reicon-react";
import { CountUp } from "../lib/animations";

import { FEATURES_CONTENT, ASSETS } from "@/lib/ui";

export function Features({ className }: { className?: string }) {
  return (
    <section
      id="features"
      aria-label="Features"
      className={`px-5 pt-16 pb-16 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <FeatureCards />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start justify-between mb-12 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full md:max-w-[640px]"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-neutral-100 font-normal">
          {FEATURES_CONTENT.headerTitle}
        </h2>
        <div className="flex items-center gap-3">
          <button className="bg-white text-black rounded-xl px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
            {FEATURES_CONTENT.ctaText}
          </button>
          <span className="hidden md:block text-sm text-neutral-400">
            {FEATURES_CONTENT.badgeText}
          </span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="hidden md:flex items-center gap-2 text-base text-neutral-400 text-right shrink-0"
      >
        <Image src={ASSETS.logo} alt="প্রহর" width={200} height={200} unoptimized className="h-5 w-auto" />
        <span>{FEATURES_CONTENT.badgeText}</span>
      </motion.p>
    </header>
  );
}

function ListItem({
  icon,
  label,
  active = false,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2.5 py-2 rounded-xl ${
        active
          ? "bg-white/5 bg-gradient-to-r from-[#999999]/20 via-transparent to-transparent border border-white/10 border-r-transparent border-b-transparent"
          : "border border-transparent"
      }`}
    >
      <div
        className={`size-7 rounded-md flex items-center justify-center ${
          active ? "bg-white text-black" : "bg-white/5 border border-white/10 text-neutral-300"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs text-neutral-100 ${active ? "" : "opacity-60"}`}
      >
        {label}
      </span>
    </div>
  );
}

function FeatureCards() {
  const [countActive, setCountActive] = useState(false);
  const cardAnim = (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1: ডিজাইন ও ইউআই */}
      <motion.article
        {...cardAnim(0.1)}
        className="relative h-[380px] rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center text-center pt-8 px-6 border border-white/5"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 31% -7%, rgba(255,255,255,0.05), transparent)",
        }}
      >
        <h3 className="text-xl sm:text-2xl text-neutral-100 leading-tight font-medium">
          {FEATURES_CONTENT.card1.title}
        </h3>
        <p className="mt-4 text-xs sm:text-sm opacity-70 text-neutral-200 max-w-[340px] leading-relaxed">
          {FEATURES_CONTENT.card1.description}
        </p>
        <motion.div
          className="absolute bottom-0 left-6 right-6 bg-white/5 border border-white/5 rounded-t-2xl p-3 pt-5 flex flex-col gap-1.5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                delayChildren: 0.5,
                staggerChildren: 0.15,
              },
            },
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          {[
            { icon: <Text size={14} />, label: FEATURES_CONTENT.card1.items[0].label, active: FEATURES_CONTENT.card1.items[0].active },
            { icon: <ImagePlus size={14} />, label: FEATURES_CONTENT.card1.items[1].label },
            { icon: <CursorSquare size={14} />, label: FEATURES_CONTENT.card1.items[2].label },
          ].map((it) => (
            <motion.div
              key={it.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ListItem icon={it.icon} label={it.label} active={it.active} />
            </motion.div>
          ))}
        </motion.div>
      </motion.article>

      {/* Card 3: অ্যানালিটিক্স ও এসইও */}
      <motion.article
        {...cardAnim(0.3)}
        onViewportEnter={() => setCountActive(true)}
        className="relative h-[380px] rounded-2xl overflow-hidden bg-card-warm text-card-warm-foreground"
      >
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <h3 className="mt-0.5 text-neutral-900 leading-tight text-xl sm:text-2xl font-medium">
              {FEATURES_CONTENT.card3.title}
            </h3>
          </div>
          <MoreH size={20} className="mt-2 shrink-0 text-neutral-800" />
        </div>
        <motion.div
          className="absolute bottom-14 left-0 w-full h-[140px] px-6 flex items-end justify-between gap-2.5 overflow-hidden"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
        >
          {["33%", "16%", "72%", "36%", "88%", "22%"].map((h) => (
            <motion.div
              key={h}
              className="relative w-full flex items-end"
              style={{ height: h }}
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.div
                className="relative w-full h-full flex flex-col"
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
              >
                <div className="w-full h-1 bg-black shrink-0 z-20" />
                <div className="relative w-full flex-1 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full z-0 opacity-80"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 16px)",
                      backgroundSize: "22.63px 22.63px",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black z-10"
                    variants={{
                      hidden: { y: "0%" },
                      visible: {
                        y: "-100%",
                        transition: {
                          duration: 0.4,
                          delay: 0.4,
                          ease: "easeOut",
                        },
                      },
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-14 flex items-end pb-4 px-6 gap-2">
          <span className="text-2xl sm:text-3xl text-neutral-900 font-bold leading-none">
            <CountUp end={FEATURES_CONTENT.card3.visitorCount} duration={3200} active={countActive} />+
          </span>
          <span className="text-xs sm:text-sm text-neutral-900 font-medium leading-none pb-0.5">
            {FEATURES_CONTENT.card3.visitorLabel}
          </span>
        </div>
      </motion.article>
    </div>
  );
}
