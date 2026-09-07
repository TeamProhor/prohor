"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { CountUp } from "../lib/animations";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const MEDIA = "https://qclay.design/lovable/codeba/";
const typeUrl = ICONS + "type.svg";
const imagePlusUrl = ICONS + "image-plus.svg";
const squareUrl = ICONS + "square.svg";
const threeDotUrl = ICONS + "ThreeDot.svg";
const womanAsset = { url: MEDIA + "woman.png" };

export function Features({ className }: { className?: string }) {
  return (
    <section
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
        className="flex flex-col gap-6 w-full md:max-w-[600px]"
      >
        <h2 className="text-2xl sm:text-3xl leading-tight text-neutral-100 font-normal">
          Create space for tools that matters. now create designs from scratch to stunning design with code in few seconds
        </h2>
        <div className="flex items-center gap-3">
          <button className="bg-white text-black rounded-xl px-4 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
            Join beta now
          </button>
          <span className="hidden md:block text-sm text-neutral-500">
            Make things fast
          </span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="hidden md:block text-base text-neutral-500 text-right shrink-0"
      >
        Make things fast
      </motion.p>
    </header>
  );
}

function ListItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
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
          active ? "bg-white/80" : "bg-white/5 border border-white/10"
        }`}
      >
        <img
          src={icon}
          alt=""
          width={14}
          height={14}
          style={active ? { filter: "invert(1)" } : undefined}
        />
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <motion.article
        {...cardAnim(0.1)}
        className="relative h-[380px] rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center text-center pt-8 px-5"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 31% -7%, rgba(255,255,255,0.05), transparent)",
        }}
      >
        <h3 className="text-xl sm:text-2xl text-neutral-100 leading-tight">
          An assistant to create your design
        </h3>
        <p className="mt-4 text-xs sm:text-sm opacity-40 text-neutral-100 max-w-[280px]">
          Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard
        </p>
        <motion.div
          className="absolute bottom-0 left-4 right-4 bg-white/5 border border-white/5 rounded-t-2xl p-2.5 pt-5 flex flex-col gap-1"
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
            { icon: typeUrl, label: "Headlines", active: true },
            { icon: imagePlusUrl, label: "Images and fill" },
            { icon: squareUrl, label: "Tools" },
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

      <motion.article
        {...cardAnim(0.3)}
        className="relative h-[380px] rounded-2xl overflow-hidden bg-neutral-900 flex flex-col items-center text-center pt-8 px-5"
      >
        <h3 className="text-xl sm:text-2xl text-neutral-100 leading-tight">
          AI helps generate images for free
        </h3>
        <p className="mt-4 text-xs sm:text-sm opacity-40 text-neutral-100 max-w-[300px]">
          With endless, all it takes to create professional-grade images is a browser and a story to tell—no experience required.
        </p>
        <motion.div
          className="mt-3 flex justify-center gap-1.5"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 1.0 }}
        >
          {["V1.0", "v2.0", "Remaster"].map((t) => (
            <motion.span
              key={t}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/10 text-neutral-100 text-[10px] opacity-40 rounded-md px-2 py-0.5"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-0 w-1/2 left-1/2 h-[180px]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          style={{ x: "-50%" }}
        >
          <img
            src={womanAsset.url}
            alt="AI generated image preview"
            className="w-full h-full object-cover object-top rounded-t-2xl"
          />
          <button
            className="absolute top-6 -right-5 bg-white text-black text-xs font-medium rounded-lg px-2 py-1 shadow-lg cursor-pointer"
            aria-label="Regenerate image"
          >
            Regenerate
          </button>
        </motion.div>
      </motion.article>

      <motion.article
        {...cardAnim(0.5)}
        onViewportEnter={() => setCountActive(true)}
        className="relative h-[380px] rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#D0C9B9" }}
      >
        <div className="flex items-start justify-between p-5 pb-0">
          <div>
            <h3 className="mt-0.5 text-center text-neutral-900 leading-tight text-xl sm:text-2xl font-normal">
              Our search engine optimization
            </h3>
          </div>
          <img src={threeDotUrl} alt="" className="mt-2 shrink-0" />
        </div>
        <motion.div
          className="absolute bottom-14 left-0 w-full h-[140px] px-5 flex items-end justify-between gap-2 overflow-hidden"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
        >
          {["33%", "16%", "72%", "36%", "88%", "22%"].map((h, i) => (
            <motion.div
              key={i}
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
                  <motion.div
                    className="absolute inset-0 w-full z-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 16px)",
                      backgroundSize: "22.63px 22.63px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "22.63px 0px"] }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 1.5,
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
        <div className="absolute bottom-0 left-0 w-full h-14 flex items-end pb-3 px-5 gap-2">
          <span className="text-2xl sm:text-3xl text-neutral-900 leading-none">
            <CountUp end={27000} duration={3200} active={countActive} />
          </span>
          <span className="text-xs sm:text-sm text-neutral-900/80 leading-none pb-0.5">
            new visitors
          </span>
        </div>
      </motion.article>
    </div>
  );
}
