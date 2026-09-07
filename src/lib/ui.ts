/**
 * Centralized UI configuration and landing page content
 */

export const ASSETS = {
  logo: "/prohor.webp",
  mediaBase: "https://qclay.design/lovable/codeba/",
  iconsBase: "https://qclay.design/lovable/codeba/icons/",
  nixoleBase: "https://qclay.design/lovable/nixole/",
  woman: "https://qclay.design/lovable/codeba/woman.png",
  card: "https://qclay.design/lovable/codeba/Card.png",
  bg: "https://qclay.design/lovable/codeba/Bg.png",
  browserMockup: "https://qclay.design/lovable/nixole/browser-mockup.png",
  frame207: "https://qclay.design/lovable/nixole/frame-207.svg",
  upsideLogo: "https://qclay.design/lovable/nixole/upside-logo.svg",
};

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const NAVBAR_ITEMS: NavItem[] = [
  { label: "ফিচার্স", href: "#features" },
  { label: "আর্কিটেকচার", href: "#showcase" },
  { label: "এআই ও এজেন্টস", href: "#ai" },
  { label: "টিমস ও রোডম্যাপ", href: "#teams" },
  { label: "ওয়ার্কফ্লো", href: "#workflows" },
  { label: "মূল্যতালিকা", href: "#pricing" },
  { label: "আপডেট", href: "#updates" },
];

export const HERO_CONTENT = {
  heading: "ওয়েবসাইট ও ডিজিটাল প্রোডাক্ট তৈরির সম্পূর্ণ ইকোসিস্টেম।",
  subtitle:
    "প্রহর — বাংলাদেশের ক্রিয়েটর, ডেভেলপার এবং ব্যবসার জন্য ডিজাইন, ডেভেলপমেন্ট, ক্লাউড ও ডিপ্লয়মেন্টের সমন্বিত প্ল্যাটফর্ম।",
  placeholderText: "আপনার কাঙ্ক্ষিত ওয়েবসাইটের ভাবনা লিখুন.../",
  ctaText: "তৈরি করুন",
  activeProjectName: "প্রহর স্টুডিও v২.৪",
};

export const FEATURES_CONTENT = {
  headerTitle:
    "ডিজাইন থেকে ডিপ্লয় — সবই এখন এক ছাদের নিচে নিমিষে। প্রহর ইকোসিস্টেমে আপনার সব ডিজিটাল কাজ হবে দ্রুততম সময়ে।",
  ctaText: "বিনামূল্যে শুরু করুন",
  badgeText: "দেশীয় ক্লাউড ও সর্বোচ্চ গতি",
  tagline: "ক্লাউড ইনফ্রাস্ট্রাকচার",
  card1: {
    title: "ডিজাইন ও ইউআই",
    description:
      "ওয়েবসাইট ও UI/UX ডিজাইন করুন কোনো কোডিং জটিলতা ছাড়াই। রেডিমেড লেআউট ও কালার প্যালেট সুবিধা।",
    items: [
      { label: "টাইপোগ্রাফি ও বাংলা ফন্ট", active: true },
      { label: "ইমেজ ও কালার সিস্টেম" },
      { label: "ডিজাইন কিট" },
    ],
  },
  card2: {
    title: "স্টুডিও ও কোড",
    description:
      "বাংলা নির্দেশনায় স্বয়ংক্রিয়ভাবে ক্লিন কোড জেনারেট করুন এবং লাইভ টেস্ট করে এক ক্লিকে সাইট ডিপ্লয় করুন।",
    techStack: ["Next.js", "React", "Tailwind"],
    regenerateCta: "পুনরায় জেনারেট",
  },
  card3: {
    title: "অ্যানালিটিক্স ও এসইও",
    visitorCount: 98000,
    visitorLabel: "মাসিক ভিজিটর ও সার্চ গ্রোথ",
  },
};

