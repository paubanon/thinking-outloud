# Tech Stack

## Framework
- **Astro** — static site generation (SSG)
- Pre-built HTML at build time — fastest possible delivery
- Content Collections for type-safe Markdown handling

## Deployment
- **Vercel** — zero-config Astro deploys
- Global CDN, automatic HTTPS, preview deployments on push
- Free tier sufficient for this project's scale

## Content Authoring
- **Markdown files** — one file per post, per language
- Frontmatter for metadata (title, date, tags, video URL)
- Stored in the repository under a content directory

## Internationalization (i18n)
- **Astro built-in i18n routing** — `/es/` and `/en/` path prefixes
- One Markdown file per language per post (e.g., `post-slug/es.md`, `post-slug/en.md`)
- Browser locale auto-detection for default language
- Manual ES/EN toggle persisted in client

## Search
- **Pagefind** — client-side search built at build time
- Zero server cost, works offline
- Full-text search across all transcriptions
- Lightweight (~100KB index for hundreds of posts)

## Typography
- **Google Fonts** — mechanographic/typewriter style
- Candidates: Special Elite, Courier Prime, or similar
- Final font selection during implementation based on readability at long-form scale

## Styling
- **Vanilla CSS** — no framework needed for a black-and-white minimalist site
- CSS custom properties for the limited palette (black, white, grey for borders)
- Responsive by default with simple media queries

## Development Tools
- **Node.js** — runtime
- **Git** — version control
- **Vercel CLI** — local dev and deployment
