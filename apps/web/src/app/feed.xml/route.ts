import { getAllPostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

const escapeXml = (s: string): string =>
    s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

export const dynamic = "force-static";

export async function GET(): Promise<Response> {
    const posts = await getAllPostMeta();

    const items = posts
        .map(
            (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE.url}/writing/${post.slug}</link>
      <guid isPermaLink="true">${SITE.url}/writing/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.topic)}</category>
      <description>${escapeXml(post.summary)}</description>
    </item>`,
        )
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.brand)}</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>en-us</language>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