export const MESH_SHOWCASE_CONTENT = {
  badge: "প্রো",
  headlineLine1: "অল-ইন-ওয়ান ডিজিটাল",
  headlineLine2: "বিজনেস ইকোসিস্টেম",
  description:
    "ডিজাইন থেকে শুরু করে ক্লাউড হোস্টিং ও লোকাল পেমেন্ট,\nআপনার পুরো ব্যবসা পরিচালিত হবে প্রহরের একক প্ল্যাটফর্মে।",
  featuresTitle: "মূল ফিচারসমূহ",
  features: [
    { label: "ডিজাইন ও UI", active: false },
    { label: "ওয়েব স্টুডিও", active: false },
    { label: "ওয়ান-ক্লিক ডিপ্লয়মেন্ট", active: true },
    { label: "দেশীয় ক্লাউড সার্ভার", active: false },
    { label: "বিকাশ ও নগদ গেটওয়ে", active: false },
  ],
  testimonial: {
    title: "উদ্যোক্তাদের অভিজ্ঞতা",
    date: "০২ ফেব্রুয়ারি, ২০২৬",
    quote1: "প্রহর ডিপ্লয় ব্যবহারের পর আমাদের ই-কমার্সের",
    quote2: "লোডিং স্পিড বহুগুণ বেড়েছে এবং সেলস বেড়েছে ৬০%।",
    author: "ঢাকা স্টার্টআপ হাব",
    rating: 5,
  },
  trustedByText:
    "বাংলাদেশের শীর্ষস্থানীয় উদ্ভাবক, স্টার্টআপ এবং সফটওয়্যার টিমসমূহের বিশ্বস্ত সঙ্গী —\nডিজিটাল বাংলাদেশের রূপান্তরে এক নির্ভরযোগ্য প্ল্যাটফর্ম।",
};

export const AURORA_SHOWCASE_CONTENT = {
  title: "আপনার সম্পূর্ণ ডিজিটাল আর্কিটেকচার — এক ক্যানভাসে।",
  subtitle:
    "ওয়েবসাইট কম্পোনেন্ট, ওয়ার্কফ্লো, ডাটাবেস ও লাইভ ডিপ্লয়মেন্ট — সবকিছু এক শান্ত, স্বাচ্ছন্দ্যময় সারফেসে নিয়ন্ত্রণ করুন।",
  environmentTag: "prohor.cloud / acme-bangladesh / production",
  time: "১২:৪৮",
  sidebarItems: [
    "ওভারভিউ",
    "স্টুডিও",
    "ক্লাউড হোস্টিং",
    "এসথ্রি স্টোরেজ",
    "ডোমেন ও ডিএনএস",
    "লগস",
    "বিলিং (টাকা ৳)",
  ],
  workflowBadge: "ওয়ার্কফ্লো · অটো_ডিপ্লয়_v২",
  workflowTitle: "অর্ডার ও পেমেন্ট পাইপলাইন",
  nodes: [
    {
      x: "2%",
      y: "10%",
      t: "পেমেন্ট ওয়েবহুক",
      sub: "bkash.payment.success",
      active: true,
    },
    { x: "40%", y: "40%", t: "পেমেন্ট প্রসেসর", sub: "অর্ডার তৈরি ও যাচাই", active: false },
    { x: "70%", y: "5%", t: "এসএমএস এলার্ট", sub: "গ্রাহককে তাৎক্ষণিক বার্তা", active: false },
    { x: "70%", y: "70%", t: "ক্লাউড ডাটাবেস", sub: "orders.insert()", active: false },
  ],
  footerSummary: "৪টি নোড · ৩টি এজ · ক্লাউড v২.৪",
  footerStatus: "সক্রিয় ও সুরক্ষিত",
  inspectorTitle: "পেমেন্ট গেটওয়ে",
  inspectorRows: [
    ["উৎস", "বিকাশ / নগদ API"],
    ["ইভেন্ট", "পেমেন্ট সম্পন্ন"],
    ["সার্ভার রিজিয়ন", "ঢাকা · ক্লাউড-১"],
    ["রিট্রাই সীমা", "৩ বার"],
    ["গড় ল্যাটেন্সি", "৮ ms"],
  ],
  trafficTitle: "গত ২৪ ঘণ্টার ট্রাফিক",
  trafficRequests: "১৪,২২১টি সফল রিকোয়েস্ট",
  trafficGrowth: "+১২% বৃদ্ধি",
};

