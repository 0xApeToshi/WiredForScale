import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import { JsonLd } from "@/components/JsonLd";
import { mdxComponents } from "@/components/mdx";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { SITE } from "@/lib/site";

type Params = { slug: string };

// Static generation for every post (SSG).
export async function generateStaticParams(): Promise<Params[]> {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Only render statically-known slugs; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    const url = `${SITE.url}/writing/${post.slug}`;
    return {
        title: post.title,
        description: post.summary,
        alternates: { canonical: `/writing/${post.slug}` },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.summary,
            url,
            publishedTime: post.date,
            authors: [SITE.author.name],
            tags: [post.topic],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.summary,
        },
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    return (
        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.summary,
                    datePublished: post.date,
                    dateModified: post.date,
                    articleSection: post.topic,
                    inLanguage: SITE.locale,
                    url: `${SITE.url}/writing/${post.slug}`,
                    image: `${SITE.url}/opengraph-image`,
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${SITE.url}/writing/${post.slug}`,
                    },
                    author: {
                        "@type": "Person",
                        name: SITE.author.name,
                        url: SITE.socials.linkedin.url,
                        sameAs: [
                            SITE.socials.github.url,
                            SITE.socials.linkedin.url,
                        ],
                    },
                    publisher: {
                        "@type": "Person",
                        name: SITE.author.name,
                    },
                }}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        {
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: SITE.url,
                        },
                        {
                            "@type": "ListItem",
                            position: 2,
                            name: "Writing",
                            item: `${SITE.url}/writing`,
                        },
                        {
                            "@type": "ListItem",
                            position: 3,
                            name: post.title,
                            item: `${SITE.url}/writing/${post.slug}`,
                        },
                    ],
                }}
            />

            <Link
                href="/writing"
                className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-brick"
            >
                ← All writing
            </Link>

            <header className="mt-6 border-b border-line pb-8">
                <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                    <span className="text-brick">{post.topic}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{post.formattedDate}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min read</span>
                </div>
                <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl">
                    {post.title}
                </h1>
                <p className="mt-4 text-xl leading-relaxed text-ink-soft">
                    {post.summary}
                </p>
            </header>

            <div className="prose mt-10">
                <MDXRemote
                    source={post.content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm, remarkSmartypants],
                            rehypePlugins: [
                                rehypeSlug,
                                [
                                    rehypeAutolinkHeadings,
                                    {
                                        behavior: "wrap",
                                        properties: { className: ["anchor"] },
                                    },
                                ],
                            ],
                        },
                    }}
                />
            </div>

            <footer className="mt-16 border-t border-line pt-8">
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
                    Written by {SITE.author.name}
                </p>
                <p className="mt-2 max-w-xl text-ink-soft">
                    {SITE.author.role} and founder of {SITE.author.company}. If
                    this touched a nerve, the{" "}
                    <Link
                        href="/writing"
                        className="text-brick underline decoration-line-strong underline-offset-2 hover:decoration-brick"
                    >
                        rest of the writing
                    </Link>{" "}
                    is in the same voice.
                </p>
            </footer>
        </article>
    );
}
