import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = join(process.cwd(), "content", "posts");

export type PostFrontmatter = {
    title: string;
    summary: string;
    date: string; // ISO yyyy-mm-dd
    topic: string; // e.g. "Attribution", "Automation", "Data"
    draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
    slug: string;
    readingMinutes: number;
    formattedDate: string;
};

export type Post = PostMeta & {
    content: string;
};

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
});

function parseFile(slug: string, raw: string): Post {
    const { content, data } = matter(raw);
    const fm = data as PostFrontmatter;

    if (!fm.title || !fm.date || !fm.summary) {
        throw new Error(
            `Post "${slug}" is missing required frontmatter (title, date, summary).`,
        );
    }

    return {
        ...fm,
        slug,
        content,
        readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
        formattedDate: DATE_FORMAT.format(new Date(fm.date)),
    };
}

function slugFromFilename(filename: string): string {
    return filename.replace(/\.mdx?$/, "");
}

const isPublished = (post: Post): boolean =>
    process.env.NODE_ENV === "development" ? true : post.draft !== true;

/** All posts, newest first, drafts hidden in production. */
export async function getAllPosts(): Promise<Post[]> {
    const files = await readdir(POSTS_DIR);
    const posts = files
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
        .map((f) => {
            const slug = slugFromFilename(f);
            return parseFile(slug, readFileSync(join(POSTS_DIR, f), "utf8"));
        })
        .filter(isPublished);

    posts.sort((a, b) => b.date.localeCompare(a.date));
    return posts;
}

/** Lightweight metadata for listings (drops the MDX body). */
export async function getAllPostMeta(): Promise<PostMeta[]> {
    const posts = await getAllPosts();
    return posts.map(({ content: _content, ...meta }) => meta);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const posts = await getAllPosts();
    return posts.find((p) => p.slug === slug) ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
    const posts = await getAllPosts();
    return posts.map((p) => p.slug);
}
