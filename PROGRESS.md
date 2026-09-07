# Prohor (প্রহর) — Development & Localization Progress Report

> **Last Updated:** September 2026  
> **Repository:** `prohor.dev`  
> **Tech Stack:** Next.js 16.3.4 (Turbopack), React 19, Tailwind CSS v4, Motion (Framer Motion)  
> **Build Status:** ✅ Production Build Passed (`bun run build` — 0 errors, 4/4 static pages)

---

## 📌 Executive Summary

This document records the complete development, mobile-responsiveness optimizations, and authentic Bangla localization executed across the entire landing page for **Prohor (প্রহর)**. Prohor is a Bangladesh-focused digital ecosystem for designing, developing, deploying, and managing websites and digital products — bringing creators, developers, businesses, and digital services together on one platform.

---

## 1. 📱 Mobile Responsiveness Audit & Fixes

Every single component in `src/components/landing/sections/` was audited and adapted for seamless mobile viewport rendering (320px – 768px):

| Section File | Responsive Issues Identified | Resolution Applied |
| :--- | :--- | :--- |
| **`src/app/layout.tsx`** | Viewport horizontal wobble on mobile | Added `overflow-x-hidden` to `<body>` to prevent horizontal micro-scrolling. |
| **`hero.tsx`** | Overly rigid padding on search input & card overflows | Fluidified card dimensions, adapted prompt input padding for `<sm`, safely hid the secondary decorative `<aside>` on mobile. |
| **`workflows-section.tsx`** | Overflowing static flex items breaking on narrow viewports | Re-architected as a responsive touch-scrollable, scroll-snap (`snap-x snap-mandatory`) carousel track with mobile gesture support and desktop chevron controls. |
| **`aurora-showcase.tsx`** | 3D Node graph breaking or truncating on mobile screens | Wrapped the SVG node graph in a dedicated horizontal scroll container (`min-w-[520px] sm:min-w-0`) with subtle scroll indicators. |
| **`product-direction.tsx`** | Isometric timeline clipping on `<768px` devices | Wrapped 3D isometric timeline in a touch-scrollable track with hidden scrollbars; resolved single-column border clipping. |
| **`ai-section.tsx`** | Fixed-width 3D card overflowing mobile viewports | Added dynamic viewport-proportional sizing for the 3D card preview and fixed orphaned double borders. |
| **`mesh-showcase.tsx`** | Marquee edge masks overlapping small text on mobile | Set `w-full` on marquee wrappers and reduced edge gradient masks to 32px on small screens. |

---

## 2. 🎨 Prohor Ecosystem & Bangla Localization

All user-facing copy, headers, metrics, and interactive tokens were rewritten into natural, professional **Bangla** while preserving the **exact original visual design, animations, and component structures** of the template:

### 1. Navigation (`navbar.tsx`)
- **Brand:** প্রহর (Prohor)
- **Menu Items:** ইকোসিস্টেম (Ecosystem), ক্লাউড ও হোস্টিং (Cloud & Hosting), প্রাইসিং (Pricing), ডকুমেন্টেশন (Docs).
- **Actions:** লগইন (Login), শুরু করুন (Get Started).

### 2. Hero Section (`hero.tsx`)
- **Title:** "বাংলাদেশে ডিজিটাল পণ্য তৈরির সম্পূর্ণ ইকোসিস্টেম"
- **Subtitle:** "ডিজাইন, ওয়েব ডেভেলপমেন্ট, হোস্টিং ও ক্লাউড অবকাঠামো — দেশের ডেভেলপার, ক্রিয়েটর ও ব্যবসার জন্য এক প্ল্যাটফর্মে।"
- **Input Placeholder:** "একটি আধুনিক ই-কমার্স ওয়েবসাইট তৈরি করুন..."
- **Interactive Dashboard:** লেয়ার্স, এসেটস, ডিজাইন টোকেন, প্রহর কোর, ক্লাউড v২.৪, ১২,০০০+ কম্পোনেন্টস, ৯৯.৯% আপটাইম।

