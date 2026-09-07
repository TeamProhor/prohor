"use client";

import * as motion from "motion/react-client";
import { ChevronRight, Check, Paperclip, Globe, Lightbulb, Sparkle } from "reicon-react";

const agents = [
  { name: "৫.১ ফ্ল্যাশ (Flash)", isAgent: true, selected: true, version: "v5.1" },
  { name: "প্রো (Pro)", isAgent: true, selected: false, version: "v5.0" },
  { name: "এক্সটেন্ডেড (Extended)", isAgent: true, selected: false, version: "v4.5" },
  { name: "ফ্ল্যাশ লাইট (Flash Lite)", isAgent: true, selected: false, version: "v3.2" },
  { name: "প্রো ম্যাক্স (Pro Max)", isAgent: true, selected: false, version: "v5.1" },
];

export function AISection({ className }: { className?: string }) {
  return (
    <section className={`relative z-20 py-24 md:py-32 bg-background overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-foreground max-w-3xl mb-8 leading-tight"
          >
            এআই-চালিত ওয়েব ও প্রোডাক্ট ডেভেলপমেন্ট
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            <span className="text-foreground font-medium inline-flex items-center gap-1.5 align-middle">
              <img src="/prohor.webp" alt="প্রহর" className="h-5 w-auto object-contain inline-block" />
              <span>অ্যাপস ও এজেন্টস।</span>
            </span>{" "}
            স্মার্ট এআই এজেন্টের সাহায্যে ডিজাইন থেকে কোড রূপান্তর এবং ক্লাউড ম্যানেজমেন্টের কাজ সম্পন্ন করুন পলকে।
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-card text-foreground rounded-xl border border-border hover:bg-muted/80 transition-colors text-sm flex items-center gap-2 mb-16 cursor-pointer"
          >
            বিস্তারিত জানুন <ChevronRight className="w-4 h-4" />
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
                className="scale-[0.92] xs:scale-100 sm:scale-[1.08] md:scale-[1.12] origin-top"
                style={{
                  willChange: "transform",
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
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.02) sm:scale(1.04) rotateX(17deg)",
                              borderRadius: "8px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.1), inset 0 -0.75px 0.75px rgba(255, 255, 255, 0.08), 0 30px 60px rgba(0, 0, 0, 0.6)",
                              zIndex: 20,
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
                          <img
                            src="/prohor.webp"
                            alt="প্রহর"
                            className="h-3.5 sm:h-4 w-auto object-contain shrink-0 inline-block"
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
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-b border-border border-r-0 md:border-r pt-12 pr-0 md:pr-12 pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3">স্বয়ংক্রিয় প্রোডাক্ট অপারেশন</h3>
                <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                  রুটিনমাফিক কোড রিভিউ, বাগ ফিক্সিং এবং ডিপ্লয়মেন্ট নিশ্চিত করুন প্রহর ইন্টেলিজেন্সের সহায়তায়।
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkle size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">স্মার্ট ট্রায়াজ</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-sm w-20">পরামর্শ</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm bg-accent text-accent-foreground">
                        <span className="w-3 h-3 bg-white/40 rounded-full" />
                        <span>কোর ইঞ্জিন</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted/60 border border-border rounded-lg px-2 py-1 text-sm text-muted-foreground">
                        <span className="w-3 h-3 border border-border rounded" />
                        মোবাইল সাইট অপ্টিমাইজেশন
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-muted-foreground/60 rounded-full" />
                        নোটিফিকেশন
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-sm w-20">স্ট্যাটাস</span>
                    <span className="text-xs text-neutral-300">যাচাইকৃত সমাধান</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-muted-foreground text-sm w-20">সংযুক্ত</span>
                    <span className="text-xs text-neutral-300">ক্লাউড ডিপ্লয়মেন্ট পাইপলাইন</span>
                  </div>
                  <div className="bg-card border border-border/80 rounded-xl p-4 ml-0 md:ml-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 bg-muted rounded-full border border-border" />
                      <span className="text-foreground text-sm font-medium">তানভীর আহমেদ (টিম লিড)</span>
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">পরামর্শের যুক্তি</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      পূর্ববর্তী ডেটা অনুযায়ী এই অপ্টিমাইজেশনটি বাংলাদেশি মোবাইল নেটওয়ার্কে লোডিং স্পিড ৪৫% বাড়াবে।
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">বিকল্প ডেভেলপার</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 bg-muted/80 border border-border rounded-md px-2 py-1 text-sm">
                        <span className="w-4 h-4 bg-muted-foreground/40 rounded-full" />
                        <span className="text-muted-foreground">নিলয়</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted/80 border border-border rounded-md px-2 py-1 text-sm">
                        <span className="w-4 h-4 bg-muted-foreground/40 rounded-full" />
                        <span className="text-muted-foreground">ফারহান</span>
                      </span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 border border-border text-foreground text-sm py-2.5 rounded-xl transition-colors cursor-pointer">
                      <Check className="w-4 h-4 text-accent" /> পরামর্শ গ্রহণ করুন
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:border-t border-b border-border pt-12 pl-0 md:pl-12 pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3 flex items-center gap-2">
                  <img src="/prohor.webp" alt="প্রহর" className="h-5 w-auto object-contain" />
                  <span>এমসিপি (MCP)</span>
                </h3>
                <p className="text-muted-foreground text-base mb-8 leading-relaxed">
                  Cursor, Claude, ChatGPT এবং অন্যান্য এডিটর থেকে সরাসরি প্রহর ক্লাউড ও ডাটাবেস পরিচালনা করুন।
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-5 font-mono text-sm">
                  <p className="text-muted-foreground/60 mb-3">//mcp.prohor.dev/sse</p>
                  <div className="space-y-1 mb-6">
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
                  <div className="bg-card border border-border/80 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-muted-foreground/50" />
                      <span className="text-muted-foreground">যেকোনো প্রশ্ন বা নির্দেশ লিখুন...</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Paperclip className="w-3.5 h-3.5" /> ফাইল যুক্ত করুন
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Globe className="w-3.5 h-3.5" /> কোড সার্চ
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
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

export default AISection;
