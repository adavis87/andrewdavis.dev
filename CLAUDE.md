# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Andrew Davis's personal portfolio website built with Astro. The site includes:
- Personal homepage with about, work, projects, and writing sections
- Blog functionality with MDX posts
- Social links and project showcases

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Type-check with `astro check` then build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## Architecture

### Content Management
- Blog posts are managed through Astro's content collections in `src/content/posts/`
- Content schema is defined in `src/content/config.ts` with required fields: title, description, isDraft, publishDate, readingTimeMins
- Posts use MDX format and are rendered via `[slug].astro` dynamic route

### Component Structure
- **Atoms**: Basic UI components (Text, Link, Flex, Spacer, etc.) in `src/components/atoms/`
- **Home Sections**: Page-specific components (AboutSection, ProjectSection, WorkSection, WritingSection) in `src/components/home/`
- **Layouts**: Page templates (HomeLayout, BlogPostLayout) in `src/layouts/`

### Data Management
- Static data for social links, work entries, and projects is managed through enums and interfaces in `src/lib/types.ts`
- Helper functions for data fetching and formatting are in `src/lib/` (posts.ts, projects.ts, social.ts, etc.)

### Styling
- Global styles in `src/styles/style.css`
- Flex-based layout system with responsive props for gaps and alignment

### Deployment
- Configured for Cloudflare Pages deployment via `wrangler.jsonc`
- Build output goes to `./dist` directory