### 3. Core Features (`features.tsx`)
- **Header:** "ডিজাইন থেকে ডিপ্লয় — সবই এখন এক ছাদের নিচে নিমিষে।"
- **Card 1 (🎨 প্রহর ডিজাইন):** রেডিমেড লেআউট, বাংলা টাইপোগ্রাফি ও কালার সিস্টেম।
- **Card 2 (💻 প্রহর স্টুডিও):** স্বয়ংক্রিয় ক্লিন কোড জেনারেটর (Next.js, React, Tailwind CSS)।
- **Card 3 (📊 প্রহর অ্যানালিটিক্স):** ৯৮,০০০+ মাসিক ভিজিটর ট্র্যাকিং ও এসইও গ্রোথ।

### 4. Mesh Showcase & Reviews (`mesh-showcase.tsx`)
- **Top Badge:** প্রহর প্রো — পরবর্তী প্রজন্মের অভিজ্ঞতা
- **Main Heading:** "যেখানে কল্পনা ও বাস্তব রূপায়নের মেলবন্ধন ঘটে"
- **Testimonials:** বাংলাদেশি ডেভেলপার, ডিজাইনার ও স্টার্টআপ প্রতিষ্ঠাতাদের খাঁটি মতামত ও অভিজ্ঞতা।

### 5. Aurora Architecture Canvas (`aurora-showcase.tsx`)
- **Header:** "আপনার সম্পূর্ণ ডিজিটাল আর্কিটেকচার — এক ক্যানভাসে।"
- **Interactive Graph:** bKash / Nagad পেমেন্ট ওয়েবহুক, প্রহর প্রসেসর, এসএমএস এলার্ট, প্রহর ক্লাউড DB।
- **Inspector Panel:** সার্ভার রিজিয়ন (dhaka · cloud1), ৮ ms ল্যাটেন্সি, ১৪,২২১টি সফল রিকোয়েস্ট।

### 6. AI & Agents Engine (`ai-section.tsx`)
- **Header:** "প্রহর ইন্টেলিজেন্স — আপনার সার্বক্ষণিক টেক পার্টনার"
- **Card:** স্বয়ংক্রিয় ইস্যু ট্রায়াজ, সিকিউরিটি স্ক্যান ও বাংলা প্রম্পট অপটিমাইজেশন।

### 7. Product Direction & Teams (`product-direction.tsx`)
- **Header:** "আপনার দলের ভবিষ্যৎ লক্ষ্য ও মাইলস্টোন রোডম্যাপ"
- **Milestones:** কিউ-১ লোকাল এজ ক্যাশ, কিউ-২ ঢাকা রিজিয়ন ক্লাউড ক্লাস্টার, কিউ-৩ নো-কোড ইকমার্স বিল্ডার।

### 8. Workflows & Collaboration (`workflows-section.tsx`)
- **Header Badge:** ওয়ার্কফ্লো ও ইন্টিগ্রেশন (Workflows and integrations)
- **Title:** "টুলস ও টিমের নির্বিঘ্ন কোলাবোরেশন"
- **Faithfully Preserved Mockups:**
  - `IntercomMockup` (কাস্টমার রিকোয়েস্ট ও প্ল্যানিং)
  - `GitHubMockup` (গিট ব্রাঞ্চ ও ডিপ্লয়মেন্ট টাইমলাইন)
  - `MobileMockup` (মোবাইল অ্যাপ ফ্রেম ও ইনবক্স)
  - `AsksMockup` (অ্যাকশন ও ইস্যু কার্ড)
  - `IntegrationsMockup` (পাজল গ্রিড)
  - `FigmaMockup` (ডিজাইন ইন্টিগ্রেশন)
  - `ApiMockup` (প্রহর এপিআই ব্যাজ)

