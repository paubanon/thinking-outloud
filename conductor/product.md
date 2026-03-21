# Initial Concept

A minimalistic personal website built with Astro to organize and publish transcriptions of YouTube videos (vlogs / compilations of thoughts). The philosophy centers on long-form, unfiltered, unedited content — a counterpoint to fast, short-form content culture. Videos are recorded in one take, uncut, and the website should reflect that rawness and directness.

**Key design principles:**
- Black and white, minimalistic aesthetic
- Mechanographic / typewriter-style fonts
- Easy navigation through articles/posts
- Each post: title + transcription text + video link
- The UI/UX should honor the straightforward, no-frills philosophy of the content

---

# Product Guide

## Vision
A personal archive and public platform for long-form, unfiltered thought — transcriptions of YouTube videos presented in a minimalistic, distraction-free reading experience. The website is a counterpoint to short-form content culture, honoring rawness, directness, and depth.

## Target Audience
- **Primary:** The author — a personal archive of thoughts for self-reference
- **Secondary:** Existing YouTube subscribers (~hundreds) who want to read/search content
- **Tertiary:** New visitors discovering ideas through search engines

## Content Model
Each post consists of:
- **Title** — the topic or theme of the video
- **Transcription** — the full text, formatted into article form without altering content or tone
- **Video link** — embedded or linked YouTube video

Content volume: 150–500 transcriptions expected over time.

## Content Organization
- **Default view:** Chronological (newest first)
- **Secondary:** Topic/theme categorization with filtering capability
- Topics may include areas like philosophy, creativity, life, etc. (to be defined as content grows)

## Key Features
1. **Post listing** — browsable, chronological feed with topic filters
2. **Post page** — clean reading experience with title, transcription, and video link
3. **Search** — full-text search across all transcriptions
4. **About page** — explains the author's philosophy and the project's purpose

## Content Workflow
- Raw transcriptions are produced from YouTube videos
- **Future phase:** AI-assisted formatting pipeline — a team of agents will convert raw transcriptions into article form, preserving content and tone exactly
- Formatted articles are committed as Markdown files to the repository
- Astro builds and deploys the site from those Markdown files

## Design Philosophy
- Black and white palette — no color distractions
- Mechanographic/typewriter fonts — reflecting the raw, unpolished nature of the content
- Minimalistic layout — content-first, no visual noise
- Fast, simple navigation — the reader should never be more than one click from any article
