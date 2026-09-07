"use client";

import {
  Card,
  SectionHeader,
} from "@/components/landing/ui/primitives";

const SIDEBAR_ITEMS = [
  "ওভারভিউ",
  "স্টুডিও",
  "ক্লাউড হোস্টিং",
  "এসথ্রি স্টোরেজ",
  "ডোমেন ও ডিএনএস",
  "লগস",
  "বিলিং (টাকা ৳)",
];

const NODES = [
  {
    x: "2%",
    y: "10%",
    t: "পেমেন্ট ওয়েবহুক",
    sub: "bkash.payment.success",
    active: true,
  },
  { x: "40%", y: "40%", t: "পেমেন্ট প্রসেসর", sub: "অর্ডার তৈরি ও যাচাই", active: false },
  { x: "70%", y: "5%", t: "এসএমএস এলার্ট", sub: "গ্রাহককে তাৎক্ষণিক বার্তা", active: false },
  { x: "70%", y: "70%", t: "ক্লাউড ডাটাবেস", sub: "orders.insert()", active: false },
];

const INSPECTOR_ROWS = [
  ["উৎস", "বিকাশ / নগদ API"],
  ["ইভেন্ট", "পেমেন্ট সম্পন্ন"],
  ["সার্ভার রিজিয়ন", "ঢাকা · ক্লাউড-১"],
  ["রিট্রাই সীমা", "৩ বার"],
  ["গড় ল্যাটেন্সি", "৮ ms"],
];

export function AuroraShowcase({ className }: { className?: string }) {
  return (
    <section
      id="showcase"
      className={`relative px-6 lg:px-10 py-24 lg:py-32 bg-background aurora-glow-strong ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="আপনার সম্পূর্ণ ডিজিটাল আর্কিটেকচার — এক ক্যানভাসে।"
          subtitle="ওয়েবসাইট কম্পোনেন্ট, ওয়ার্কফ্লো, ডাটাবেস ও লাইভ ডিপ্লয়মেন্ট — সবকিছু এক শান্ত, স্বাচ্ছন্দ্যময় সারফেসে নিয়ন্ত্রণ করুন।"
        />

        <div className="mt-16">
          <Card className="p-3 lg:p-4 border-border bg-card">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-2 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="hidden sm:flex items-center gap-2 h-7 px-3 rounded-full bg-background border border-border text-xs text-muted-foreground font-mono">
                prohor.cloud / acme-bangladesh / production
              </div>
              <div className="text-xs text-muted-foreground/60 tabular-nums">১২:৪৮</div>
            </div>

            {/* App body */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="hidden lg:flex col-span-2 flex-col gap-1 rounded-2xl bg-background border border-border p-3">
                {SIDEBAR_ITEMS.map((s, i) => (
                  <div
                    key={s}
                    className={`px-3 h-9 rounded-xl flex items-center text-sm ${
                      i === 2
                        ? "bg-muted text-foreground font-medium border border-border"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40 cursor-pointer transition-colors"
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              {/* Canvas */}
              <div className="col-span-12 lg:col-span-7 rounded-2xl bg-background border border-border p-5 min-h-[460px] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                      ওয়ার্কফ্লো · অটো_ডিপ্লয়_v২
                    </div>
                    <div className="mt-1 text-xl font-medium tracking-tight text-foreground">
                      অর্ডার ও পেমেন্ট পাইপলাইন
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-8 px-3 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors cursor-pointer">
                      প্রিভিউ
                    </button>
                    <button className="h-8 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer">
                      ডিপ্লয়
                    </button>
                  </div>
                </div>

                {/* Node graph */}
                <div className="overflow-x-auto aurora-no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
                  <div className="relative mt-8 h-72 min-w-[520px] sm:min-w-0">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 600 280"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M90 60 C160 60, 200 140, 280 140"
                        stroke="currentColor"
                        className="text-border"
                        strokeWidth="1.5"
                        strokeDasharray="3 4"
                      />
                      <path
                        d="M280 140 C360 140, 400 60, 480 60"
                        stroke="currentColor"
                        className="text-border"
                        strokeWidth="1.5"
                        strokeDasharray="3 4"
                      />
                      <path
                        d="M280 140 C360 140, 400 220, 480 220"
                        stroke="currentColor"
                        className="text-border"
                        strokeWidth="1.5"
                        strokeDasharray="3 4"
                      />
                    </svg>
                    {NODES.map((n, i) => (
                      <div
                        key={i}
                        style={{ left: n.x, top: n.y }}
                        className="absolute w-44"
                      >
                        <div
                          className={`rounded-xl border p-3 ${
                            n.active
                              ? "bg-accent/10 text-foreground border-accent/40"
                              : "bg-card border-border text-foreground"
                          }`}
                        >
                          <div className="text-xs font-medium text-foreground">{n.t}</div>
                          <div
                            className={`text-[11px] mt-0.5 ${n.active ? "text-accent" : "text-muted-foreground"}`}
                          >
                            {n.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>৪টি নোড · ৩টি এজ · ক্লাউড v২.৪</span>
                  <span className="sm:hidden text-[10px] text-muted-foreground/60">← স্ক্রল করে ক্যানভাস দেখুন →</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-foreground font-medium">সক্রিয় ও সুরক্ষিত</span>
                  </span>
                </div>
              </div>

              {/* Inspector */}
              <div className="col-span-12 lg:col-span-3 rounded-2xl bg-background border border-border p-5">
                <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                  ইনস্পেক্টর
                </div>
                <div className="mt-3 text-base font-medium tracking-tight text-foreground">
                  পেমেন্ট গেটওয়ে
                </div>
                <div className="mt-4 space-y-3">
                  {INSPECTOR_ROWS.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-muted-foreground">{k}</span>
                      <span className="text-foreground font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                    গত ২৪ ঘণ্টার ট্রাফিক
                  </div>
                  <div className="mt-3 flex items-end gap-[1.5px] sm:gap-[3px] h-16">
                    {Array.from({ length: 36 }).map((_, k) => (
                      <span
                        key={k}
                        style={{ height: `${20 + ((k * 13) % 70)}%` }}
                        className={`flex-1 rounded-sm ${k === 33 ? "bg-accent" : "bg-muted"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>১৪,২২১টি সফল রিকোয়েস্ট</span>
                    <span className="text-success font-medium">+১২% বৃদ্ধি</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AuroraShowcase;
