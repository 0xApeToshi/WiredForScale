import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * The wordmark: a small "wiring" glyph (two nodes joined through a junction)
 * next to the serif logotype. The glyph is the visual shorthand for the whole
 * blog — connections between things, made visible.
 */
export function Wordmark({ className = "" }: { className?: string }) {
    return (
        <Link
            href="/"
            aria-label={`${SITE.brand} — home`}
            className={`group inline-flex items-center gap-2.5 ${className}`}
        >
            <WiringGlyph className="text-brick" />
            <span className="font-display text-[1.35rem] leading-none tracking-tight text-ink">
                Wired <span className="text-ink-muted">for</span> Scale
            </span>
        </Link>
    );
}

export function WiringGlyph({ className = "" }: { className?: string }) {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <title>Wired for Scale</title>
            {/* wires */}
            <path
                d="M4 6h8a3 3 0 0 1 3 3v8"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
            />
            <path
                d="M22 20h-8a3 3 0 0 1-3-3V9"
                stroke="var(--color-copper)"
                strokeWidth="1.6"
                fill="none"
            />
            {/* nodes */}
            <circle cx="4" cy="6" r="2.4" fill="currentColor" />
            <circle cx="22" cy="20" r="2.4" fill="var(--color-copper)" />
        </svg>
    );
}