export const AI_SECTION_CONTENT = {
  title: "এআই-চালিত ওয়েব ও প্রোডাক্ট ডেভেলপমেন্ট",
  subtitleHighlight: "অ্যাপস ও এজেন্টস।",
  subtitle:
    "স্মার্ট এআই এজেন্টের সাহায্যে ডিজাইন থেকে কোড রূপান্তর এবং ক্লাউড ম্যানেজমেন্টের কাজ সম্পন্ন করুন পলকে।",
  ctaText: "বিস্তারিত জানুন",
  agents: [
    { name: "৫.১ ফ্ল্যাশ (Flash)", isAgent: true, selected: true, version: "v5.1" },
    { name: "প্রো (Pro)", isAgent: true, selected: false, version: "v5.0" },
    { name: "এক্সটেন্ডেড (Extended)", isAgent: true, selected: false, version: "v4.5" },
    { name: "ফ্ল্যাশ লাইট (Flash Lite)", isAgent: true, selected: false, version: "v3.2" },
    { name: "প্রো ম্যাক্স (Pro Max)", isAgent: true, selected: false, version: "v5.1" },
  ],
  operations: {
    title: "স্বয়ংক্রিয় প্রোডাক্ট অপারেশন",
    description: "রুটিনমাফিক কোড রিভিউ, বাগ ফিক্সিং এবং ডিপ্লয়মেন্ট নিশ্চিত করুন প্রহর ইন্টেলিজেন্সের সহায়তায়।",
    smartTriage: "স্মার্ট ট্রায়াজ",
    leadName: "তানভীর আহমেদ (টিম লিড)",
    reasoning: "পূর্ববর্তী ডেটা অনুযায়ী এই অপ্টিমাইজেশনটি বাংলাদেশি মোবাইল নেটওয়ার্কে লোডিং স্পিড ৪৫% বাড়াবে।",
    backupDevelopers: ["নিলয়", "ফারহান"],
    acceptSuggestionCta: "পরামর্শ গ্রহণ করুন",
  },
  mcp: {
    title: "এমসিপি (MCP)",
    description: "Cursor, Claude, ChatGPT এবং অন্যান্য এডিটর থেকে সরাসরি প্রহর ক্লাউড ও ডাটাবেস পরিচালনা করুন।",
    endpoint: "//mcp.prohor.dev/sse",
    placeholderInput: "যেকোনো প্রশ্ন বা নির্দেশ লিখুন...",
  },
};

