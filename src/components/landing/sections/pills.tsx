"use client";

import * as motion from "motion/react-client";
import { PILLS_CONTENT } from "@/lib/ui";

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
  bg,
  text,
  iconBg,
  invertIcon = false,
}: {
  label: string;
  icon: string;
  bg: string;
  text: string;
  iconBg: string;
  invertIcon?: boolean;
}) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`h-11 sm:h-12 w-full grow flex items-center gap-2.5 px-4 sm:px-5 rounded-xl cursor-pointer hover:scale-[1.02] transition-transform min-w-0 ${text}`}
    >
      <div className={`size-6 sm:size-7 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
        <img src={icon} alt="" width={14} height={14} style={invertIcon ? { filter: "brightness(0)" } : undefined} />
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
  const row1 = PILLS_CONTENT.slice(0, 3);
  const row2 = PILLS_CONTENT.slice(3, 6);

  return (
    <section aria-label="প্রহর ফিচারসমূহ" className={`bg-black pb-12 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-2 lg:gap-2">
        <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
          {row1.map((p) => (
            <PillReveal key={p.label} delay={p.delay}>
              <Pill
                label={p.label}
                icon={p.icon}
                bg={p.bg}
                text={p.text}
                iconBg={p.iconBg}
                invertIcon={p.invertIcon}
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
                bg={p.bg}
                text={p.text}
                iconBg={p.iconBg}
                invertIcon={p.invertIcon}
              />
            </PillReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
