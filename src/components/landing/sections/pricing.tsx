"use client";

import * as motion from "motion/react-client";
import { WordsReveal } from "../lib/animations";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const checkMarkUrl = ICONS + "CheckMark.svg";

export function Pricing({ className }: { className?: string }) {
  return (
    <section
      aria-label="Pricing"
      className={`bg-black px-5 py-16 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <WordsReveal
          as="h2"
          className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-10"
          text="Plans and Pricing"
          step={0.1}
          duration={0.6}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <PricingCard
            price="$20"
            description="Upgrade to unlock additional features for a more comprehensive and freedom designs"
            features={[
              { label: "Up to 5 Design System LITE" },
              { label: "Standard components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Basic analytics dashboard" },
              { label: "Community support" },
              { label: "AI Co-Producer™", dim: true },
              { label: "Priority support", dim: true },
              { label: "Team collaboration", dim: true },
            ]}
            cta="Get Started"
            ctaClass="bg-white text-neutral-950"
          />
          <PricingCard
            price="$59"
            description="Elevate your design game with advanced tools and exclusive features."
            features={[
              { label: "Unlimited Design System LITE" },
              { label: "Pro components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Advanced analytics dashboard" },
              { label: "Team collaboration" },
              { label: "AI Co-Producer™" },
              { label: "Priority support" },
              { label: "API access", dim: true },
            ]}
            cta="Send Message"
            ctaClass="bg-transparent text-white border border-white/20"
          />
          <PricingCard
            price="$99"
            description="Get everything you need with full access to all premium features and enterprise-grade tools."
            features={[
              { label: "Unlimited Design System LITE" },
              { label: "Pro + Enterprise components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Enterprise analytics dashboard" },
              { label: "Team collaboration" },
              { label: "AI Co-Producer™" },
              { label: "24/7 Priority support" },
              { label: "Full API access" },
            ]}
            cta="Contact Sales"
            ctaClass="bg-white text-neutral-950"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  price,
  description,
  features,
  cta,
  ctaClass,
}: {
  price: string;
  description: string;
  features: { label: string; dim?: boolean }[];
  cta: string;
  ctaClass: string;
}) {
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.article
      className="flex flex-col mt-10 rounded-2xl border-white/10 border p-6"
      style={{
        backgroundColor: "#0F0D0D",
        boxShadow: "0 20px 50px -20px rgba(0,0,0,0.8)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
    >
      <motion.div
        className="flex items-baseline gap-2"
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <span className="text-xl sm:text-2xl font-medium text-white">
          {price}
        </span>
        <span className="text-xs sm:text-sm text-neutral-500">/ Per Month</span>
      </motion.div>
      <motion.p
        className="text-xs sm:text-sm text-neutral-400 mt-3 leading-6"
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {description}
      </motion.p>
      <motion.div
        className="border-t border-white/10 my-3"
        variants={item}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="flex flex-col gap-3 flex-1">
        {features.map((f) => (
          <motion.div
            key={f.label}
            className="flex items-center gap-3"
            variants={item}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div
              className={`size-4 bg-white/10 rounded-full flex justify-center items-center shrink-0 ${f.dim ? "opacity-40" : ""}`}
            >
              <img
                src={checkMarkUrl}
                alt=""
                width={12}
                height={12}
                className="opacity-80"
              />
            </div>
            <span
              className={`text-xs sm:text-sm ${f.dim ? "text-neutral-500" : "text-neutral-100"}`}
            >
              {f.label}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.button
        className={`w-full py-2.5 rounded-xl font-medium mt-5 cursor-pointer text-xs sm:text-sm ${ctaClass}`}
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {cta}
      </motion.button>
    </motion.article>
  );
}
