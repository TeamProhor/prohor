"use client";

import { ChevronRight, Check, Document, User, Target, Globe, Chart, Flag, AlertTriangle } from "reicon-react";

export function ProductDirectionSection({ className }: { className?: string }) {
  return (
    <section className={`relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-background overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-6 sm:mb-8 max-w-3xl flex items-center gap-3 flex-wrap">
          <img src="/prohor.webp" alt="প্রহর" className="h-8 md:h-11 w-auto object-contain inline-block" />
          <span>টিমস: দলগত কাজের রোডম্যাপ</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-10 sm:mb-16 leading-relaxed">
          <span className="text-foreground font-medium">একই প্ল্যাটফর্মে পুরো টিমকে রাখুন সারিবদ্ধ।</span> ডিজাইন, ডেভেলপমেন্ট এবং বিজনেস উদ্যোগের অগ্রগতি ট্র্যাক করুন প্রহর টিমস-এর মাধ্যমে।
        </p>

        <div className="sm:hidden text-center text-xs text-muted-foreground/60 mb-2">← টাইমলাইন স্ক্রল করে দেখুন →</div>
        <div className="relative w-full mb-16 overflow-x-auto aurora-no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" style={{ perspective: "1200px" }}>
          <div className="min-w-[560px] sm:min-w-0">
            <div
              className="relative"
              style={{
                transform: "rotateX(42deg) rotateZ(-28deg)",
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              <div className="relative h-[380px] sm:h-[400px]">
                <div
                  className="absolute w-[1px] bg-zinc-600/50"
                  style={{
                    height: "600px",
                    left: "55%",
                    top: "-100px",
                    transform: "rotate(0deg)",
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 flex items-end">
                  <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-zinc-600/60"
                        style={{ width: "1px", height: i % 7 === 0 ? "16px" : "8px" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>০১</div>
                <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>আগস্ট ০৩</div>
                <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>১০</div>
                <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>১৭</div>
                <div className="absolute px-3 py-1 rounded-md bg-zinc-700/80 text-zinc-300 text-sm font-medium" style={{ left: "58%", top: "-10px" }}>আগস্ট ২২</div>
                <div className="absolute text-muted-foreground text-sm" style={{ left: "70%", top: "-5px" }}>২৪</div>
                <div className="absolute text-muted-foreground/50 text-sm" style={{ left: "88%", top: "-25px" }}>সেপ্টেম্বর</div>

                <div
                  className="absolute rounded-xl bg-card border border-border px-4 py-3 flex items-center gap-3"
                  style={{ left: "5%", top: "100px", width: "45%", height: "48px" }}
                >
                  <div className="w-4 h-4 rotate-45 bg-muted" />
                  <span className="text-foreground text-sm font-medium truncate">রিয়েলটাইম প্রিভিউ</span>
                  <div
                    className="absolute w-5 h-5 rotate-45 border-2 border-success bg-transparent"
                    style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                  />
                </div>
                <div
                  className="absolute rounded-xl bg-card/70 border border-border/60 px-4 py-3 flex items-center gap-3"
                  style={{ left: "15%", top: "155px", width: "25%", height: "44px" }}
                >
                  <div className="w-3 h-3 rotate-45 bg-muted" />
                  <span className="text-muted-foreground text-sm truncate">প্রোটোটাইপ</span>
                </div>
                <div
                  className="absolute rounded-xl bg-card border border-border px-4 py-3 flex items-center justify-between"
                  style={{ left: "45%", top: "155px", width: "45%", height: "48px" }}
                >
                  <span className="text-muted-foreground text-sm truncate">বেটা রিলিজ</span>
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                    <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                    <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                  </div>
                </div>
                <div
                  className="absolute rounded-xl bg-card/70 border border-border/60 px-4 py-3 flex items-center justify-between"
                  style={{ left: "35%", top: "240px", width: "32%", height: "48px" }}
                >
                  <span className="text-muted-foreground text-sm truncate">পেমেন্ট গেটওয়ে</span>
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                    <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-b border-border border-r-0 md:border-r pt-10 pr-0 md:pr-10 pb-16">
            <h3 className="text-xl font-medium text-foreground mb-3">এন্ড-টু-এন্ড প্রজেক্ট ম্যানেজমেন্ট</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              স্পেসিফিকেশন, মাইলস্টোন, কাজের তালিকা ও প্রয়োজনীয় ডকুমেন্টেশন রাখুন এক কেন্দ্রীয় ঠিকানায়।
            </p>
            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <h4 className="text-lg font-medium text-foreground mb-5">প্রজেক্ট ওভারভিউ</h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-muted-foreground text-sm w-20">প্রপার্টিজ</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> চলমান কাজ
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <Document size={12} className="text-muted-foreground" />{" "}
                    ইঞ্জিনিয়ারিং
                  </span>
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-muted border border-background" />
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/40 border border-background" />
                    <div className="w-5 h-5 rounded-full bg-muted border border-background" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-muted-foreground text-sm w-20">রিসোর্সেস</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <Flag size={12} className="text-accent" /> এক্সপ্লোরেশন
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-muted-foreground text-xs">
                    <AlertTriangle size={12} className="text-secondary" /> কাস্টমার ফিডব্যাক
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-muted-foreground text-sm w-20 pt-1">মাইলস্টোন</span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-accent" /> ইউআই ডিজাইন রিভিউ{" "}
                    <span className="text-muted-foreground">১০০%</span>
                  </span>
                  <span className="flex items-center gap-2 text-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-accent" /> স্টুডিও আলফা{" "}
                    <span className="text-muted-foreground">১০০%</span>
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 border border-border bg-transparent" /> ফাইনাল প্রোডাকশন ডিপ্লয়{" "}
                    <span className="text-muted-foreground">৮০% সম্পন্ন</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:border-t border-b border-border pt-10 pl-0 md:pl-10 pb-16">
            <h3 className="text-xl font-medium text-foreground mb-3">লাইভ প্রজেক্ট ও রিলিজ আপডেট</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              সহকর্মী ও অংশীদারদের সাথে রিয়েলটাইমে প্রজেক্টের অগ্রগতি এবং কাজের অবস্থা ভাগাভাগি করুন।
            </p>
            <div className="relative h-48">
              <div
                className="absolute rounded-xl bg-card/40 border border-border/40 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" /> ট্র্যাকের বাইরে
                </span>
              </div>
              <div
                className="absolute rounded-xl bg-card/60 border border-border/60 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> রিভিউ প্রয়োজন
                </span>
              </div>
              <div
                className="absolute rounded-2xl bg-card border border-border px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                    <Check size={12} className="text-success" />
                  </span>
                  <span className="text-success font-medium text-sm">সফল ও প্রস্তুত</span>
                </div>
                <p className="text-foreground text-sm mb-3">নতুন সংস্করণ আগামী বৃহস্পতিবার উন্মোচনের জন্য প্রস্তুত</p>
                <span className="text-muted-foreground text-xs">৮ সেপ্টেম্বর</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-border pt-16 pr-0 md:pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-foreground mb-8 leading-tight">
              আইডিয়া তৈরি করুন
              <br />
              এবং কী বানাবেন তা নির্ধারণ করুন
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success" />
                <span className="text-foreground font-medium">টিম কোলাবোরেশন ডকুমেন্টস</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success/50" />
                <span className="text-muted-foreground">ইনলাইন কমেন্টস ও রিভিউ</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success/30" />
                <span className="text-muted-foreground/60">কমান্ড দিয়ে কাজ বণ্টন</span>
              </div>
            </div>
          </div>

          <div className="pt-10 pl-0 md:pl-10 pb-16">
            <div className="rounded-2xl border border-border bg-card/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-muted-foreground text-sm">
                <Document size={16} />
                <span>স্টুডিও</span>
                <span className="text-muted-foreground/40">›</span>
                <span>প্রজেক্ট স্পেক্স</span>
                <span className="ml-auto text-muted-foreground/40">•••</span>
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-xl bg-success/15 border border-success/20 flex items-center justify-center mb-4">
                  <User size={20} className="text-success" />
                </div>
                <div className="mb-3 relative inline-block">
                  <span className="text-foreground text-lg font-medium">একসাথে গড়ুন</span>
                  <span className="relative mx-1">
                    <span className="text-foreground text-lg font-medium bg-success/20 px-1 rounded">আইডিয়া</span>
                    <span className="absolute -top-4 right-0 px-1.5 py-0.5 rounded text-[10px] bg-success text-white">
                      সাকিব
                    </span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 pt-1">
                  আপনার ডিজিটাল ব্যবসার ভাবনাগুলো সহজে লিখে রাখুন এবং রিয়েলটাইমে{" "}
                  <span className="relative inline">
                    <span className="bg-accent/20 text-foreground px-1 rounded">টিম</span>
                    <span className="absolute -bottom-4 left-0 px-1.5 py-0.5 rounded text-[10px] bg-accent text-accent-foreground">
                      রাফসান
                    </span>
                  </span>
                  -এর সাথে কোলাবোরেট করে সুন্দর স্পেসিফিকেশন তৈরি করুন।
                </p>
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-muted rounded w-16" />
                    <div className="h-2 bg-muted/60 rounded w-24" />
                    <div className="h-2 bg-muted rounded w-12" />
                    <div className="h-2 bg-secondary/40 rounded w-20" />
                    <div className="h-2 bg-muted/60 rounded w-16" />
                    <div className="h-2 bg-muted rounded w-28" />
                    <div className="h-2 bg-secondary/40 rounded w-8" />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-muted/60 rounded w-20" />
                    <div className="h-2 bg-muted rounded w-8" />
                    <div className="h-2 bg-muted/60 rounded w-28" />
                    <div className="h-2 bg-secondary/40 rounded w-12" />
                    <div className="h-2 bg-muted rounded w-16" />
                    <div className="h-2 bg-muted/60 rounded w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target size={20} className="text-muted-foreground" />
              <span className="text-foreground font-medium">কৌশলগত উদ্যোগ</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">প্রতিষ্ঠানের গুরুত্বপূর্ণ লক্ষ্যগুলোর সমন্বয় করুন।</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={20} className="text-muted-foreground" />
              <span className="text-foreground font-medium">ক্রস-টিম প্রজেক্ট</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">ডিজাইনার, ডেভেলপার ও ব্যবসায়ীদের মাঝে সহজ যোগাযোগ।</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rotate-45 bg-muted-foreground" />
              <span className="text-foreground font-medium">নির্দিষ্ট মাইলস্টোন</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">বড় প্রজেক্টকে সহজ ধাপে ভাগ করে সফল সমাপ্তি।</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Chart size={20} className="text-muted-foreground" />
              <span className="text-foreground font-medium">অগ্রগতি বিশ্লেষণ</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">কাজের গতি ও ফলাফল নিখুঁতভাবে পর্যবেক্ষণ করুন।</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDirectionSection;
