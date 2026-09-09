import Link from "next/link";
import { WiringGlyph } from "@/components/Wordmark";
import { INDEXABLE_STATIC_ROUTES, SOCIAL_LINKS } from "@/lib/navigation";
import { SITE } from "@/lib/site";

export function Footer() {
    const year = new Date().getUTCFullYear();

    return (
        <footer className="mt-24 border-t border-line">
            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
                <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2.5">
                            <WiringGlyph className="text-brick" />
                            <span className="font-display text-lg text-ink">
                                {SITE.brand}
                            </span>
                        </div>
                        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-muted">
                            {SITE.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 font-mono text-[0.8rem] uppercase tracking-[0.12em]">
                        <nav aria-label="Pages">
                            <p className="mb-3 text-ink-muted">Pages</p>
                            <ul className="space-y-2">
                                {INDEXABLE_STATIC_ROUTES.map((r) => (
                                    <li key={r.href}>
                                        <Link
                                            href={r.href}
                                            className="text-ink-soft transition-colors hover:text-brick"
                                        >
                                            {r.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <nav aria-label="Elsewhere">
                            <p className="mb-3 text-ink-muted">Elsewhere</p>
                            <ul className="space-y-2">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="me noopener noreferrer"
                                            className="text-ink-soft transition-colors hover:text-brick"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href={SITE.featuredWriting.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-ink-soft transition-colors hover:text-brick"
                                    >
                                        r/startups
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
                    <span>
                        © {year} {SITE.author.name}
                    </span>
                    <span>Written in {SITE.author.location}</span>
                </div>
            </div>
        </footer>
    );
}
