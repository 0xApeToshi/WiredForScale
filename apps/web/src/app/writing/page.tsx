import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
    title: "Writing",
    description: `Essays on the wiring of a modern business, by ${SITE.author.name}.`,
    alternates: { canonical: "/writing" },
};

export default async function WritingIndex() {
    const posts = await getAllPostMeta();

    return (
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <header className="max-w-2xl">
                <p className="kicker">Writing</p>
                <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                    Reading the stack out loud.
                </h1>
                <p className="mt-4 text-lg text-ink-soft">
                    Post-mortems with a number attached, pre-signing checklists,
                    and plain answers to the words you&rsquo;ve nodded at in
                    meetings. A boring, honest cadence.
                </p>
            </header>

            <div className="mt-12">
                {posts.length === 0 ? (
                    <p className="py-10 text-ink-muted">
                        First posts are on their way.
                    </p>
                ) : (
                    posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))
                )}
            </div>
        </div>
    );
}
