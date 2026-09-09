import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
    title: "About",
    description: `About ${SITE.author.name} and why Wired for Scale exists.`,
    alternates: { canonical: "/about" },
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: SITE.author.name,
                    jobTitle: SITE.author.role,
                    worksFor: {
                        "@type": "Organization",
                        name: SITE.author.company,
                    },
                    address: SITE.author.location,
                    url: SITE.url,
                    sameAs: [
                        SITE.socials.github.url,
                        SITE.socials.linkedin.url,
                    ],
                }}
            />

            <p className="kicker">About</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                I take on the work most people avoid.
            </h1>

            <div className="prose mt-10">
                <p>
                    I&rsquo;m Andrija Radica — Andy. I&rsquo;m a software
                    architect and data engineer, and the founder of Async
                    Integrations, a B2B software and data consultancy. For eight
                    years I&rsquo;ve delivered for clients end to end: scoping,
                    designing, building, and owning the outcome.
                </p>
                <p>
                    The engagements I take on are the ones people avoid.
                    Fragmented data estates spread across six systems with no
                    shared key. Unsupported legacy stacks handed over by a team
                    that left. Integrations failing silently in production,
                    where the failure mode is quiet and nobody finds out until
                    the number is already wrong. I&rsquo;ve rescued a
                    marketplace platform, unified deal data for a firm that grew
                    from ten people to thirty, and built an ERP that six hundred
                    people log into.
                </p>
                <p>
                    That work taught me something that has almost nothing to do
                    with code: most businesses run on software nobody chose to
                    build. It accumulated one subscription, one automation, one
                    spreadsheet at a time. The people running it are sharp,
                    experienced operators — they just were never told what
                    they&rsquo;d handed over, or to whom.
                </p>

                <h2>Why this blog exists</h2>
                <p>
                    Wired for Scale is for founders, agency owners, consultants,
                    and operators who run real businesses and buy technology
                    without being technologists. If you&rsquo;ve sat in a
                    meeting where four people quoted four different revenue
                    numbers, been told a two-week change would take two months
                    without an explanation you could evaluate, or watched a
                    third of your pipeline get attributed to &ldquo;direct /
                    none&rdquo; — I wrote this for you.
                </p>
                <p>
                    The thing you&rsquo;re missing isn&rsquo;t technical
                    knowledge. It&rsquo;s knowing what you&rsquo;ve delegated
                    and to whom. That&rsquo;s available to you without becoming
                    technical, and it&rsquo;s most of what separates a business
                    that scales from one that quietly fills up with things
                    nobody can explain.
                </p>
                <p>
                    The point isn&rsquo;t that you should understand the
                    technology. It&rsquo;s that you should remain the one who
                    decides.
                </p>
            </div>

            <div className="mt-12 border-t border-line pt-8">
                <p className="kicker">Find me</p>
                <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 font-label text-sm">
                    <li>
                        <a
                            href={SITE.socials.github.url}
                            target="_blank"
                            rel="me noopener noreferrer"
                            className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                        >
                            GitHub / {SITE.socials.github.handle}
                        </a>
                    </li>
                    <li>
                        <a
                            href={SITE.socials.linkedin.url}
                            target="_blank"
                            rel="me noopener noreferrer"
                            className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                        >
                            LinkedIn / {SITE.socials.linkedin.handle}
                        </a>
                    </li>
                    <li>
                        <a
                            href={`mailto:${SITE.author.email}`}
                            className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                        >
                            {SITE.author.email}
                        </a>
                    </li>
                </ul>
                <p className="mt-6 text-ink-soft">
                    The r/startups post &mdash;{" "}
                    <a
                        href={SITE.featuredWriting.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-line-strong underline-offset-2 hover:decoration-accent"
                    >
                        &ldquo;{SITE.featuredWriting.title}&rdquo;
                    </a>{" "}
                    &mdash; {SITE.featuredWriting.blurb}
                </p>
            </div>
        </div>
    );
}
