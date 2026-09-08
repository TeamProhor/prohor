"use client";

import {
  Card,
  SectionHeader,
} from "@/components/landing/ui/primitives";
import { AURORA_SHOWCASE_CONTENT } from "@/lib/ui";

export function AuroraShowcase({ className }: { className?: string }) {
  return (
    <section
      id="showcase"
      className={`relative px-4 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-32 bg-background aurora-glow-strong ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={AURORA_SHOWCASE_CONTENT.title}
          subtitle={AURORA_SHOWCASE_CONTENT.subtitle}
        />

        <div className="mt-12 sm:mt-16">
          <Card className="p-3 lg:p-4 border-border bg-card">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-2 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="hidden sm:flex items-center gap-2 h-7 px-3 rounded-full bg-background border border-border text-xs text-muted-foreground font-mono">
                {AURORA_SHOWCASE_CONTENT.environmentTag}
              </div>
              <div className="text-xs text-muted-foreground/60 tabular-nums">{AURORA_SHOWCASE_CONTENT.time}</div>
            </div>

            {/* App body */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="hidden lg:flex col-span-2 flex-col gap-1 rounded-2xl bg-background border border-border p-3">
                {AURORA_SHOWCASE_CONTENT.sidebarItems.map((s, i) => (
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
                    <div className="text-xl font-medium tracking-tight text-foreground">
                      {AURORA_SHOWCASE_CONTENT.workflowTitle}
                    </div>
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
                    {AURORA_SHOWCASE_CONTENT.nodes.map((n) => (
                      <div
                        key={n.t}
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

                <div className="mt-4 flex items-center justify-center text-[11px] text-muted-foreground">
                  <span className="sm:hidden text-[10px] text-muted-foreground/60">← স্ক্রল করে ক্যানভাস দেখুন →</span>
                </div>
              </div>

              {/* Inspector */}
              <div className="col-span-12 lg:col-span-3 rounded-2xl bg-background border border-border p-5">
                <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                  ইনস্পেক্টর
                </div>
                <div className="mt-3 text-base font-medium tracking-tight text-foreground">
                  {AURORA_SHOWCASE_CONTENT.inspectorTitle}
                </div>
                <div className="mt-4 space-y-3">
                  {AURORA_SHOWCASE_CONTENT.inspectorRows.map(([k, v]) => (
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
                    {AURORA_SHOWCASE_CONTENT.trafficTitle}
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
                    <span>{AURORA_SHOWCASE_CONTENT.trafficRequests}</span>
                    <span className="text-success font-medium">{AURORA_SHOWCASE_CONTENT.trafficGrowth}</span>
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
