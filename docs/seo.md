# SEO / AEO / GEO notes

Everything below is grounded in **official Google Search Central documentation**.
No third-party SEO opinions. Sources are linked inline.

## The headline finding

Google has no special "AEO"/"GEO" checklist. Its AI features (AI Overviews, AI
Mode) are "rooted in our core Search ranking and quality systems," so the same
fundamentals apply — be indexable, snippet-eligible, and genuinely helpful.

> "There are no additional requirements to appear in AI Overviews or AI Mode,
> nor other special optimizations necessary."
> — https://developers.google.com/search/docs/appearance/ai-features

## llms.txt — the honest answer

Google Search **ignores** `llms.txt` and all "AI text files":

> "You don't need to create new machine readable files, AI text files, markup,
> or Markdown to appear in Google Search (including its generative AI
> capabilities), as Google Search itself doesn't use them. … they will neither
> harm nor help your site's visibility."
> — https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

We still serve `/llms.txt` because it's cheap, harmless, and some non-Google AI
tools consume it. It is **not** part of our Google strategy.

## What actually moves the needle (all implemented)

- **Indexability** — `robots.txt` allows crawling; nothing important is blocked.
  (https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- **Sitemap** with accurate `lastmod`, submitted in Search Console.
  (https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Unique, descriptive titles** and **unique meta descriptions** per page.
  (https://developers.google.com/search/docs/appearance/title-link,
  https://developers.google.com/search/docs/appearance/snippet)
- **Canonical URLs** via `alternates.canonical` on every route.
  (https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- **Structured data** — JSON-LD `BlogPosting` (with `author`, `datePublished`,
  `dateModified`, `headline`, `image`), `Person`, `Blog`, `BreadcrumbList`.
  (https://developers.google.com/search/docs/appearance/structured-data/article)
- **People-first content + E-E-A-T** — visible byline linked to an author page,
  first-hand experience, trustworthy sourcing. Disclose AI assistance where used.
  (https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Core Web Vitals** — target LCP ≤ 2.5s, INP < 200ms, CLS < 0.1. Static
  generation + system-swap fonts + minimal JS keep us in the "good" band.
  (https://developers.google.com/search/docs/appearance/core-web-vitals)
- **RSS/Atom feed** at `/feed.xml` for fast discovery of new posts.
  (https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

## Post-launch checklist (manual, one-time)

1. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
2. Verify the domain in Google Search Console.
3. Submit `https://www.wiredforscale.com/sitemap.xml`.
4. Run the Rich Results Test on a post URL to confirm the JSON-LD parses.
5. Check Core Web Vitals in PageSpeed Insights after deploy.
