import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
    display: "swap",
    weight: ["600", "700", "800"],
});

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.brand} — ${SITE.tagline}`,
        template: `%s · ${SITE.brand}`,
    },
    description: SITE.description,
    authors: [{ name: SITE.author.name, url: SITE.socials.linkedin.url }],
    creator: SITE.author.name,
    openGraph: {
        type: "website",
        siteName: SITE.brand,
        title: `${SITE.brand} — ${SITE.tagline}`,
        description: SITE.description,
        url: SITE.url,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE.brand} — ${SITE.tagline}`,
        description: SITE.description,
    },
    alternates: {
        canonical: "/",
        types: {
            "application/rss+xml": `${SITE.url}/feed.xml`,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
            <body className="flex min-h-dvh flex-col">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main" className="flex-1">
                    {children}
                </main>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
