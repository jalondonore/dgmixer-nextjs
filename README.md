# DG Mixer — Drug Interaction Tool

An interactive web app that shows what happens when two substances are mixed. Pick two drugs and the app animates a mixing sequence, then reveals a detailed article with short- and long-term health risks, how the substances interact, statistics, and a related video.

Originally built as a static site to support a rehab clinic's prevention programs, now rebuilt from scratch with Next.js, React and TypeScript.

## Demo

- Original static version: https://jalondonore.github.io/dgmixer/

## Features

- 5 substances and all 10 possible pairings (alcohol, marijuana, cocaine, heroin, meth)
- Animated drag-and-mix flow with Framer Motion
- Accessible selects with keyboard support and reduced-motion styles
- Content-driven architecture: pairings and copy live in typed data files
- Fully responsive, statically prerendered page

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- CSS with custom properties and `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
├── app/                 # App Router entry points, layout and global styles
│   ├── fonts/           # Local font files
│   ├── globals.css      # Design tokens, reset and base styles
│   ├── layout.tsx
│   └── page.tsx
├── components/          # UI components + colocated CSS Modules
├── content/
│   ├── drugs.ts         # Substance metadata and ordering
│   └── interactions/    # One typed file per drug pair + shared helpers
└── types.ts             # Shared TypeScript types
public/images/           # Static images (drugs, logo, shaker, success)
```

## Credits

Content and original visual design were created for a rehabilitation clinic's prevention program. This Next.js version is a modern reimplementation of the original [dgmixer](https://github.com/jalondonore/dgmixer) project.
