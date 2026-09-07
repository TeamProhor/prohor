"use client";

import * as motion from "motion/react-client";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const logoUrl = ICONS + "Logo.svg";

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
          <div className="md:col-span-4 flex items-center gap-3">
            <img
              src={logoUrl}
              alt="E-Endless"
              className="size-8"
            />
            <span className="text-lg sm:text-xl font-medium text-neutral-100" aria-label="E-Endless">
              E-Endless
            </span>
          </div>
          <nav aria-label="Company links" className="md:col-span-4 flex flex-col gap-3">
            <div>
              {["About", "Privacy policy", "Terms and conditions", "Contact us"].map((l) => (
                <a
                  key={l}
                  className="text-xs sm:text-sm font-medium text-neutral-100 cursor-pointer hover:opacity-70 transition-opacity block"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
          <nav aria-label="Social links" className="md:col-span-4 flex flex-col gap-3">
            <div>
              {["Twitter/X", "LinkedIn", "Instagram"].map((l) => (
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
              E-Endless- 2024
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs font-normal text-neutral-100 opacity-70 leading-5 max-w-[760px]">
              Our AI design tool is committed to protecting your privacy and data security. We collect only necessary information to enhance your user experience and provide personalized services. Your data is encrypted and securely stored, accessible only to authorized personnel. We do not share your information with third parties without your consent. Rest assured, your privacy is our top priority, and we adhere to strict privacy standards and regulations. For more details on how we handle your data, please refer to our comprehensive privacy policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
