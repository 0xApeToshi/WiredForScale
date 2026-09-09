import type { MetadataRoute } from "next";
import { INDEXABLE_STATIC_ROUTES } from "@/lib/navigation";
import { getAllPostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPostMeta();

    const staticEntries: MetadataRoute.Sitemap = INDEXABLE_STATIC_ROUTES.map(
        (route) => ({
            url: `${SITE.url}${route.href === "/" ? "" : route.href}`,
            changeFrequency: route.href === "/" ? "weekly" : "monthly",
            priority: route.href === "/" ? 1 : 0.7,
        }),
    );

    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE.url}/writing/${post.slug}`,
        lastModified: post.date,
        changeFrequency: "yearly",
        priority: 0.6,
    }));

    return [...staticEntries, ...postEntries];
}
