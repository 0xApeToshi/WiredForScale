/**
 * Wired for Scale — design tokens.
 *
 * Warm, business-editorial identity: a warm cream paper (kept from the start),
 * near-black ink, and a confident money-green as the primary signal — growth,
 * scale, "the number went up." A warm amber is the secondary accent. Type is a
 * punchy grotesk display over a warm humanist sans for reading. No monospace.
 */

export const COLORS = {
    // Ink — text and structure
    ink: "#1c1a15",
    inkSoft: "#4b463c",
    inkMuted: "#77705f",

    // Paper — warm surfaces
    paper: "#f6f1e7",
    paperRaised: "#fffbf3",

    // Hairlines
    line: "#e6ddcc",
    lineStrong: "#d2c8b2",

    // Accent — money green (growth / scale)
    accent: "#12905a",
    accentDeep: "#0a5c39",
    accentSoft: "#e2efe4",

    // Amber — warm secondary accent
    amber: "#c2872f",
} as const;

export const FONTS = {
    // Display grotesk — headlines and the wordmark
    display: '"Bricolage Grotesque", "Helvetica Neue", Arial, sans-serif',
    // Reading + UI sans — body copy, labels, everything else
    sans: '"Figtree", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

/** Maximum reading measure for long-form prose. */
export const MEASURE = "70ch" as const;

export type ColorToken = keyof typeof COLORS;
export type FontToken = keyof typeof FONTS;
