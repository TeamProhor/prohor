"use client";

import * as motion from "motion/react-client";

export function Footer({
  className,
}: {
  className?: string;
}) {
  return (
    <footer
      className={`bg-black border-t border-neutral-100/20 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 flex items-center">
            <img
              src="/prohor.webp"
              alt="প্রহর"
              className="h-8 w-auto object-contain"
            />
          </div>
          <nav aria-label="কোম্পানি লিংক" className="md:col-span-4 flex flex-col gap-3">
            <div>
              {["আমাদের সম্পর্কে", "প্রাইভেসি পলিসি", "শর্তাবলী ও নীতিমালা", "যোগাযোগ"].map((l) => (
                <a
                  key={l}
                  className="text-xs sm:text-sm font-medium text-neutral-100 cursor-pointer hover:opacity-70 transition-opacity block"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
          <nav aria-label="সোশ্যাল লিংক" className="md:col-span-4 flex flex-col gap-3">
            <div>
              {["টুইটার / X", "লিঙ্কডইন", "ইনস্টাগ্রাম"].map((l) => (
                <a
                  key={l}
                  className="text-xs sm:text-sm font-medium text-neutral-100 cursor-pointer hover:opacity-70 transition-opacity block"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-4">
            <p className="text-xs font-medium text-neutral-100">
              প্রহর - ২০২৬
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-normal text-neutral-100 opacity-70 leading-5 max-w-[760px]">
              প্রহর আপনার গোপনীয়তা ও ডেটা সুরক্ষায় প্রতিশ্রুতিবদ্ধ। আমাদের ক্লাউড অবকাঠামো, S3-কম্প্যাটিবল স্টোরেজ ও বিকাশ/নগদ পেমেন্ট গেটওয়ে কঠোর এনক্রিপশন মানদণ্ড মেনে পরিচালিত হয়। আপনার ডেটা এনক্রিপ্ট করা থাকে এবং গ্রাহকের অনুমতি ছাড়া কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
