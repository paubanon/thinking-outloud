# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Pensando en Voz Alta / Thinking Out Loud" — a bilingual (ES/EN) personal website publishing long-form transcriptions of YouTube videos. Built as a static site with Astro, styled in a black-and-white typewriter aesthetic.

## Commands

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Build to ./dist/ (includes Pagefind index generation)
npm run preview      # Preview production build locally
```

Build runs `astro build && npx pagefind --site dist` — Pagefind generates the client-side search index as a post-build step.

## Architecture

**Framework:** Astro 6 with static site generation (SSG). No client-side frameworks — pure `.astro` components only.

**Content:** Astro Content Collections with a `glob` loader. Posts are Markdown files in `src/content/posts/{es,en}/` with required frontmatter: `title`, `date`, `tags` (string[]), `videoUrl`, `lang` ("es"|"en"). Schema defined in `src/content.config.ts`.

**i18n:** Astro's built-in i18n routing with `prefixDefaultLocale: true` — all routes are prefixed (`/es/`, `/en/`). Root `/` does a client-side redirect based on browser locale (stored in localStorage). Spanish is the default locale; English posts carry a translation disclaimer. UI labels live in `src/i18n/labels.ts` via the `t(locale)` helper.

**Search:** Pagefind — built at build time from the `dist/` output. Zero runtime cost, fully client-side.

**Styling:** Vanilla CSS with custom properties defined in `src/styles/global.css`. No utility frameworks. Scoped styles in components, global tokens in `:root`. Typography uses Google Fonts: Special Elite (headings) and Courier Prime (body).

## Key Conventions

- **Black and white only** — no accent colors, gradients, or decorative elements
- **No framework components** — no React/Vue/Svelte; everything is `.astro`
- **No HTML inside Markdown** — content files are pure text
- **Scoped component styles** — use `<style>` tags in `.astro` files; use `:global()` selectors when styling slotted/rendered Markdown content
- **Design tokens** — always use CSS custom properties (`--color-*`, `--spacing-*`, `--text-*`, `--font-*`) instead of raw values
- Post slugs derive from Markdown filenames (kebab-case)
- English posts are translations of Spanish originals, not independent content
- Components are PascalCase, one per file

## Content Workflow

Spanish posts are the source of truth. English posts in `src/content/posts/en/` are faithful translations. The project uses agent-based transcription formatting and translation (see `conductor/` and `.claude/agents/`).

## Conductor

This project uses Conductor for context-driven development. Specs, plans, and track status live in `conductor/`. Product vision is in `conductor/product.md`, style guides in `conductor/code_styleguides/`.
