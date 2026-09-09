import { getAllPostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

// Serves /llms.txt — a plain-text, LLM-friendly map of the site following the
// llms.txt convention (https://llmstxt.org). Regenerated from the live post list.
export const dynamic = "force-static";

export async function GET(): Promise<Response> {
    const posts = await getAllPostMeta();

    const postLines =
        posts.length > 0
            ? posts
                  .map(
                      (p) =>
                          `- [${p.title}](${SITE.url}/writing/${p.slug}): ${p.summary}`,
                  )
                  .join("\n")
            : "- (First posts are on their way.)";

    const body = `# ${SITE.brand}

> ${SITE.description}

${SITE.brand} is written by ${SITE.author.name} (${SITE.author.role}, founder of ${SITE.author.company}). It is for founders, agency owners, consultants, and operators who run real businesses and buy technology without being technologists. The core thesis: your company is software you didn't write, and the job is knowing what you have delegated and to whom.

## Writing

${postLines}

## Pages

- [About](${SITE.url}/about): Who ${SITE.author.name} is and why this blog exists.
- [Writing](${SITE.url}/writing): The full list of essays.

## Elsewhere

- [GitHub](${SITE.socials.github.url}): ${SITE.author.name}'s open-source work (@${SITE.socials.github.handle}).
- [LinkedIn](${SITE.socials.linkedin.url}): ${SITE.author.name} (${SITE.socials.linkedin.handle}).
- [r/startups feature](${SITE.featuredWriting.url}): "${SITE.featuredWriting.title}" — ${SITE.featuredWriting.blurb}

## Feeds

- [RSS](${SITE.url}/feed.xml)
- [Sitemap](${SITE.url}/sitemap.xml)
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
