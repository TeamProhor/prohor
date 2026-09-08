"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import {
  ChevronRight,
  Check,
  Paperclip,
  Globe,
  Lightbulb,
  Sparkle,
  Cpu,
  Mobile,
  Bell,
  Link,
  User,
  CheckCircle,
} from "reicon-react";
import { AI_SECTION_CONTENT, ASSETS } from "@/lib/ui";

export function AISection({ className }: { className?: string }) {
  return (
    <section id="ai" className={`relative z-20 py-24 md:py-32 bg-background overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-foreground max-w-3xl mb-6 sm:mb-8 leading-tight"
          >
            {AI_SECTION_CONTENT.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base"
          >
            <span className="text-foreground font-medium inline-flex items-center gap-1.5 align-middle">
              <Image src={ASSETS.logo} alt="প্রহর" width={200} height={200} unoptimized className="h-5 w-auto inline-block align-middle" />
              <span>{AI_SECTION_CONTENT.subtitleHighlight}</span>
            </span>{" "}
            {AI_SECTION_CONTENT.subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-card text-foreground rounded-xl border border-border hover:bg-muted/80 transition-colors text-sm flex items-center gap-2 mb-12 sm:mb-16 cursor-pointer"
          >
            {AI_SECTION_CONTENT.ctaText} <ChevronRight className="w-4 h-4" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-16 sm:mb-24 w-full overflow-hidden px-2 sm:px-0"
          >
            <div
              className="w-full max-w-[720px] relative select-none"
              style={{
                perspective: "900px",
              }}
            >
              <div
                className="scale-[0.92] xs:scale-100 sm:scale-[1.08] md:scale-[1.12] origin-top will-change-transform transform-gpu"
                style={{
                  transform: "translateY(0%) rotateX(20deg)",
                  position: "relative",
                }}
              >
                <div
                  className="rounded-xl border border-border absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.04) 40%, rgba(0, 0, 0, 0.2) 100%)",
                    boxShadow: "inset 0 1.5px 5px rgba(255, 255, 255, 0.04), inset 0 -1px 1px rgba(255, 255, 255, 0.06)",
                  }}
                />
                <div
                  className="absolute left-[-20px] right-[-20px] sm:left-[-180px] sm:right-[-180px] bottom-[-2px] h-[80%] pointer-events-none z-11"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, var(--background) 100%)",
                  }}
                />
                <div className="bg-card/70 border border-border rounded-t-xl px-4 sm:px-5 py-3 sm:py-4">
                  <span className="text-muted-foreground/60 italic text-xs sm:text-sm">মডেল নির্বাচন করুন...</span>
                </div>
                <div className="bg-card/90 border border-t-0 border-border rounded-b-xl py-1">
                  {AI_SECTION_CONTENT.agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              opacity: 1,
                              height: "48px",
                              marginLeft: "-6px",
                              marginRight: "-6px",
                            }
                          : { opacity: 1 - index * 0.15, height: "42px" }
                      }
                      className={agent.selected ? "bg-muted border border-border" : ""}
                    >
                      <div
                        className="flex items-center justify-between h-full px-3 sm:px-6 gap-2 sm:gap-3"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <Image
                            src={ASSETS.logo}
                            alt="প্রহর"
                            width={200}
                            height={200}
                            unoptimized
                            className="h-3.5 sm:h-4 w-auto shrink-0 inline-block"
                          />
                          <span className={`truncate text-xs sm:text-sm ${agent.selected ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                            {agent.name}
                          </span>
                          <span className="text-[9px] sm:text-[10px] bg-muted text-muted-foreground px-1 sm:px-1.5 py-0.5 rounded border border-border shrink-0">
                            {agent.version}
                          </span>
                        </div>
                        {agent.selected && <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent shrink-0" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-b border-border border-r-0 md:border-r pt-8 sm:pt-12 pr-0 md:pr-12 pb-12 sm:pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3">{AI_SECTION_CONTENT.operations.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {AI_SECTION_CONTENT.operations.description}
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-4 sm:mb-5">
                    <Sparkle size={16} className="text-accent" />
                    <span className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">{AI_SECTION_CONTENT.operations.smartTriage}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-xs sm:text-sm w-16 sm:w-20">পরামর্শ</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs sm:text-sm bg-accent text-accent-foreground font-medium shadow-xs">
                        <Cpu size={14} className="shrink-0 text-white" />
                        <span>কোর ইঞ্জিন</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted/60 border border-border rounded-lg px-2.5 py-1 text-xs sm:text-sm text-muted-foreground">
                        <Mobile size={14} className="shrink-0 text-muted-foreground" />
                        <span>মোবাইল সাইট অপ্টিমাইজেশন</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground px-1.5 py-1">
                        <Bell size={14} className="shrink-0 text-muted-foreground" />
                        <span>নোটিফিকেশন</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-xs sm:text-sm w-16 sm:w-20">স্ট্যাটাস</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      <CheckCircle size={13} className="shrink-0 text-emerald-400" />
                      যাচাইকৃত সমাধান
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-muted-foreground text-xs sm:text-sm w-16 sm:w-20">সংযুক্ত</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-muted/50 border border-border px-2 py-0.5 rounded-md">
                      <Link size={13} className="shrink-0 text-muted-foreground" />
                      ক্লাউড ডিপ্লয়মেন্ট পাইপলাইন
                    </span>
                  </div>
                  <div className="bg-card border-0 sm:border border-border/80 rounded-xl p-3 sm:p-4 ml-0 md:ml-4">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                        <User size={13} />
                      </div>
                      <span className="text-foreground text-sm font-medium">{AI_SECTION_CONTENT.operations.leadName}</span>
                    </div>
                    <p className="text-muted-foreground text-xs mb-1.5 font-medium">পরামর্শের যুক্তি</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mb-4 leading-relaxed bg-muted/30 p-2.5 sm:p-3 rounded-lg border-0 sm:border border-border/50">
                      {AI_SECTION_CONTENT.operations.reasoning}
                    </p>
                    <p className="text-muted-foreground text-xs mb-2 font-medium">বিকল্প ডেভেলপার</p>
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      {AI_SECTION_CONTENT.operations.backupDevelopers.map((dev) => (
                        <span key={dev} className="flex items-center gap-1.5 bg-muted/80 border border-border rounded-md px-2.5 py-1 text-xs sm:text-sm text-foreground">
                          <User size={13} className="text-muted-foreground" />
                          <span>{dev}</span>
                        </span>
                      ))}
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 font-medium text-sm py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm">
                      <Check size={16} className="text-black stroke-[2.5]" /> {AI_SECTION_CONTENT.operations.acceptSuggestionCta}
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:border-t border-b border-border pt-8 sm:pt-12 pl-0 md:pl-12 pb-12 sm:pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3 flex items-center gap-2">
                  <Image src={ASSETS.logo} alt="প্রহর" width={200} height={200} unoptimized className="h-5 w-auto" />
                  <span>{AI_SECTION_CONTENT.mcp.title}</span>
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {AI_SECTION_CONTENT.mcp.description}
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-4 sm:p-5 text-sm">
                  <p className="font-mono text-muted-foreground/60 mb-3 text-xs sm:text-sm">{AI_SECTION_CONTENT.mcp.endpoint}</p>
                  <div className="space-y-1 mb-6 font-mono text-xs sm:text-sm">
                    <p>
                      <span className="text-secondary">&quot;mcpServers&quot;</span>
                      <span className="text-muted-foreground">: {"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-secondary">&quot;prohor&quot;</span>
                      <span className="text-muted-foreground">: {"{"}</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-secondary">&quot;command&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-accent">&quot;npx prohor-mcp&quot;</span>
                    </p>
                  </div>
                  <div className="bg-card border-0 sm:border border-border/80 rounded-xl p-3 sm:p-4 font-sans">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-muted-foreground/50" />
                      <span className="text-muted-foreground text-xs sm:text-sm">{AI_SECTION_CONTENT.mcp.placeholderInput}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Paperclip className="w-3.5 h-3.5" /> ফাইল যুক্ত করুন
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Globe className="w-3.5 h-3.5" /> কোড সার্চ
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-xs sm:text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Lightbulb className="w-3.5 h-3.5" /> এআই বিশ্লেষণ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
