"use client";

import { ChevronRight } from "lucide-react";

export function ProductDirectionSection({ className }: { className?: string }) {
  return (
    <section className={`relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-8 max-w-3xl">
          Set the product direction
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mb-16">
          <span className="text-foreground font-medium">Align your team around a unified product timeline.</span> Plan, manage, and track all product initiatives with Triggerly&apos;s visual planning tools.
        </p>

        <div className="relative w-full mb-16" style={{ perspective: "1200px" }}>
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-[400px]">
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
              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>30</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>AUG 3</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>10</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>17</div>
              <div className="absolute px-3 py-1 rounded-md bg-zinc-700/80 text-zinc-300 text-sm font-medium" style={{ left: "58%", top: "-10px" }}>AUG 22</div>
              <div className="absolute text-muted-foreground text-sm" style={{ left: "70%", top: "-5px" }}>24</div>
              <div className="absolute text-muted-foreground/50 text-sm" style={{ left: "88%", top: "-25px" }}>SEP</div>

              <div
                className="absolute rounded-xl bg-card border border-border px-4 py-3 flex items-center gap-3"
                style={{ left: "5%", top: "100px", width: "45%", height: "48px" }}
              >
                <div className="w-4 h-4 rotate-45 bg-muted" />
                <span className="text-foreground text-sm font-medium">Realtime inference</span>
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
                <span className="text-muted-foreground text-sm">Prototype</span>
              </div>
              <div
                className="absolute rounded-xl bg-card border border-border px-4 py-3 flex items-center justify-between"
                style={{ left: "45%", top: "155px", width: "45%", height: "48px" }}
              >
                <span className="text-muted-foreground text-sm">Beta</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                </div>
              </div>
              <div
                className="absolute rounded-xl bg-card/70 border border-border/60 px-4 py-3 flex items-center justify-between"
                style={{ left: "35%", top: "240px", width: "28%", height: "48px" }}
              >
                <span className="text-muted-foreground text-sm">RLHF fine tuning</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-r border-b border-border pt-10 pr-6 md:pr-10 pb-16">
            <h3 className="text-xl font-medium text-foreground mb-3">Manage projects end-to-end</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Consolidate specs, milestones, tasks, and other documentation in one centralized location.
            </p>
            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <h4 className="text-lg font-medium text-foreground mb-5">Project Overview</h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-muted-foreground text-sm w-20">Properties</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> In Progress
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <svg className="w-3 h-3 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="2" y="2" width="12" height="12" rx="2" />
                    </svg>{" "}
                    ENG
                  </span>
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-muted border border-background" />
                    <div className="w-5 h-5 rounded-full bg-muted-foreground/40 border border-background" />
                    <div className="w-5 h-5 rounded-full bg-muted border border-background" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-muted-foreground text-sm w-20">Resources</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-foreground text-xs">
                    <span className="text-accent">🚩</span> Exploration
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border text-muted-foreground text-xs">
                    <span className="text-secondary">⚠</span> User interviews
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-muted-foreground text-sm w-20 pt-1">Milestones</span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-accent" /> Design Review{" "}
                    <span className="text-muted-foreground">100%</span>
                  </span>
                  <span className="flex items-center gap-2 text-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-accent" /> Internal Alpha{" "}
                    <span className="text-muted-foreground">100% of 10</span>
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 border border-border bg-transparent" /> GA{" "}
                    <span className="text-muted-foreground">25% of 53</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-b border-border pt-10 pl-0 md:pl-10 pb-16">
            <h3 className="text-xl font-medium text-foreground mb-3">Project updates</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Communicate progress and project health with built-in project updates.
            </p>
            <div className="relative h-48">
              <div
                className="absolute rounded-xl bg-card/40 border border-border/40 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" /> Off track
                </span>
              </div>
              <div
                className="absolute rounded-xl bg-card/60 border border-border/60 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> At risk
                </span>
              </div>
              <div
                className="absolute rounded-2xl bg-card border border-border px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-success" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-success font-medium text-sm">On track</span>
                </div>
                <p className="text-foreground text-sm mb-3">We are ready to launch next Thursday</p>
                <span className="text-muted-foreground text-xs">Sep 8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <div className="border-r border-border pt-16 pr-6 md:pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-foreground mb-8 leading-tight">
              Ideate and specify
              <br />
              what to build next
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success" />
                <span className="text-foreground font-medium">Collaborative documents</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success/50" />
                <span className="text-muted-foreground">Inline comments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-success/30" />
                <span className="text-muted-foreground/60">Text-to-issue commands</span>
              </div>
            </div>
          </div>

          <div className="pt-10 pl-0 md:pl-10 pb-16">
            <div className="rounded-2xl border border-border bg-card/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border text-muted-foreground text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
                </svg>
                <span>Spice harvester</span>
                <span className="text-muted-foreground/40">›</span>
                <span>Project specs</span>
                <span className="ml-auto text-muted-foreground/40">•••</span>
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-xl bg-success/15 border border-success/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-success" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 8a2 2 0 100-4 2 2 0 000 4zM8 9c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="mb-3 relative inline-block">
                  <span className="text-foreground text-lg font-medium">Collaborate on</span>
                  <span className="relative mx-1">
                    <span className="text-foreground text-lg font-medium bg-success/20 px-0.5 rounded">ideas</span>
                    <span className="absolute -top-4 right-0 px-1.5 py-0.5 rounded text-[10px] bg-success text-white">
                      zoe
                    </span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Write down product ideas and work together on{" "}
                  <span className="relative inline">
                    <span className="bg-accent/20 text-foreground px-0.5 rounded">fea</span>
                    <span className="absolute -bottom-4 left-0 px-1.5 py-0.5 rounded text-[10px] bg-accent text-accent-foreground">
                      quinn
                    </span>
                  </span>
                  ture specs in realtime, multiplayer project documents. Add **style** and ##structure with rich-text formatting options.
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
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-muted rounded w-24" />
                    <div className="h-2 bg-muted/60 rounded w-16" />
                    <div className="h-2 bg-secondary/40 rounded w-20" />
                    <div className="h-2 bg-muted rounded w-8" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 bg-muted rounded w-12" />
                    <div className="h-2 bg-muted/60 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="4" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </svg>
              <span className="text-foreground font-medium">Initiatives</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">Coordinate strategic product efforts.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <path d="M2 10h16M10 2a15 15 0 010 16M10 2a15 15 0 000 16" />
              </svg>
              <span className="text-foreground font-medium">Cross-team projects</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">Collaborate across teams and departments.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rotate-45 bg-muted-foreground" />
              <span className="text-foreground font-medium">Milestones</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">Break projects down into concrete phases.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                <rect x="2" y="10" width="3" height="8" rx="1" />
                <rect x="7" y="6" width="3" height="12" rx="1" />
                <rect x="12" y="8" width="3" height="10" rx="1" />
                <rect x="17" y="4" width="3" height="14" rx="1" />
              </svg>
              <span className="text-foreground font-medium">Progress insights</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">Track scope, velocity, and progress over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDirectionSection;
