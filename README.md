# The Ordinary Computer Scientist

A static research archive built with [Astro](https://astro.build), React components, and MDX content collections.

## Commands

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview production build
```

## Project structure

- `src/pages/` — Routes (landing, papers index, article pages, stubs)
- `src/content/papers/` — MDX research analyses
- `src/components/` — Editorial UI components
- `src/styles/` — Design tokens and global CSS from `design.MD`
- `public/images/` — Editorial placeholder imagery

## Adding a paper

Create a new `.mdx` file in `src/content/papers/` matching the schema in `src/content/config.ts`.

