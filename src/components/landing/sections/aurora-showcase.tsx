"use client";

import {
  Card,
  SectionHeader,
} from "@/components/landing/ui/primitives";

const SIDEBAR_ITEMS = [
  "Overview",
  "Components",
  "Data",
  "Workflows",
  "Edge",
  "Logs",
  "Billing",
];

const NODES = [
  {
    x: "2%",
    y: "10%",
    t: "Webhook",
    sub: "stripe.payment.success",
    active: true,
  },
  { x: "40%", y: "40%", t: "Transform", sub: "shape → Order", active: false },
  { x: "70%", y: "5%", t: "Notify", sub: "slack · #ops", active: false },
  { x: "70%", y: "70%", t: "Persist", sub: "orders.append", active: false },
];

const INSPECTOR_ROWS = [
  ["Source", "stripe"],
  ["Event", "payment.success"],
  ["Region", "iad1 · sfo3"],
  ["Retries", "3"],
  ["Timeout", "8s"],
];

export function AuroraShowcase({ className }: { className?: string }) {
  return (
    <section
      id="showcase"
      className={`relative px-6 lg:px-10 py-24 lg:py-32 bg-background aurora-glow-strong ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="A canvas for everything you ship."
          subtitle="Components, workflows, data, deployments — laid out in one calm surface. Reach for what you need, ignore the rest."
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
              <div className="hidden sm:flex items-center gap-2 h-7 px-3 rounded-full bg-background border border-border text-xs text-muted-foreground">
                aurora.studio / acme / production
              </div>
              <div className="text-xs text-muted-foreground/60 tabular-nums">12:48</div>
            </div>

            {/* App body */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="hidden lg:flex col-span-2 flex-col gap-1 rounded-2xl bg-background border border-border p-3">
                {SIDEBAR_ITEMS.map((s, i) => (
                  <div
                    key={s}
                    className={`px-3 h-9 rounded-xl flex items-center text-sm ${
                      i === 3
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
                      Workflow · checkout_v3
                    </div>
                    <div className="mt-1 text-xl font-medium tracking-tight text-foreground">
                      Order pipeline
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-8 px-3 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors cursor-pointer">
                      Preview
                    </button>
                    <button className="h-8 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer">
                      Deploy
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
                  <span>4 nodes · 3 edges · v3.14</span>
                  <span className="sm:hidden text-[10px] text-muted-foreground/60">← Scroll canvas →</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-foreground font-medium">Healthy</span>
                  </span>
                </div>
              </div>

              {/* Inspector */}
              <div className="col-span-12 lg:col-span-3 rounded-2xl bg-background border border-border p-5">
                <div className="text-xs text-muted-foreground/70 uppercase tracking-widest">
                  Inspector
                </div>
                <div className="mt-3 text-base font-medium tracking-tight text-foreground">
                  Webhook
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
                    Last 24h
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
                    <span>14,221 events</span>
                    <span className="text-success font-medium">+12%</span>
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
