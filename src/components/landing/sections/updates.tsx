"use client";

import * as motion from "motion/react-client";
import { WordsReveal } from "../lib/animations";

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
            <WordsReveal
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 leading-tight"
              text="E-Endless designer updated and news"
              step={0.08}
              duration={0.6}
            />
            <WordsReveal
              as="p"
              className="text-sm sm:text-base opacity-60 text-neutral-100 leading-6"
              text="With its latest update, E-Endless pushes the boundaries of creativity even further, offering an array of new features and enhancements to elevate your design experience."
              step={0.04}
              delay={0.3}
              duration={0.5}
            />
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="inline-flex shrink-0 bg-white text-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            I want to learn more
          </motion.a>
        </header>

        <article className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          <motion.div
            className="w-full lg:w-[35%] shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
              <img src={cardAsset.url} alt="E-Endless announcement card" className="w-full h-auto block" />
            </div>
          </motion.div>

          <div className="w-full lg:w-[65%] flex flex-col relative pb-10">
            <div className="flex justify-between items-center mb-3">
              <WordsReveal as="h3" className="text-xl sm:text-2xl text-neutral-100" text="Announcement" step={0.1} duration={0.6} />
              <img src={whiteArrowUpRightUrl} alt="" width={18} height={18} />
            </div>
            <WordsReveal
              as="p"
              className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3"
              text="Revolutionize your design process with our latest AI design tool feature announcement! Introducing a groundbreaking addition to our toolkit that will transform the way you create."
              step={0.03}
              delay={0.2}
              duration={0.5}
            />
            <WordsReveal
              as="p"
              className="text-sm sm:text-base text-neutral-100 opacity-60 leading-6 mb-3"
              text="Packed with innovative features and enhancements, this release marks a significant milestone in revolutionizing the way you design and create."
              step={0.03}
              delay={0.4}
              duration={0.5}
            />
            <WordsReveal
              as="p"
              className="text-sm sm:text-base text-neutral-100 opacity-40 leading-6"
              text="Experience enhanced user experience, advanced AI capabilities, collaboration tools, an expanded asset library, performance improvements, customization options, integration with popular tools, enhanced security, and comprehensive tutorials and support – all in one update!"
              step={0.025}
              delay={0.6}
              duration={0.5}
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </article>
      </div>
    </section>
  );
}