### 9. Stats Section (`stats.tsx`)
- **Metric 1:** ৮৫% লোকাল এজ ক্যাশিংয়ে দ্রুত পেজ স্পিড।
- **Metric 2:** ৯৯.৯% বাংলাদেশি স্টার্টআপ ও ব্যবসার নির্ভরযোগ্য আপটাইম।
- **Interactive Badge:** "আমরা তৈরি করেছি দেশীয় ক্লাউড ও ডিজিটাল ইকোসিস্টেম" (ডেভেলপার কার্সার)।

### 10. Feature Pills (`pills.tsx`)
- ডিজাইনার ও ডেভেলপার ফ্রেন্ডলি
- ওয়ান-ক্লিক এজ ডিপ্লয়মেন্ট
- বিকাশ ও নগদ পেমেন্ট গেটওয়ে
- বাংলাদেশি ক্লাউড ও ঢাকা রিজিয়ন
- S3-কম্প্যাটিবল অবজেক্ট স্টোরেজ
- প্রহর মার্কেটপ্লেস ও প্লাগইন

### 11. Made for Designers (`mad-for-designer.tsx`)
- **Title:** "ডিজাইনার ও ডেভেলপারদের জন্য উন্মুক্ত স্বাধীনতা"
- **Editor:** ব্রাউজারে লাইভ ডিজাইন ও কোড সিঙ্ক, প্রহর ডিজাইন সিস্টেম সিএসএস টোকেন (`--prohor-brand-primary`, `--prohor-region`).

### 12. Plans & Pricing (`pricing.tsx`)
- **Title:** "পরিকল্পনা ও প্যাকেজসমূহ" (মূল ৩-কার্ড মিনিমাল ডিজাইন অক্ষুণ্ণ)
- **স্টার্টার:** ৳৯৯৯ / প্রতি মাসে (ব্যক্তিগত প্রকল্প ও ফ্রিল্যান্সার)
- **বিজনেস:** ৳২,৯৯৯ / প্রতি মাসে (এজেন্সি ও ইকমার্স)
- **এন্টারপ্রাইজ:** ৳৯,৯৯৯ / প্রতি মাসে (কাস্টম ক্লাউড অবকাঠামো ও SLA)

### 13. News & Updates (`updates.tsx`)
- **Title:** "প্রহর ইকোসিস্টেমের নতুন আপডেট ও ঘোষণা"
- **Announcement:** প্রহর ক্লাউডের নিজস্ব ঢাকা রিজিয়ন ডেটাসেন্টার (BD-DHK-01) ও লোকাল পেমেন্ট গেটওয়ে ওয়েবহুক সাপোর্ট।
- **Design:** মূল আর্টিকেলের বটম ফেড গ্রাডিয়েন্ট অক্ষুণ্ণ রাখা হয়েছে।

### 14. Footer (`footer.tsx`)
- **Brand:** প্রহর (মূল SVG লোগো সহ)
- **Columns:** কোম্পানি লিংক ও সোশ্যাল লিংক
- **Copyright:** "প্রহর - ২০২৬"
- **Data Protection:** দেশীয় ক্লাউড এনক্রিপশন ও গোপনীয়তা সুরক্ষা বার্তা।

---

## 3. 🛡️ Visual Fidelity & Verification

- **Brand Asset Integration:** Downloaded and integrated Prohor branding asset `public/prohor.webp` into the website header (`navbar.tsx`) and `footer.tsx` while preserving the original `src/app/favicon.ico`.
- **Icon System Modernization (`reicon-react`):** Replaced all `lucide-react` icons and raw SVGs across all landing sections and `@/components/ui/` primitives with tree-shakeable `reicon-react` components. Uninstalled deprecated `lucide-react`.
- **1:1 Design Integrity:** All classes, heights, animations, SVG assets, and original grid/flex layouts have been strictly preserved.
- **Typography:** Custom Bengali font `HindSiliguri` (`--font-sans`) renders naturally across all viewports.
- **Build Verification:** Tested with `bun run build` — compiled cleanly with zero lint or TypeScript errors.
