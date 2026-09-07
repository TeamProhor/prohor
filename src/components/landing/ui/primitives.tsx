"use client";

import React from "react";
import * as motion from "motion/react-client";

// ─── Card ─────────────────────────────────────────────────────────────────────
export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl bg-card border border-border overflow-hidden ${hover ? "aurora-card-accent" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Eyebrow pill ─────────────────────────────────────────────────────────────
function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 h-7 px-3 rounded-full bg-card border border-border text-[11px] uppercase tracking-[0.18em] text-muted-foreground ${className}`}
    >
      <span className="aurora-eyebrow-dot inline-block w-1.5 h-1.5 rounded-full" />
      {children}
    </span>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a =
    align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div
      className={`flex flex-col ${a} gap-5 max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
