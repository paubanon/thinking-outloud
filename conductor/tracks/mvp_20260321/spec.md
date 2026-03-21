# Spec: MVP — Full Website Build

## Overview
Build the complete "Pensando en Voz Alta / Thinking Out Loud" website — a minimalist, bilingual, black-and-white Astro site for publishing YouTube video transcriptions as long-form articles.

## User Stories

### US-1: Browse Posts
As a visitor, I can see a chronological list of posts on the homepage, each showing a title, date, tags, and a 2-sentence preview, so I can quickly find content that interests me.

### US-2: Filter by Tag
As a visitor, I can filter posts by free-form tags so I can find content on specific topics.

### US-3: Read a Post
As a visitor, I can click a post to read the full transcription on a clean, spacious page with the title, date, tags, embedded YouTube video, and full text.

### US-4: Search Content
As a visitor, I can search across all transcriptions using a search field so I can find specific topics or phrases.

### US-5: Switch Language
As a visitor, the site auto-detects my browser locale (ES or EN) and shows content in that language. I can manually toggle between ES and EN at any time. English content shows a small disclaimer about being a translation.

### US-6: Learn About the Project
As a visitor, I can visit an About page to see the author's photo, a brief description of the project philosophy, and a link to the YouTube channel.

## Functional Requirements

### FR-1: Homepage
- Display posts in reverse chronological order
- Each post card shows: title, date, tags, first ~2 sentences as preview
- Tag filter: clickable tags that filter the post list
- Search bar (Pagefind integration)

### FR-2: Post Page
- Full transcription text, spaciously laid out
- Title, date, and tags at the top
- Embedded YouTube player
- Back-to-home navigation

### FR-3: About Page
- Author photo
- 1–2 paragraphs about the author and project philosophy
- Link to YouTube channel

### FR-4: i18n
- Astro built-in i18n with `/es/` and `/en/` path prefixes
- Browser locale auto-detection for default language
- ES/EN toggle in header, persisted in localStorage
- English posts carry a translation disclaimer
- All UI labels localized

### FR-5: Search
- Pagefind integration — client-side full-text search
- Search bar on homepage
- Results show post title, preview snippet, and link

### FR-6: Content Structure
- Markdown files with frontmatter: title, date, tags[], videoUrl
- One file per post per language under `src/content/posts/es/` and `src/content/posts/en/`
- 2 mock posts included (both languages) to demonstrate the flow

## Non-Functional Requirements

### NFR-1: Performance
- Static site — all pages pre-built at build time
- Lighthouse score >95 on all metrics
- No JavaScript frameworks — vanilla Astro components only

### NFR-2: Design
- Black and white palette only
- Mechanographic/typewriter font (Google Fonts)
- Spacious layout — generous whitespace, max-width ~720px
- Mobile-responsive

### NFR-3: Deployment
- Deployed to Vercel
- Auto-deploy on push to main branch

## Out of Scope
- Comments or social engagement features
- CMS or admin interface
- AI-assisted transcription formatting (future track)
- Analytics
