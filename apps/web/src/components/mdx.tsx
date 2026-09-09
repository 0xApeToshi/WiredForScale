import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

type AnchorProps = React.ComponentPropsWithoutRef<"a">;

// Internal links use next/link for client-side nav; external links open safely.
function MdxLink({ href = "", children, ...rest }: AnchorProps) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
        return (
            <Link href={href} {...rest}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </a>
    );
}

/** A pull-quote / aside usable from inside MDX: <Callout>…</Callout>. */
function Callout({ children }: { children: React.ReactNode }) {
    return (
        <aside className="my-8 border-l-2 border-amber bg-paper-raised px-5 py-4 font-sans text-ink">
            {children}
        </aside>
    );
}

export const mdxComponents: MDXRemoteProps["components"] = {
    a: MdxLink,
    Callout,
};
