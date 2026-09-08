"use client";

import type { ReactNode } from "react";
import * as motion from "motion/react-client";
import {
  Profile2user,
  Rocket,
  CreditCard,
  Server,
  Database,
  Puzzle,
} from "reicon-react";

const PILL_ITEMS: {
  label: string;
  icon: ReactNode;
  bgClass: string;
  iconBg: string;
  delay: number;
}[] = [
  {
    label: "ডিজাইনার ও ডেভেলপার ফ্রেন্ডলি",
    icon: <Profile2user size={15} />,
    bgClass: "bg-card-warm text-card-warm-foreground",
    iconBg: "bg-black/10 text-neutral-900",
    delay: 0.3,
  },
  {
    label: "ওয়ান-ক্লিক এজ ডিপ্লয়মেন্ট",
    icon: <Rocket size={15} />,
    bgClass: "bg-card-dark text-foreground border border-white/10",
    iconBg: "bg-white/10 text-white",
    delay: 0.4,
  },
  {
    label: "Prohor Pay পেমেন্ট গেটওয়ে",
    icon: <CreditCard size={15} />,
    bgClass: "bg-card-lavender text-card-lavender-foreground",
    iconBg: "bg-black/10 text-neutral-900",
    delay: 0.5,
  },
  {
    label: "বাংলাদেশি ক্লাউড ও ঢাকা রিজিয়ন",
    icon: <Server size={15} />,
    bgClass: "bg-card-dark text-foreground border border-white/10",
    iconBg: "bg-white/10 text-white",
    delay: 0.4,
  },
  {
    label: "S3-কম্প্যাটিবল অবজেক্ট স্টোরেজ",
    icon: <Database size={15} />,
    bgClass: "bg-card-dark text-foreground border border-white/10",
    iconBg: "bg-white/10 text-white",
    delay: 0.5,
  },
  {
    label: "মার্কেটপ্লেস ও প্লাগইন",
    icon: <Puzzle size={15} />,
    bgClass: "bg-card-dark text-foreground border border-white/10",
    iconBg: "bg-white/10 text-white",
    delay: 0.6,
  },
];

function PillReveal({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="grow flex"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Pill({
  label,
  icon,
  bgClass,
  iconBg,
}: {
  label: string;
  icon: ReactNode;
  bgClass: string;
  iconBg: string;
}) {
  return (
    <div
      className={`h-11 sm:h-12 w-full grow flex items-center gap-2.5 px-4 sm:px-5 rounded-xl cursor-pointer hover:scale-[1.02] transition-transform min-w-0 ${bgClass}`}
    >
      <div className={`size-6 sm:size-7 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-medium truncate">{label}</span>
    </div>
  );
}

export function Pills({
  className,
}: {
  className?: string;
}) {
  const row1 = PILL_ITEMS.slice(0, 3);
  const row2 = PILL_ITEMS.slice(3, 6);

  return (
    <section aria-label="প্রহর ফিচারসমূহ" className={`bg-black pb-12 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-2 lg:gap-2">
        <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
          {row1.map((p) => (
            <PillReveal key={p.label} delay={p.delay}>
              <Pill
                label={p.label}
                icon={p.icon}
                bgClass={p.bgClass}
                iconBg={p.iconBg}
              />
            </PillReveal>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
          {row2.map((p) => (
            <PillReveal key={p.label} delay={p.delay}>
              <Pill
                label={p.label}
                icon={p.icon}
                bgClass={p.bgClass}
                iconBg={p.iconBg}
              />
            </PillReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
