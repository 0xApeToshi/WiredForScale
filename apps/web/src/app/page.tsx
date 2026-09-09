import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { getAllPostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default async function HomePage() {
    const posts = await getAllPostMeta();
    const latest = posts.slice(0, 6);

    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    name: SITE.brand,
                    description: SITE.description,
                    url: SITE.url,
                    inLanguage: SITE.locale,
                    author: {
                        "@type": "Person",
                        name: SITE.author.name,
                        url: SITE.socials.linkedin.url,
                    },
                }}
            />

            {/* Hero */}
            <section className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
                <p className="kicker">A field guide to your own stack</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
                    Your company is software
                    <br className="hidden sm:block" /> you didn&rsquo;t write.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                    Your operating procedures don&rsquo;t live in a handbook
                    anymore. They live in a Zapier filter, a CRM automation, a
                    plugin setting, a spreadsheet formula, a webhook.
                    That&rsquo;s a codebase — assembled one subscription at a
                    time, and no one has read the whole thing.{" "}
                    <span className="text-ink">
                        This blog reads it out loud.
                    </span>
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                        href="/writing"
                        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-label text-[0.95rem] text-white shadow-sm transition-colors hover:bg-accent-deep"
                    >
                        Read the writing →
                    </Link>
                    <a
                        href={SITE.featuredWriting.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-label text-[0.95rem] text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-deep"
                    >
                        {SITE.featuredWriting.label} ↗
                    </a>
                </div>
            </section>

            {/* Thesis strip — a numbered "growth" panel */}
            <section className="border-y border-line bg-paper-raised">
                <div className="mx-auto grid max-w-5xl gap-px overflow-hidden px-5 py-12 sm:grid-cols-3 sm:gap-0 sm:px-8">
                    {THESIS.map((item, i) => (
                        <div
                            key={item.title}
                            className="sm:px-6 sm:first:pl-0 sm:last:pr-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-line"
                        >
                            <span className="font-display text-2xl font-extrabold tabular-nums text-accent">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h2 className="mt-2 font-display text-xl text-ink">
                                {item.title}
                            </h2>
                            <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest writing */}
            <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="flex items-baseline justify-between">
                    <h2 className="kicker">Latest writing</h2>
                    <Link
                        href="/writing"
                        className="font-label text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-accent"
                    >
                        All posts →
                    </Link>
                </div>
                <div className="mt-6">
                    {latest.length === 0 ? (
                        <p className="py-10 text-ink-muted">
                            First posts are on their way.
                        </p>
                    ) : (
                        latest.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}

const THESIS = [
    {
        title: "Whose problem does it solve?",
        body: "Every hyped tool was invented for a constraint someone actually had. The first question is whether you have it too.",
    },
    {
        title: "What you've delegated",
        body: "An ad algorithm knows what a good customer looks like. Thirty plugin authors can change your site tonight. Know who holds the keys.",
    },
    {
        title: "The quiet failures",
        body: "The automation that broke in March is still broken. No alarm — because the failure mode was silence. We make it loud.",
    },
];
