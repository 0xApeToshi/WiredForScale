// Single source of truth for site-wide identity, copy and external links.

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wiredforscale.com";

export const SITE = {
    brand: "Wired for Scale",
    brandShort: "WIRED FOR SCALE",
    // The one-line thesis the whole blog hangs off.
    tagline: "Your company is software you didn't write.",
    description:
        "A blog about the wiring of a modern digital business — the connections between the tools you already use, and what happens when nobody can see them.",
    url: SITE_URL,
    locale: "en-US",
    author: {
        name: "Andrija Radica",
        shortName: "Andy",
        role: "Software architect & data engineer",
        company: "Async Integrations",
        location: "Zagreb, Croatia",
        email: "hello@asyncintegrations.hr",
    },
    socials: {
        github: {
            label: "GitHub",
            handle: "0xApeToshi",
            url: "https://github.com/0xApeToshi",
        },
        linkedin: {
            label: "LinkedIn",
            handle: "andrija-radica",
            url: "https://www.linkedin.com/in/andrija-radica",
        },
    },
    // The r/startups post that did 250k+ views in two days — featured as proof
    // that these arguments land outside a technical audience.
    featuredWriting: {
        label: "Read on r/startups",
        title: "Literally no reason to use Supabase in 2026",
        blurb: "250k+ views in two days on r/startups.",
        url: "https://www.reddit.com/r/startups/comments/1w9w9dw/literally_no_reason_to_use_supabase_in_2026_i/",
    },
} as const;

export type Social = (typeof SITE.socials)[keyof typeof SITE.socials];
