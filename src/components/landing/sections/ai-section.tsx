"use client";

import * as motion from "motion/react-client";
import { ChevronRight, Check, Paperclip, Globe, Lightbulb } from "lucide-react";

const agents = [
  { name: "Cursor", isAgent: true, selected: true, icon: "◇" },
  { name: "GitHub Copilot", isAgent: true, selected: false, icon: "◉" },
  { name: "Sentry", isAgent: true, selected: false, icon: "◈" },
  { name: "Leela", isAgent: false, selected: false, icon: "○" },
  { name: "Codex", isAgent: true, selected: false, icon: "◎" },
  { name: "Conor", isAgent: false, selected: false, icon: "○" },
];

export function AISection({ className }: { className?: string }) {
  return (
    <section className={`relative z-20 py-24 md:py-32 bg-background ${className ?? ""}`}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-muted-foreground text-sm">Artificial intelligence</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-foreground max-w-3xl mb-8"
          >
            AI-assisted product development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md mb-8"
          >
            <span className="text-foreground font-medium">Triggerly for Agents.</span> Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-card text-foreground rounded-xl border border-border hover:bg-muted/80 transition-colors text-sm flex items-center gap-2 mb-16 cursor-pointer"
          >
            Learn more <ChevronRight className="w-4 h-4" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
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
                  className="absolute left-[-180px] right-[-180px] bottom-[-2px] h-[80%] pointer-events-none z-11"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, var(--background) 100%)",
                  }}
                />
                <div className="bg-card/70 border border-border rounded-t-xl px-5 py-4">
                  <span className="text-muted-foreground/60 italic text-sm">Assign to...</span>
                </div>
                <div className="bg-card/90 border border-t-0 border-border rounded-b-xl py-1">
                  {agents.map((agent, index) => (
                    <div
                      key={agent.name}
                      style={
                        agent.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              borderRadius: "8px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.1), inset 0 -0.75px 0.75px rgba(255, 255, 255, 0.08), 0 30px 60px rgba(0, 0, 0, 0.6)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : { opacity: 1 - index * 0.15, height: "42px" }
                      }
                      className={agent.selected ? "bg-muted border border-border" : ""}
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-lg">{agent.icon}</span>
                          <span className={agent.selected ? "text-foreground font-medium" : "text-muted-foreground"}>
                            {agent.name}
                          </span>
                          {agent.isAgent && (
                            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border">
                              Agent
                            </span>
                          )}
                        </div>
                        {agent.selected && <Check className="w-4 h-4 text-accent" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-border pt-12 pr-6 md:pr-12 pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3">Self-driving product operations</h3>
                <p className="text-muted-foreground text-base mb-8">
                  Streamline your product development workflows with AI assistance for routine, manual tasks.
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" />
                    </svg>
                    <span className="text-muted-foreground text-sm">
                      Triage <span className="text-foreground font-medium">Intelligence</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-sm w-20">Suggestions</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm bg-accent text-accent-foreground">
                        <span className="w-3 h-3 bg-white/40 rounded-full" />
                        <span>nan</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted/60 border border-border rounded-lg px-2 py-1 text-sm text-muted-foreground">
                        <span className="w-3 h-3 border border-border rounded" />
                        Mobile App Refactor
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-muted-foreground/60 rounded-full" />
                        Slack
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-sm w-20">Duplicate of</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-muted-foreground text-sm w-20">Related to</span>
                  </div>
                  <div className="bg-card border border-border/80 rounded-xl p-4 ml-0 md:ml-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 bg-muted rounded-full border border-border" />
                      <span className="text-foreground text-sm font-medium">nan</span>
                    </div>
                    <p className="text-muted-foreground text-xs mb-2">Why this assignee was suggested</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      This person was the assignee on previous issues related to performance problems in the mobile app launch flow
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">Alternatives</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1.5 bg-muted/80 border border-border rounded-md px-2 py-1 text-sm">
                        <span className="w-4 h-4 bg-muted-foreground/40 rounded-full" />
                        <span className="text-muted-foreground">yann</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-muted/80 border border-border rounded-md px-2 py-1 text-sm">
                        <span className="w-4 h-4 bg-muted-foreground/40 rounded-full" />
                        <span className="text-muted-foreground">erin</span>
                      </span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 border border-border text-foreground text-sm py-2.5 rounded-xl transition-colors cursor-pointer">
                      <Check className="w-4 h-4 text-accent" /> Accept suggestion
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-border pt-12 pl-0 md:pl-12 pb-16">
                <h3 className="text-foreground font-medium text-xl mb-3">Triggerly MCP</h3>
                <p className="text-muted-foreground text-base mb-8">
                  Connect Triggerly to your favorite tools including Cursor, Claude, ChatGPT, and more.
                </p>
                <div className="bg-card/50 border border-border rounded-2xl p-5 font-mono text-sm">
                  <p className="text-muted-foreground/60 mb-3">//mcp.triggerly.app/sse</p>
                  <div className="space-y-1 mb-6">
                    <p>
                      <span className="text-secondary">&quot;mcpServers&quot;</span>
                      <span className="text-muted-foreground">: {"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-secondary">&quot;triggerly&quot;</span>
                      <span className="text-muted-foreground">: {"{"}</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-secondary">&quot;command&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-accent">&quot;npx&quot;</span>
                    </p>
                  </div>
                  <div className="bg-card border border-border/80 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-muted-foreground/50" />
                      <span className="text-muted-foreground">Ask anything</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Paperclip className="w-3.5 h-3.5" /> Attach
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Globe className="w-3.5 h-3.5" /> Search
                      </button>
                      <button className="flex items-center gap-1.5 border border-border text-muted-foreground text-sm px-3 py-1.5 rounded-full hover:bg-muted/60 hover:text-foreground transition-colors cursor-pointer">
                        <Lightbulb className="w-3.5 h-3.5" /> Reason
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
