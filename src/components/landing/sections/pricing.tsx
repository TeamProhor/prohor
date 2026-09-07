"use client";

import * as motion from "motion/react-client";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const checkMarkUrl = ICONS + "CheckMark.svg";

export function Pricing({ className }: { className?: string }) {
  return (
    <section
      aria-label="মূল্য ও প্যাকেজ"
      className={`bg-black px-5 py-16 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-10">
          পরিকল্পনা ও প্যাকেজসমূহ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <PricingCard
            price="৳৯৯৯"
            description="ব্যক্তিগত প্রকল্প, ফ্রিল্যান্সার ও ক্রিয়েটরদের জন্য আদর্শ স্টার্টার প্যাকেজ"
            features={[
              { label: "৫টি পর্যন্ত কাস্টম ডোমেন কানেকশন" },
              { label: "প্রহর স্টুডিও ও ডিজাইন অ্যাক্সেস" },
              { label: "১০ জিবি S3 অবজেক্ট স্টোরেজ" },
              { label: "কাস্টম কালার প্যালেট ও কম্পোনেন্টস" },
              { label: "বেসিক অ্যানালিটিক্স ড্যাশবোর্ড" },
              { label: "কমিউনিটি ফোরাম সাপোর্ট" },
              { label: "বিকাশ ও নগদ পেমেন্ট চেকআউট", dim: true },
              { label: "প্রহর ক্লাউড ডেডিকেটেড নোড", dim: true },
              { label: "২৪/৭ প্রায়োরিটি সাপোর্ট", dim: true },
            ]}
            cta="শুরু করুন"
            ctaClass="bg-white text-neutral-950 hover:bg-neutral-200 transition-colors"
          />
          <PricingCard
            price="৳২,৯৯৯"
            description="বর্ধনশীল ব্যবসা, ডিজিটাল এজেন্সি এবং হাই-ট্রাফিক ওয়েবসাইটের জন্য সেরা পছন্দ"
            features={[
              { label: "আনলিমিটেড কাস্টম ডোমেন ও হোস্টিং" },
              { label: "প্রহর স্টুডিও প্রো কম্পোনেন্টস" },
              { label: "১০০ জিবি S3 অবজেক্ট স্টোরেজ" },
              { label: "ফুল-স্ট্যাক ই-কমার্স ও পেমেন্ট গেটওয়ে" },
              { label: "অ্যাডভান্সড রিয়েল-টাইম অ্যানালিটিক্স" },
              { label: "টিম কোলাবোরেশন ও ওয়ার্কস্পেস" },
              { label: "ঢাকা এজ CDN লোকাল ক্যাশিং" },
              { label: "প্রায়োরিটি ইমেইল ও চ্যাট সাপোর্ট" },
              { label: "কাস্টম ডেডিকেটেড ক্লাস্টার", dim: true },
            ]}
            cta="প্যাকেজ বেছে নিন"
            ctaClass="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors"
          />
          <PricingCard
            price="৳৯,৯৯৯"
            description="বৃহৎ প্রতিষ্ঠান, ফিনটেক ও এন্টারপ্রাইজ লেভেল স্কেলিং ও কাস্টম ক্লাউড অবকাঠামো"
            features={[
              { label: "আনলিমিটেড স্টোরেজ, ব্যান্ডউইথ ও ডোমেন" },
              { label: "প্রহর ক্লাউড ডেডিকেটেড VPS ক্লাস্টার" },
              { label: "এন্টারপ্রাইজ SSO ও আইডেন্টিটি ম্যানেজমেন্ট" },
              { label: "সম্পূর্ণ REST ও GraphQL API অ্যাক্সেস" },
              { label: "৯৯.৯৯% আপটাইম গ্যারান্টি (SLA)" },
              { label: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার" },
              { label: "২৪/৭ ফোন ও হোয়াটসঅ্যাপ সাপোর্ট" },
              { label: "কাস্টম সিকিউরিটি অডিট ও ভ্যাট চালান" },
              { label: "অন-প্রিমিসেস ডিপ্লয়মেন্ট সুবিধা" },
            ]}
            cta="যোগাযোগ করুন"
            ctaClass="bg-white text-neutral-950 hover:bg-neutral-200 transition-colors"
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
