# Wired for Scale

Personal blog of Andrija Radica — *a field guide to the wiring of a modern digital business.*

Turborepo monorepo.

## Structure

```
apps/
  web/                      Next.js 16 blog (App Router, MDX, Tailwind 4)
packages/
  design-tokens/            Shared colours, type and CSS variables
  biome-config/             Shared Biome config
  typescript-config/        base.json, nextjs.json
docs/                       Project documentation
```

## Quick Start

```bash
pnpm install
pnpm dev            # web on http://localhost:3000
```

## Writing a post

Add an `.mdx` file to `apps/web/content/posts/`. Frontmatter:

```mdx
---
title: "Your title"
summary: "One or two sentences shown in listings and meta description."
date: "2026-09-09"        # ISO yyyy-mm-dd, drives ordering
topic: "Attribution"      # short kicker label
draft: true               # optional — hidden in production, visible in dev
---

Body in MDX. `<Callout>…</Callout>` is available for asides.
```

Everything else — the listing, the sitemap, the RSS feed, `llms.txt`, and the
post's static page — is generated from that file automatically.

## Stack

- **Runtime**: Node 24.x, pnpm 10.x, Turborepo 2.x
- **App**: Next.js 16 (App Router, SSG), React 19, Tailwind CSS 4
- **Content**: MDX via `next-mdx-remote`, `gray-matter` frontmatter
- **TypeScript**: strict mode, ES2025 target
- **Linting**: Biome 2.x (no ESLint, no Prettier)

## SEO / AEO

- Per-page metadata + canonical URLs, OpenGraph + Twitter cards
- JSON-LD: `Blog`, `BlogPosting`, `Person`, `BreadcrumbList`
- `sitemap.xml`, `robots.txt`, RSS at `/feed.xml`
- Static generation (`generateStaticParams`) for every post
- `llms.txt` served for AI tools (note: Google Search ignores it — see `docs/seo.md`)

## Commands

```bash
pnpm dev                  # Dev server
pnpm build                # Build all workspaces
pnpm type-check           # TypeScript check
pnpm lint                 # Biome check
pnpm lint:fix             # Biome auto-fix
pnpm knip                 # Dead code detection
pnpm clean                # Remove build artefacts
pnpm ci                   # Full CI pipeline
```

## License

Copyright (c) 2026 Andrija Radica. All rights reserved.
