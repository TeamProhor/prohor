"use client";

import * as motion from "motion/react-client";
import { FOOTER_CONTENT, ASSETS } from "@/lib/ui";

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
              src={ASSETS.logo}
              alt="প্রহর"
              className="h-8 w-auto object-contain"
            />
          </div>
          <nav aria-label="কোম্পানি লিংক" className="md:col-span-4 flex flex-col gap-3">
            <div>
              {FOOTER_CONTENT.companyLinks.map((l) => (
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
              {FOOTER_CONTENT.socialLinks.map((l) => (
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
              {FOOTER_CONTENT.copyright}
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-normal text-neutral-100 opacity-70 leading-5 max-w-[760px]">
              {FOOTER_CONTENT.privacyDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