export const PRODUCT_DIRECTION_CONTENT = {
  title: "টিমস: দলগত কাজের রোডম্যাপ",
  subtitleHighlight: "একই প্ল্যাটফর্মে পুরো টিমকে রাখুন সারিবদ্ধ।",
  subtitle: "ডিজাইন, ডেভেলপমেন্ট এবং বিজনেস উদ্যোগের অগ্রগতি ট্র্যাক করুন প্রহর টিমস-এর মাধ্যমে।",
  projectManagement: {
    title: "এন্ড-টু-এন্ড প্রজেক্ট ম্যানেজমেন্ট",
    description: "স্পেসিফিকেশন, মাইলস্টোন, কাজের তালিকা ও প্রয়োজনীয় ডকুমেন্টেশন রাখুন এক কেন্দ্রীয় ঠিকানায়।",
  },
  liveReleases: {
    title: "লাইভ প্রজেক্ট ও রিলিজ আপডেট",
    description: "সহকর্মী ও অংশীদারদের সাথে রিয়েলটাইমে প্রজেক্টের অগ্রগতি এবং কাজের অবস্থা ভাগাভাগি করুন।",
    readyMessage: "নতুন সংস্করণ আগামী বৃহস্পতিবার উন্মোচনের জন্য প্রস্তুত",
    readyDate: "৮ সেপ্টেম্বর",
  },
  collaboration: {
    headline: "আইডিয়া তৈরি করুন\nএবং কী বানাবেন তা নির্ধারণ করুন",
    features: ["টিম কোলাবোরেশন ডকুমেন্টস", "ইনলাইন কমেন্টস ও রিভিউ", "কমান্ড দিয়ে কাজ বণ্টন"],
    documentTitle: "প্রজেক্ট স্পেক্স",
  },
  pillars: [
    { title: "কৌশলগত উদ্যোগ", description: "প্রতিষ্ঠানের গুরুত্বপূর্ণ লক্ষ্যগুলোর সমন্বয় করুন।" },
    { title: "ক্রস-টিম প্রজেক্ট", description: "ডিজাইনার, ডেভেলপার ও ব্যবসায়ীদের মাঝে সহজ যোগাযোগ।" },
    { title: "নির্দিষ্ট মাইলস্টোন", description: "বড় প্রজেক্টকে সহজ ধাপে ভাগ করে সফল সমাপ্তি।" },
    { title: "অগ্রগতি বিশ্লেষণ", description: "কাজের গতি ও ফলাফল নিখুঁতভাবে পর্যবেক্ষণ করুন।" },
  ],
};

export const WORKFLOWS_CONTENT = {
  badge: "ওয়ার্কফ্লো ও ইন্টিগ্রেশন",
  title: "টুলস ও টিমের নির্বিঘ্ন\nকোলাবোরেশন",
  subtitle:
    "সিস্টেমের সক্ষমতা বৃদ্ধি করুন বিস্তৃত ইন্টিগ্রেশনের মাধ্যমে, যা আপনার প্রতিষ্ঠানের সবাইকে এক সূত্রে সংযুক্ত এবং লক্ষ্যমুখী রাখবে।",
  cards: [
    { id: 1, category: "কাস্টমার রিকোয়েস্ট", title: "গ্রাহকরা যা চান ঠিক তা-ই তৈরি করুন", mockup: "intercom" },
    { id: 2, category: "শক্তিশালী গিট ওয়ার্কফ্লো", title: "পুল রিকোয়েস্ট ও কমিট ওয়ার্কফ্লো অটোমেট করুন", mockup: "github" },
    { id: 3, category: "প্রহর মোবাইল", title: "যেকোনো প্রান্ত থেকে প্রজেক্টের কাজ এগিয়ে নিন", mockup: "mobile" },
    { id: 4, category: "প্রহর আস্কস", title: "কাজের রিকোয়েস্টগুলোকে সমাধানযোগ্য ইস্যুতে রূপান্তর করুন", mockup: "asks" },
    { id: 5, category: "প্রহর ইন্টিগ্রেশনস", title: "১০০+ উপায়ে বৃদ্ধি করুন প্রহরের অভিজ্ঞতা", mockup: "integrations" },
    { id: 6, category: "ফিগমা ইন্টিগ্রেশন", title: "ইঞ্জিনিয়ারিং ও ডিজাইনের দূরত্ব দূর করুন", mockup: "figma" },
    { id: 7, category: "ডেভেলপারদের জন্য নির্মিত", title: "প্রহর এপিআই দিয়ে তৈরি করুন নিজস্ব অ্যাড-অন", mockup: "api" },
  ],
};

export const STATS_CONTENT = {
  stat1: {
    number: 85,
    unit: "%",
    label: "লোকাল এজ ক্যাশিংয়ে দ্রুততর পেজ লোডিং স্পিড",
  },
  stat2: {
    number: 99,
    decimal: ".৯%",
    label: "বাংলাদেশি স্টার্টআপ ও ব্যবসার নির্ভরযোগ্য আপটাইম",
  },
  banner: {
    prefix: "আমরা তৈরি করেছি ",
    highlight: "দেশীয় ক্লাউড",
    suffix: " ও ডিজিটাল ইকোসিস্টেম",
    roleBadge: "ডেভেলপার",
  },
};

