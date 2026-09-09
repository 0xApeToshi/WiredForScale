import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
    return (
        <article className="group border-t border-line py-8 first:border-t-0">
            <Link href={`/writing/${post.slug}`} className="block">
                <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                    <span className="text-brick">{post.topic}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{post.formattedDate}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingMinutes} min</span>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-brick sm:text-[1.7rem]">
                    {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-ink-soft">{post.summary}</p>
                <span className="mt-3 inline-block font-mono text-[0.75rem] uppercase tracking-[0.14em] text-brick opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                </span>
            </Link>
        </article>
    );
}
