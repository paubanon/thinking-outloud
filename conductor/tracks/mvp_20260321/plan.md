# Plan: MVP — Full Website Build

## Phase 1: Project Scaffolding

- [ ] Task: Initialize Astro project with SSG configuration
- [ ] Task: Configure project structure (src/components, src/layouts, src/pages, src/content, src/styles)
- [ ] Task: Set up global CSS with design tokens (black/white palette, typewriter font from Google Fonts, spacing)
- [ ] Task: Create base layout component (BaseLayout.astro) with HTML head, font loading, global styles
- [ ] Task: Conductor - User Manual Verification 'Project Scaffolding' (Protocol in workflow.md)

## Phase 2: Content System

- [ ] Task: Define Astro Content Collection schema for posts (title, date, tags, videoUrl)
- [ ] Task: Set up i18n routing configuration (es/en prefixes, default locale detection)
- [ ] Task: Create 2 mock posts in Spanish (es/) with sample frontmatter and transcription text
- [ ] Task: Create 2 mock posts in English (en/) — translated versions of the Spanish posts
- [ ] Task: Conductor - User Manual Verification 'Content System' (Protocol in workflow.md)

## Phase 3: Core Pages

- [ ] Task: Build post page template (PostLayout.astro) — title, date, tags, embedded YouTube player, full text, spacious reading layout
- [ ] Task: Build post card component (PostCard.astro) — title, date, tags, 2-sentence preview
- [ ] Task: Build homepage — chronological post listing with PostCard components
- [ ] Task: Build About page — author photo, philosophy text, YouTube channel link
- [ ] Task: Conductor - User Manual Verification 'Core Pages' (Protocol in workflow.md)

## Phase 4: Navigation & i18n

- [ ] Task: Build header component — site name (home link) left, ES/EN toggle right
- [ ] Task: Implement locale auto-detection (browser language) with localStorage persistence
- [ ] Task: Add translation disclaimer component for English post pages
- [ ] Task: Localize all UI labels (header, filters, search placeholder, about page)
- [ ] Task: Conductor - User Manual Verification 'Navigation & i18n' (Protocol in workflow.md)

## Phase 5: Search & Filtering

- [ ] Task: Integrate Pagefind — build-time indexing, search bar component on homepage
- [ ] Task: Implement tag filtering on homepage — clickable tags that filter the post list
- [ ] Task: Conductor - User Manual Verification 'Search & Filtering' (Protocol in workflow.md)

## Phase 6: Polish & Deploy

- [ ] Task: Add responsive styles and test on mobile viewports
- [ ] Task: Add meta tags, Open Graph, and favicon
- [ ] Task: Create .gitignore and configure Vercel deployment (vercel.json if needed)
- [ ] Task: Deploy to Vercel and verify production build
- [ ] Task: Conductor - User Manual Verification 'Polish & Deploy' (Protocol in workflow.md)
