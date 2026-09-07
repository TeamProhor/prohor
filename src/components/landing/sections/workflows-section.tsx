"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, ArrowRight, MessageSquare, BranchUp, X, Puzzle, Figma, Calendar } from "reicon-react";

const carouselCards = [
  { id: 1, category: "কাস্টমার রিকোয়েস্ট", title: "গ্রাহকরা যা চান ঠিক তা-ই তৈরি করুন", icon: ArrowRight, mockup: "intercom" },
  { id: 2, category: "শক্তিশালী গিট ওয়ার্কফ্লো", title: "পুল রিকোয়েস্ট ও কমিট ওয়ার্কফ্লো অটোমেট করুন", icon: Plus, mockup: "github" },
  { id: 3, category: "প্রহর মোবাইল", title: "যেকোনো প্রান্ত থেকে প্রজেক্টের কাজ এগিয়ে নিন", icon: ArrowRight, mockup: "mobile" },
  { id: 4, category: "প্রহর আস্কস", title: "কাজের রিকোয়েস্টগুলোকে সমাধানযোগ্য ইস্যুতে রূপান্তর করুন", icon: ArrowRight, mockup: "asks" },
  { id: 5, category: "প্রহর ইন্টিগ্রেশনস", title: "১০০+ উপায়ে বৃদ্ধি করুন প্রহরের অভিজ্ঞতা", icon: ArrowRight, mockup: "integrations" },
  { id: 6, category: "ফিগমা ইন্টিগ্রেশন", title: "ইঞ্জিনিয়ারিং ও ডিজাইনের দূরত্ব দূর করুন", icon: ArrowRight, mockup: "figma" },
  { id: 7, category: "ডেভেলপারদের জন্য নির্মিত", title: "প্রহর এপিআই দিয়ে তৈরি করুন নিজস্ব অ্যাড-অন", icon: ArrowRight, mockup: "api" },
];

function IntercomMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>ইন্টারকম</span>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-muted-foreground/70">support@prohor.dev</span>
      </div>
      <p className="text-sm text-foreground">
        আমাদের মাল্টি-ক্লাউড খরচের হিসাব <span className="text-muted-foreground">প্রয়োজন...</span>
      </p>
      <div className="mt-2 flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2">
        <div className="w-5 h-5 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-[10px] text-muted-foreground">প্র</span>
        </div>
        <span className="text-sm text-foreground">প্রহর কমার্স</span>
        <span className="text-xs text-muted-foreground">নতুন রিকোয়েস্ট</span>
      </div>
      <div className="mt-1 flex items-center gap-2 bg-card/60 border border-border/60 rounded-xl px-3 py-2">
        <div className="w-5 h-5 bg-secondary/20 rounded-lg flex items-center justify-center">
          <span className="text-[10px] text-secondary">◆</span>
        </div>
        <span className="text-sm text-muted-foreground">মাল্টি-ক্লাউড ড্যাশবোর্ড</span>
        <span className="text-xs text-muted-foreground/60">খরচ</span>
      </div>
      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 rounded-full border border-border" />
        <span className="text-sm text-muted-foreground">পরিকল্পনা</span>
        <div className="ml-2 flex items-center gap-1 text-xs text-muted-foreground/60">
          <Calendar className="w-3.5 h-3.5" />
          <span>২০২৬</span>
        </div>
      </div>
    </div>
  );
}

function GitHubMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs">
        <BranchUp className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">#২০৩১৯</span>
        <span className="text-muted-foreground/70">শাকিল/ডিপ্লয়</span>
        <span className="text-accent">সোর্স যোগ...</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground/60">↗</span>
          <span className="text-muted-foreground">শাকিল</span>
          <span className="text-muted-foreground/60">সংযুক্ত করেছেন</span>
          <span className="text-accent">শাকিল/ডিপ্লয়</span>
          <span className="text-muted-foreground/60">সোর্স...</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground/60">↗</span>
          <span className="text-muted-foreground">শাকিল</span>
          <span className="text-muted-foreground/60">স্ট্যাটাস: চলতি কাজ...</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground/60">↗</span>
          <span className="text-muted-foreground">গিটহাব</span>
          <span className="text-muted-foreground/60">স্ট্যাটাস: কোড রিভিউ...</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground/60">↗</span>
          <span className="text-muted-foreground">শাকিল</span>
          <span className="text-muted-foreground/60">স্ট্যাটাস: ডিপ্লয় প্রস্তুত...</span>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-card rounded-2xl border border-border overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-muted rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-muted-foreground mb-2">ইনবক্স</div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-6 bg-muted/40 rounded-lg mb-1" />
          ))}
        </div>
      </div>
    </div>
  );
}

function AsksMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center">
        <X className="w-12 h-12 text-muted-foreground" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function IntegrationsMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FigmaMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <Figma className="w-16 h-16 text-muted-foreground" />
    </div>
  );
}

function ApiMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-card rounded-xl px-4 py-2 border border-border">
        <span className="text-xs font-mono text-muted-foreground">প্রহর এপিআই</span>
      </div>
    </div>
  );
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "intercom":
      return <IntercomMockup />;
    case "github":
      return <GitHubMockup />;
    case "mobile":
      return <MobileMockup />;
    case "asks":
      return <AsksMockup />;
    case "integrations":
      return <IntegrationsMockup />;
    case "figma":
      return <FigmaMockup />;
    case "api":
      return <ApiMockup />;
    default:
      return null;
  }
}

export function WorkflowsSection({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth || 300;
    const scrollAmount = cardWidth + 16;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={`relative py-24 bg-background ${className ?? ""}`}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 sm:mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm text-muted-foreground">ওয়ার্কফ্লো ও ইন্টিগ্রেশন</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
              টুলস ও টিমের নির্বিঘ্ন
              <br />
              কোলাবোরেশন
            </h2>
          </div>
          <p className="text-muted-foreground lg:max-w-sm lg:pt-12 text-sm sm:text-base leading-relaxed">
            সিস্টেমের সক্ষমতা বৃদ্ধি করুন বিস্তৃত ইন্টিগ্রেশনের মাধ্যমে, যা আপনার প্রতিষ্ঠানের সবাইকে এক সূত্রে সংযুক্ত এবং লক্ষ্যমুখী রাখবে।
          </p>
        </div>

        <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
          <div
            ref={containerRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto aurora-no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 pt-1 px-1"
          >
            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[82vw] max-w-[320px] sm:w-[280px] lg:w-[calc(25%-12px)] snap-start"
              >
                <div className="bg-card/70 border border-border rounded-2xl overflow-hidden h-[340px] flex flex-col">
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{ background: "linear-gradient(to top, var(--card), transparent)" }}
                    />
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-1">{card.category}</p>
                        <p className="text-sm text-foreground font-medium leading-snug">{card.title}</p>
                      </div>
                      <button
                        aria-label={card.title}
                        className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors cursor-pointer"
                      >
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="পূর্ববর্তী"
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="পরবর্তী"
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkflowsSection;
