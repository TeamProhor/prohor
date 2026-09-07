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
    <section aria-label="News and updates" className={`bg-black ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col gap-8 relative">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 leading-tight">
              E-Endless designer updated and news
            </h2>
            <p className="text-sm sm:text-base opacity-60 text-neutral-100 leading-6">
              With its latest update, E-Endless pushes the boundaries of creativity even further, offering an array of new features and enhancements to elevate your design experience.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 bg-white text-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            I want to learn more
          </a>
        </header>

        <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          <div className="w-full lg:w-[35%] shrink-0">
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
              <img src={cardAsset.url} alt="E-Endless announcement card" className="w-full h-auto block" />
            </div>
          </div>

          <div className="w-full lg:w-[65%] flex flex-col relative pb-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl sm:text-2xl text-neutral-100">Announcement</h3>
              <img src={whiteArrowUpRightUrl} alt="" width={18} height={18} />
            </div>
            <p className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3">
              Revolutionize your design process with our latest AI design tool feature announcement! Introducing a groundbreaking addition to our toolkit that will transform the way you create.
            </p>
            <p className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3">
              Packed with innovative features and enhancements, this release marks a significant milestone in revolutionizing the way you design and create.
            </p>
            <p className="text-sm sm:text-base text-neutral-100 opacity-40 leading-6">
              Experience enhanced user experience, advanced AI capabilities, collaboration tools, an expanded asset library, performance improvements, customization options, integration with popular tools, enhanced security, and comprehensive tutorials and support – all in one update!
            </p>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </article>
      </div>
    </section>
  );
}
