import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { SITE } from "@/lib/site";

export function PostCard({ post }: { post: PostMeta }) {
    return (
        <article className="group border-t border-line py-7 first:border-t-0">
            <Link
                href={`/writing/${post.slug}`}
                className="-mx-4 block rounded-lg px-4 py-2 transition-colors hover:bg-paper-raised"
            >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="pill">{post.topic}</span>
                    <span className="font-label text-[0.8rem] text-ink-muted">
                        <time dateTime={post.date}>{post.formattedDate}</time>
                        <span className="mx-2 text-line-strong">/</span>
                        {post.readingMinutes} min read
                    </span>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-accent-deep sm:text-[1.65rem]">
                    {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-ink-soft">{post.summary}</p>
                <span className="mt-3 flex items-center gap-2 text-[0.85rem] text-ink-muted">
                    <span
                        aria-hidden="true"
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-[0.6rem] font-bold text-accent-deep"
                    >
                        AR
                    </span>
                    By {SITE.author.name}
                </span>
            </Link>
        </article>
    );
}
