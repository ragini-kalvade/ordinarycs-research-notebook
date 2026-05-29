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


## Deploy (GitHub Pages)

Production URL: **https://ordinarycs.raginikalvade.com**

1. Push this repo to GitHub on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source** → **GitHub Actions**.
3. After the first successful workflow run, open **Settings → Pages → Custom domain** and enter `ordinarycs.raginikalvade.com`.
4. At your DNS host for `raginikalvade.com`, add a **CNAME** for `ordinarycs` pointing to `<your-github-username>.github.io`.
5. Enable **Enforce HTTPS** once DNS has propagated.

## Git hooks (optional)

```bash
./scripts/setup-git-hooks.sh
```

Disable agent attribution in **Cursor Settings → Agent → Attribution** to avoid co-author trailers on commits.