export const MAD_FOR_DESIGNER_CONTENT = {
  title: "ডিজাইনার ও ডেভেলপারদের জন্য উন্মুক্ত স্বাধীনতা",
  description:
    "প্রহর স্টুডিও ও ডিজাইনের সমন্বয়ে ক্যানভাস থেকে সরাসরি প্রোডাকশন-রেডি ক্লিন কোড তৈরি করুন। কোনো কনফিগারেশন ঝামেলা ছাড়াই তাৎক্ষণিক প্রিভিউ ও এক্সপোর্ট।",
  cta1: "কীভাবে কাজ করে",
  cta2: "কোড দেখুন",
  exportCta: "কোড এক্সপোর্ট",
  codeTitle: "ডিজাইন ও কোড একসাথে সরাসরি ব্রাউজারে",
  codeSnippet: `/* প্রহর ডিজাইন সিস্টেম সিএসএস টোকেন */
--prohor-brand-primary: #00D084;
--prohor-local-gateway: "bKash", "Nagad";
--prohor-region: "bd-dhaka-01";
font-family: "Hind Siliguri", sans-serif;
border-radius: 12px;
backdrop-filter: blur(16px);`,
};

export interface PricingPlan {
  price: string;
  description: string;
  features: { label: string; dim?: boolean }[];
  cta: string;
  ctaClass: string;
}

