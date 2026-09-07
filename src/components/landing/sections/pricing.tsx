"use client";

import * as motion from "motion/react-client";
import { Check } from "reicon-react";
import { PRICING_CONTENT, PricingPlan } from "@/lib/ui";

export function Pricing({ className }: { className?: string }) {
  return (
    <section
      id="pricing"
      aria-label="মূল্য ও প্যাকেজ"
      className={`bg-black px-5 py-16 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-10">
          {PRICING_CONTENT.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRICING_CONTENT.plans.map((plan) => (
            <PricingCard
              key={plan.price}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              ctaClass={plan.ctaClass}
            />
          ))}
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
}: PricingPlan) {
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.article
      className="flex flex-col mt-10 rounded-2xl border-white/10 border p-6 bg-card-dark shadow-2xl"
      initial="hidden"
      animate="visible"
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
        <span className="text-xs sm:text-sm text-neutral-500">/ প্রতি মাসে</span>
      </motion.div>
      <motion.p
        className="text-xs sm:text-sm text-neutral-400 mt-3 leading-6 min-h-[48px]"
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
              className={`size-4 bg-white/10 rounded-full flex justify-center items-center shrink-0 ${f.dim ? "opacity-30" : "text-emerald-400"}`}
            >
              <Check
                size={10}
                className={f.dim ? "text-neutral-500" : "text-emerald-400 stroke-[3]"}
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
