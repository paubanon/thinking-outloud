# Code Styleguide: Astro + CSS + Content

## Astro Components

- One component per file, named in PascalCase (e.g., `PostCard.astro`)
- Layouts in `src/layouts/`, pages in `src/pages/`, reusable components in `src/components/`
- Keep component scripts minimal — this is a static site, logic belongs at build time
- Use Astro's `<slot />` for layout composition
- Prefer `.astro` components over framework components — no React/Vue/Svelte needed

## CSS

- Scoped styles inside Astro components using `<style>` tags (Astro scopes by default)
- Global styles in a single `src/styles/global.css`
- Use CSS custom properties for the design tokens:
  ```css
  :root {
    --color-bg: #ffffff;
    --color-text: #000000;
    --color-border: #e0e0e0;
    --color-muted: #666666;
    --font-body: 'Special Elite', 'Courier New', monospace;
    --max-width: 720px;
    --spacing-unit: 1rem;
  }
  ```
- No utility classes — write semantic, readable CSS
- Mobile-first media queries
- No nesting beyond 2 levels

## Markdown Content

- Frontmatter schema for every post:
  ```yaml
  ---
  title: "Post Title"
  date: 2026-03-21
  tags: ["philosophy", "creativity"]
  videoUrl: "https://youtube.com/watch?v=..."
  ---
  ```
- File naming: `kebab-case.md` (e.g., `on-being-present.md`)
- One file per post per language, organized by locale directory
- No HTML inside Markdown — keep content pure text
- Paragraphs separated by blank lines, no manual line breaks

## File Organization

```
src/
  components/    # Reusable .astro components
  content/       # Markdown content collections
    posts/
      es/        # Spanish originals
      en/        # English translations
  layouts/       # Page layouts
  pages/         # Route pages
  styles/        # Global CSS
public/          # Static assets (fonts, favicon)
```

## General

- No unused imports or dead code
- Descriptive variable names in English
- Comments only when the "why" isn't obvious — never the "what"