export const PRICING_CONTENT = {
  title: "পরিকল্পনা ও প্যাকেজসমূহ",
  plans: [
    {
      price: "৳৯৯৯",
      description: "ব্যক্তিগত প্রকল্প, ফ্রিল্যান্সার ও ক্রিয়েটরদের জন্য আদর্শ স্টার্টার প্যাকেজ",
      features: [
        { label: "৫টি পর্যন্ত কাস্টম ডোমেন কানেকশন" },
        { label: "প্রহর স্টুডিও ও ডিজাইন অ্যাক্সেস" },
        { label: "১০ জিবি S3 অবজেক্ট স্টোরেজ" },
        { label: "কাস্টম কালার প্যালেট ও কম্পোনেন্টস" },
        { label: "বেসিক অ্যানালিটিক্স ড্যাশবোর্ড" },
        { label: "কমিউনিটি ফোরাম সাপোর্ট" },
        { label: "বিকাশ ও নগদ পেমেন্ট চেকআউট", dim: true },
        { label: "প্রহর ক্লাউড ডেডিকেটেড নোড", dim: true },
        { label: "২৪/৭ প্রায়োরিটি সাপোর্ট", dim: true },
      ],
      cta: "শুরু করুন",
      ctaClass: "bg-white text-neutral-950 hover:bg-neutral-200 transition-colors",
    },
    {
      price: "৳২,৯৯৯",
      description: "বর্ধনশীল ব্যবসা, ডিজিটাল এজেন্সি এবং হাই-ট্রাফিক ওয়েবসাইটের জন্য সেরা পছন্দ",
      features: [
        { label: "আনলিমিটেড কাস্টম ডোমেন ও হোস্টিং" },
        { label: "প্রহর স্টুডিও প্রো কম্পোনেন্টস" },
        { label: "১০০ জিবি S3 অবজেক্ট স্টোরেজ" },
        { label: "ফুল-স্ট্যাক ই-কমার্স ও পেমেন্ট গেটওয়ে" },
        { label: "অ্যাডভান্সড রিয়েল-টাইম অ্যানালিটিক্স" },
        { label: "টিম কোলাবোরেশন ও ওয়ার্কস্পেস" },
        { label: "ঢাকা এজ CDN লোকাল ক্যাশিং" },
        { label: "প্রায়োরিটি ইমেইল ও চ্যাট সাপোর্ট" },
        { label: "কাস্টম ডেডিকেটেড ক্লাস্টার", dim: true },
      ],
      cta: "প্যাকেজ বেছে নিন",
      ctaClass: "bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors",
    },
    {
      price: "৳৯,৯৯৯",
      description: "বৃহৎ প্রতিষ্ঠান, ফিনটেক ও এন্টারপ্রাইজ লেভেল স্কেলিং ও কাস্টম ক্লাউড অবকাঠামো",
      features: [
        { label: "আনলিমিটেড স্টোরেজ, ব্যান্ডউইথ ও ডোমেন" },
        { label: "প্রহর ক্লাউড ডেডিকেটেড VPS ক্লাস্টার" },
        { label: "এন্টারপ্রাইজ SSO ও আইডেন্টিটি ম্যানেজমেন্ট" },
        { label: "সম্পূর্ণ REST ও GraphQL API অ্যাক্সেস" },
        { label: "৯৯.৯৯% আপটাইম গ্যারান্টি (SLA)" },
        { label: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার" },
        { label: "২৪/৭ ফোন ও হোয়াটসঅ্যাপ সাপোর্ট" },
        { label: "কাস্টম সিকিউরিটি অডিট ও ভ্যাট চালান" },
        { label: "অন-প্রিমিসেস ডিপ্লয়মেন্ট সুবিধা" },
      ],
      cta: "যোগাযোগ করুন",
      ctaClass: "bg-white text-neutral-950 hover:bg-neutral-200 transition-colors",
    },
  ],
};

export const UPDATES_CONTENT = {
  headerTitle: "ইকোসিস্টেমের নতুন আপডেট ও ঘোষণা",
  headerDescription:
    "বাংলাদেশের ডিজিটাল ভবিষ্যৎকে আরও গতিশীল করতে প্রহর প্ল্যাটফর্মে প্রতিনিয়ত যুক্ত হচ্ছে নতুন টুলস, দেশীয় পেমেন্ট ইন্টিগ্রেশন এবং ক্লাউড সমাধান।",
  ctaText: "আরও জানুন",
  articleTitle: "নতুন ঘোষণা",
  paragraphs: [
    "প্রহর ক্লাউডের নতুন ঢাকা ডেটাসেন্টার আনুষ্ঠানিকভাবে চালু হয়েছে! এখন থেকে আপনার ওয়েবসাইটের লেটেন্সি নেমে আসবে ১০ মিলি-সেকেন্ডের নিচে।",
    "সরাসরি বিকাশ ও নগদ পেমেন্ট গেটওয়ে ওয়েবহুক প্রসেসিং এবং S3-কম্প্যাটিবল অবজেক্ট স্টোরেজের মাধ্যমে সারা দেশের গ্রাহকদের দিন চোখের পলকে ব্রাউজিং অভিজ্ঞতা।",
    "পাশাপাশি প্রহর স্টুডিওতে যুক্ত হয়েছে ড্র্যাগ-অ্যান্ড-ড্রপ ই-কমার্স শপ বিল্ডার, বাংলা ফন্ট রেন্ডারিং ইঞ্জিন ও স্বয়ংক্রিয় লোকাল এসইও অপটিমাইজেশন।",
  ],
};

export const FOOTER_CONTENT = {
  companyLinks: ["আমাদের সম্পর্কে", "প্রাইভেসি পলিসি", "শর্তাবলী ও নীতিমালা", "যোগাযোগ"],
  socialLinks: ["টুইটার / X", "লিঙ্কডইন", "ইনস্টাগ্রাম"],
  copyright: "প্রহর - ২০২৬",
  privacyDisclaimer:
    "প্রহর আপনার গোপনীয়তা ও ডেটা সুরক্ষায় প্রতিশ্রুতিবদ্ধ। আমাদের ক্লাউড অবকাঠামো, S3-কম্প্যাটিবল স্টোরেজ ও বিকাশ/নগদ পেমেন্ট গেটওয়ে কঠোর এনক্রিপশন মানদণ্ড মেনে পরিচালিত হয়। আপনার ডেটা এনক্রিপ্ট করা থাকে এবং গ্রাহকের অনুমতি ছাড়া কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।",
};
