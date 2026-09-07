"use client";

import * as motion from "motion/react-client";

const MEDIA = "https://qclay.design/lovable/codeba/";
const ICONS = "https://qclay.design/lovable/codeba/icons/";
const cardAsset = { url: MEDIA + "Card.png" };
const whiteArrowUpRightUrl = ICONS + "WhiteArrowUpRight.svg";

export function Updates({
  className,
}: {
  className?: string;
}) {
  return (
    <section aria-label="সংবাদ ও আপডেট" className={`bg-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col gap-8 relative">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 leading-tight flex items-center gap-2.5 flex-wrap">
              <img src="/prohor.webp" alt="প্রহর" className="h-7 sm:h-9 w-auto object-contain" />
              <span>ইকোসিস্টেমের নতুন আপডেট ও ঘোষণা</span>
            </h2>
            <p className="text-sm sm:text-base opacity-60 text-neutral-100 leading-6">
              বাংলাদেশের ডিজিটাল ভবিষ্যৎকে আরও গতিশীল করতে প্রহর প্ল্যাটফর্মে প্রতিনিয়ত যুক্ত হচ্ছে নতুন টুলস, দেশীয় পেমেন্ট ইন্টিগ্রেশন এবং ক্লাউড সমাধান।
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 bg-white text-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            আরও জানুন
          </a>
        </header>

        <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          <div className="w-full lg:w-[35%] shrink-0">
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
              <img src={cardAsset.url} alt="প্রহর ক্লাউড ঘোষণা" className="w-full h-auto block" />
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col relative pb-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl sm:text-2xl text-neutral-100">নতুন ঘোষণা</h3>
              <img src={whiteArrowUpRightUrl} alt="" width={18} height={18} />
            </div>
            <p className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3">
              প্রহর ক্লাউডের নতুন ঢাকা ডেটাসেন্টার আনুষ্ঠানিকভাবে চালু হয়েছে! এখন থেকে আপনার ওয়েবসাইটের লেটেন্সি নেমে আসবে ১০ মিলি-সেকেন্ডের নিচে।
            </p>
            <p className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3">
              সরাসরি বিকাশ ও নগদ পেমেন্ট গেটওয়ে ওয়েবহুক প্রসেসিং এবং S3-কম্প্যাটিবল অবজেক্ট স্টোরেজের মাধ্যমে সারা দেশের গ্রাহকদের দিন চোখের পলকে ব্রাউজিং অভিজ্ঞতা।
            </p>
            <p className="text-sm sm:text-base text-neutral-100 opacity-40 leading-6">
              পাশাপাশি প্রহর স্টুডিওতে যুক্ত হয়েছে ড্র্যাগ-অ্যান্ড-ড্রপ ই-কমার্স শপ বিল্ডার, বাংলা ফন্ট রেন্ডারিং ইঞ্জিন ও স্বয়ংক্রিয় লোকাল এসইও অপটিমাইজেশন।
            </p>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </article>
      </div>
    </section>
  );
}
