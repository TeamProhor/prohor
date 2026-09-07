"use client";

import * as motion from "motion/react-client";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const usersRoundUrl = ICONS + "users-round.svg";
const imagePlusUrl = ICONS + "image-plus.svg";
const copyUrl = ICONS + "Copy.svg";
const codeXmlUrl = ICONS + "code-xml.svg";
const webhookUrl = ICONS + "webhook.svg";

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
  return (
    <section aria-label="প্রহর ফিচারসমূহ" className={`bg-black pb-12 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-2 lg:gap-2">
        <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
          <PillReveal delay={0.3}>
            <Pill label="ডিজাইনার ও ডেভেলপার ফ্রেন্ডলি" icon={usersRoundUrl} bg="#D0C9B9" text="text-neutral-900" iconBg="bg-black/5" invertIcon />
          </PillReveal>
          <PillReveal delay={0.4}>
            <Pill label="ওয়ান-ক্লিক এজ ডিপ্লয়মেন্ট" icon={imagePlusUrl} bg="#131113" text="text-white" iconBg="bg-white/10" />
          </PillReveal>
          <PillReveal delay={0.5}>
            <Pill label="বিকাশ ও নগদ পেমেন্ট গেটওয়ে" icon={copyUrl} bg="#F7C8FF" text="text-neutral-900" iconBg="bg-black/5" invertIcon />
          </PillReveal>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-3">
          <PillReveal delay={0.4}>
            <Pill label="বাংলাদেশি ক্লাউড ও ঢাকা রিজিয়ন" icon={usersRoundUrl} bg="#131113" text="text-white" iconBg="bg-white/10" />
          </PillReveal>
          <PillReveal delay={0.5}>
            <Pill label="S3-কম্প্যাটিবল অবজেক্ট স্টোরেজ" icon={codeXmlUrl} bg="#131113" text="text-white" iconBg="bg-white/10" />
          </PillReveal>
          <PillReveal delay={0.6}>
            <Pill label="মার্কেটপ্লেস ও প্লাগইন" icon={webhookUrl} bg="#81FFBD" text="text-neutral-900" iconBg="bg-black/5" invertIcon />
          </PillReveal>
        </div>
      </div>
    </section>
  );
}
