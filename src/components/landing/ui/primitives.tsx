"use client";

import React from "react";
import * as motion from "motion/react-client";

// ─── Reveal on scroll ────────────────────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger ─────────────────────────────────────────────────────────────────
interface StaggerProps {
  children: React.ReactNode;
  base?: number;
  step?: number;
  className?: string;
}

export function Stagger({
  children,
  base = 0,
  step = 90,
  className = "",
}: StaggerProps) {
  const arr = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {arr.map((child, i) => (
        <Reveal key={i} delay={base + i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

// ─── Eyebrow pill ─────────────────────────────────────────────────────────────
export function Eyebrow({
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

// ─── Step pill ────────────────────────────────────────────────────────────────
export function StepItem({
  number,
  text,
  active = false,
  className = "",
}: {
  number: string | number;
  text: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 w-full rounded-xl px-4 py-3 transition-colors ${
        active
          ? "bg-accent/15 text-foreground border border-accent/30"
          : "bg-card text-muted-foreground border border-border"
      } ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-medium ${
          active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
        }`}
      >
        {number}
      </span>
      <span className="text-sm font-medium tracking-tight text-foreground">{text}</span>
    </div>
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
