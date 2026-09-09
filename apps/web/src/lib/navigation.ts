// Single source of truth for the site's routes and their canonical labels.
// Header, Footer and the sitemap all derive from here — never re-type a path.

import { SITE } from "@/lib/site";

export type Route = { label: string; href: string };
export type ExternalLink = Route & { external: true };

export const ROUTES = {
    home: { label: "Home", href: "/" },
    writing: { label: "Writing", href: "/writing" },
    about: { label: "About", href: "/about" },
} as const satisfies Record<string, Route>;

// Top-level header nav, in order.
export const PRIMARY_NAV: Route[] = [ROUTES.writing, ROUTES.about];

// External links surfaced in the footer (and, selectively, elsewhere).
export const SOCIAL_LINKS: ExternalLink[] = [
    {
        label: SITE.socials.github.label,
        href: SITE.socials.github.url,
        external: true,
    },
    {
        label: SITE.socials.linkedin.label,
        href: SITE.socials.linkedin.url,
        external: true,
    },
];

// Static routes that belong in the sitemap. The dynamic /writing/[slug] entries
// are appended from the post data by the sitemap route itself.
export const INDEXABLE_STATIC_ROUTES: Route[] = [
    ROUTES.home,
    ROUTES.writing,
    ROUTES.about,
];
