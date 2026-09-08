"use client";

import { useState } from "react";
import { Copy, Plus, Cursor, Check, Layout, Code2, Sparkles, Layers, Sliders, Play } from "reicon-react";
import { MAD_FOR_DESIGNER_CONTENT } from "@/lib/ui";

export function MadForDesigner({
  className,
}: {
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"studio" | "code">("studio");
  const [activeTheme, setActiveTheme] = useState<"emerald" | "indigo" | "amber">("emerald");
  const [borderRadius, setBorderRadius] = useState<number>(14);

  const themeColors = {
    emerald: {
      primary: "#10B981",
      glow: "rgba(16, 185, 129, 0.2)",
      text: "text-emerald-400",
      bg: "bg-emerald-500",
      border: "border-emerald-500/30",
    },
    indigo: {
      primary: "#6366F1",
      glow: "rgba(99, 102, 241, 0.2)",
      text: "text-indigo-400",
      bg: "bg-indigo-500",
      border: "border-indigo-500/30",
    },
    amber: {
      primary: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.2)",
      text: "text-amber-400",
      bg: "bg-amber-500",
      border: "border-amber-500/30",
    },
  };

  const dynamicCodeSnippet = `/* Prohor Design System - Live Token Specs */
:root {
  --prohor-brand-primary: "${themeColors[activeTheme].primary}";
  --prohor-border-radius: ${borderRadius}px;
  --prohor-local-gateway: "Prohor Pay (Dhaka Node-01)";
  --prohor-font-family: "Hind Siliguri", sans-serif;
  --prohor-blur-backdrop: blur(16px);
  --prohor-mode: "production-ready";
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dynamicCodeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section
      aria-label="ডিজাইনার ও ডেভেলপারদের জন্য"
      className={`bg-black px-4 sm:px-6 md:px-8 py-10 sm:py-16 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Context & Information */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit text-xs text-neutral-300">
            <Sparkles size={13} className="text-emerald-400" />
            <span>স্টুডিও ও কোড ইন্টিগ্রেশন</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-white font-medium">
            {MAD_FOR_DESIGNER_CONTENT.title}
          </h2>
          <p className="text-sm sm:text-base opacity-70 text-neutral-200 max-w-[460px] leading-relaxed">
            {MAD_FOR_DESIGNER_CONTENT.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-1 max-w-[420px]">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-white text-xs sm:text-sm font-medium flex items-center gap-1.5">
                <Layout size={14} className="text-emerald-400" />
                <span>ভিজ্যুয়াল ক্যানভাস</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                লাইভ কম্পোনেন্ট টুইকিং ও ডিরেক্ট প্রিভিউ
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-white text-xs sm:text-sm font-medium flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-400" />
                <span>অটোমেটেড কোড</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                এক ক্লিকে প্রডাকশন রেডি CSS টোকেন এক্সপোর্ট
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 pt-2 flex-wrap">
            <button
              onClick={() => setActiveTab("studio")}
              className="bg-white text-black px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              {MAD_FOR_DESIGNER_CONTENT.cta1}
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className="bg-white/10 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Code2 size={14} />
              <span>{MAD_FOR_DESIGNER_CONTENT.cta2}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Redesigned Interactive Studio & Code Playground (No external image) */}
        <div className="rounded-2xl border border-white/10 overflow-hidden flex flex-col bg-zinc-950/80 shadow-2xl backdrop-blur-xl relative">
          {/* Top Window Bar */}
          <div className="flex justify-between items-center px-3.5 sm:px-4 py-3 border-b border-white/10 bg-zinc-900/60 gap-2">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex p-0.5 bg-black/60 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveTab("studio")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-all cursor-pointer ${
                  activeTab === "studio"
                    ? "bg-white/15 text-white font-medium shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Layout size={12} />
                <span>স্টুডিও</span>
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-all cursor-pointer ${
                  activeTab === "code"
                    ? "bg-white/15 text-white font-medium shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Code2 size={12} />
                <span>কোড</span>
              </button>
            </div>

            {/* Export / Action Button */}
            <button
              onClick={handleCopy}
              className="bg-white text-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors cursor-pointer shrink-0 flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span>কপি হয়েছে</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>{MAD_FOR_DESIGNER_CONTENT.exportCta}</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Workspace Area */}
          <div className="relative min-h-[340px] sm:min-h-[380px] p-4 sm:p-6 bg-gradient-to-b from-zinc-900/30 to-black/90 flex flex-col justify-between">
            {/* Subtle background grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {activeTab === "studio" ? (
              /* Studio Canvas Mode */
              <div className="relative z-10 flex flex-col justify-between h-full gap-5">
                {/* Canvas Header Controls */}
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">থিম প্রিসেট:</span>
                    <div className="flex items-center gap-1.5">
                      {(["emerald", "indigo", "amber"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTheme(t)}
                          className={`size-5 rounded-full transition-transform cursor-pointer ${
                            activeTheme === t ? "scale-125 ring-2 ring-white/50" : "opacity-60 hover:opacity-100"
                          } ${
                            t === "emerald"
                              ? "bg-emerald-500"
                              : t === "indigo"
                              ? "bg-indigo-500"
                              : "bg-amber-500"
                          }`}
                          aria-label={`${t} theme`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">রেডিয়াস: {borderRadius}px</span>
                    <input
                      type="range"
                      min={4}
                      max={24}
                      value={borderRadius}
                      onChange={(e) => setBorderRadius(Number(e.target.value))}
                      className="w-20 sm:w-24 accent-white cursor-pointer h-1.5 bg-white/20 rounded-lg"
                    />
                  </div>
                </div>

                {/* Live Interactive UI Component Box */}
                <div className="flex items-center justify-center py-4">
                  <div
                    style={{
                      borderRadius: `${borderRadius}px`,
                      boxShadow: `0 10px 30px ${themeColors[activeTheme].glow}`,
                    }}
                    className="w-full max-w-sm p-5 bg-zinc-900/90 border border-white/10 backdrop-blur-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div
                          style={{ borderRadius: `${Math.max(borderRadius - 4, 4)}px` }}
                          className={`size-8 ${themeColors[activeTheme].bg} text-black font-semibold flex items-center justify-center text-xs shadow-md`}
                        >
                          প্র
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-white">
                            প্রহর চেকআউট মডিউল
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            ঢাকা রিজিয়ন · আল্ট্রাফাস্ট
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-neutral-300 font-mono">
                        v2.4
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">পেমেন্ট গেটওয়ে:</span>
                        <span className="text-white font-medium">Prohor Pay (SSL)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">রেসপন্স ল্যাটেন্সি:</span>
                        <span className={`${themeColors[activeTheme].text} font-mono font-medium`}>
                          ৪ ms
                        </span>
                      </div>
                    </div>

                    <button
                      style={{
                        borderRadius: `${Math.max(borderRadius - 2, 6)}px`,
                      }}
                      className="mt-4 w-full py-2 bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play size={12} className="fill-black" />
                      <span>লাইভ ট্রানজ্যাকশন প্রিভিউ</span>
                    </button>
                  </div>
                </div>

                {/* Studio Footer Status */}
                <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ক্যানভাস অ্যাক্টিভ · সিঙ্কড</span>
                  </div>
                  <button
                    onClick={() => setActiveTab("code")}
                    className="hover:text-neutral-300 transition-colors text-neutral-400 underline underline-offset-4 cursor-pointer"
                  >
                    কোড টোকেন দেখুন &rarr;
                  </button>
                </div>
              </div>
            ) : (
              /* Code Editor Mode */
              <div className="relative z-10 flex flex-col justify-between h-full gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <Code2 size={13} className="text-neutral-300" />
                    <span>tokens.css</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-neutral-300 hover:text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copied ? "কপি হয়েছে" : "কপি কোড"}</span>
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl bg-black/80 border border-white/10 p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                  <pre className="whitespace-pre">
                    <code>{dynamicCodeSnippet}</code>
                  </pre>
                </div>

                <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-2 border-t border-white/5">
                  <span>CSS Custom Properties (Variables)</span>
                  <button
                    onClick={() => setActiveTab("studio")}
                    className="hover:text-neutral-300 transition-colors text-neutral-400 underline underline-offset-4 cursor-pointer"
                  >
                    &larr; ক্যানভাসে ফিরে যান
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
