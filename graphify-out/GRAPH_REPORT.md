# Graph Report - prohor.dev  (2026-09-08)

## Corpus Check
- 63 files · ~50,482 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 260 nodes · 313 edges · 26 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 2,800 input · 1,050 output

## Community Hubs (Navigation)
- Landing Page & Sections
- Animation & Visual Effects
- Biome Linter & Formatter Config
- Shadcn UI Component Registry Config
- Development Dependencies & Tooling
- TypeScript Compiler Options
- Package Scripts & Metadata
- Interactive Workflow Pills & Badges
- Next.js Build & Formatting Rules
- Core App Runtime Dependencies
- TypeScript Include Globs & Types
- Aurora & UI Primitive Components
- PostCSS Styling Config
- Portfolio Overview & Documentation

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `ASSETS` - 9 edges
3. `scripts` - 7 edges
4. `include` - 7 edges
5. `includes` - 6 edges
6. `tailwind` - 6 edges
7. `aliases` - 6 edges
8. `vcs` - 4 edges
9. `formatter` - 4 edges
10. `linter` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (26 total, 2 thin omitted)

### Community 0 - "Landing Page & Sections"
Cohesion: 0.10
Nodes (22): CountUp(), AISection(), Features(), Footer(), MadForDesigner(), Navbar(), Pricing(), ProductDirectionSection() (+14 more)

### Community 1 - "Animation & Visual Effects"
Cohesion: 0.12
Nodes (19): CountNumber(), CountUpInView(), defaultFormat(), StaggeredWords(), toBengaliDigits(), TypingPlaceholderInput(), WordsReveal(), Hero() (+11 more)

### Community 2 - "Biome Linter & Formatter Config"
Cohesion: 0.08
Nodes (23): source, assist, actions, css, parser, next, react, formatter (+15 more)

### Community 4 - "Shadcn UI Component Registry Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 5 - "Development Dependencies & Tooling"
Cohesion: 0.11
Nodes (19): babel-plugin-react-compiler, @biomejs/biome, knip, devDependencies, babel-plugin-react-compiler, @biomejs/biome, knip, tailwindcss (+11 more)

### Community 6 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 7 - "Package Scripts & Metadata"
Cohesion: 0.14
Nodes (15): ignoreScripts, name, packageManager, private, scripts, build, dev, format (+7 more)

### Community 8 - "Interactive Workflow Pills & Badges"
Cohesion: 0.12
Nodes (4): PILL_ITEMS, Pills(), WorkflowsSection(), WORKFLOWS_CONTENT

### Community 9 - "Next.js Build & Formatting Rules"
Cohesion: 0.15
Nodes (10): files, ignoreUnknown, includes, !node_modules, nextConfig, **, !build, !dist (+2 more)

### Community 10 - "Core App Runtime Dependencies"
Cohesion: 0.15
Nodes (13): motion, next, dependencies, motion, next, react, react-dom, reicon-react (+5 more)

### Community 11 - "TypeScript Include Globs & Types"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, **/*.ts, **/*.tsx, exclude, include (+1 more)

### Community 12 - "Aurora & UI Primitive Components"
Cohesion: 0.38
Nodes (4): AuroraShowcase(), Card(), SectionHeader(), AURORA_SHOWCASE_CONTENT

## Knowledge Gaps
- **91 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `ignoreUnknown` (+86 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 143 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development Dependencies & Tooling` to `Package Scripts & Metadata`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Core App Runtime Dependencies` to `Package Scripts & Metadata`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TypeScript Include Globs & Types`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _91 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Landing Page & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.10241820768136557 - nodes in this community are weakly interconnected._
- **Should `Animation & Visual Effects` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Biome Linter & Formatter Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._