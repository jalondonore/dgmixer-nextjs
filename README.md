# DG Mixer — Drug Interaction Tool

An interactive web app that shows what happens when two substances are mixed. Pick two drugs and the app animates a mixing sequence, then reveals a detailed article with short- and long-term health risks, how the substances interact, statistics, and a related video.

Originally built as a static site to support a rehab clinic's prevention programs, now rebuilt from scratch with Next.js, React and TypeScript.

## Demo

- Live demo: _add your Vercel URL here_
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

### Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the development server     |
| `npm run build`     | Create a production build        |
| `npm run start`     | Run the production build         |
| `npm run typecheck` | Type-check the project with `tsc` |

## Project structure

```
src/
├── app/                 # App Router entry points, layout and global styles
│   ├── fonts/           # Local font files
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/          # UI components (mixer, selects, shaker, article)
├── content/             # Typed content: drugs and interaction articles
└── types.ts             # Shared TypeScript types
public/images/           # Static images (drugs, logo, shaker, success)
```

### Adding a new interaction

1. Add the substance to `DRUG_ORDER` and `DRUGS` in `src/content/drugs.ts`.
2. Add its pairing definition to `DEFINITIONS` in `src/content/interactions.ts`.
3. Place the artwork in `public/images/drugs/`.

The pair lookup (`getInteraction`) is order-independent, so `alcohol|cocaine` and `cocaine|alcohol` resolve to the same article.

## Deployment

The app is fully static and deploys to Vercel with zero configuration:

```bash
npm run build
```

## Credits

Content and original visual design were created for a rehabilitation clinic's prevention program. This Next.js version is a modern reimplementation of the original [dgmixer](https://github.com/jalondonore/dgmixer) project.
