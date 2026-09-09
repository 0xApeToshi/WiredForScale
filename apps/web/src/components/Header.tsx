import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { PRIMARY_NAV } from "@/lib/navigation";

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
                <Wordmark />
                <nav aria-label="Primary">
                    <ul className="flex items-center gap-6 font-label text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft">
                        {PRIMARY_NAV.map((route) => (
                            <li key={route.href}>
                                <Link
                                    href={route.href}
                                    className="transition-colors hover:text-accent"
                                >
                                    {route.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
