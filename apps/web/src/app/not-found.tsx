import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-28 sm:px-8">
            <p className="kicker">404 — Not found</p>
            <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
                This wire goes nowhere.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-ink-soft">
                The page you asked for isn&rsquo;t here. Nothing failed silently
                — this one just doesn&rsquo;t exist.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-mono text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-brick"
            >
                ← Back home
            </Link>
        </div>
    );
}
