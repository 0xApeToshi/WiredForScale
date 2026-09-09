/**
 * Wired for Scale — design tokens.
 *
 * The visual identity carries over from Andrija's CV: warm paper, near-black
 * ink, a single deep brick-red signal colour, and a copper accent for the
 * "wiring" motif. Editorial serif for reading, mono for the technical labels.
 */

export const COLORS = {
    // Ink — text and structure
    ink: "#1b1712",
    inkSoft: "#4a4038",
    inkMuted: "#6f6355",

    // Paper — surfaces
    paper: "#f5f0e6",
    paperRaised: "#faf6ee",

    // Hairlines
    line: "#e4dbca",
    lineStrong: "#ccc0a8",

    // Signal — the brick red from the CV
    brick: "#8a2b2f",
    brickDeep: "#661e22",

    // Copper — the "wiring" accent, used sparingly for diagrams and rules
    copper: "#b56a2e",
} as const;

export const FONTS = {
    // Display serif — headlines and the wordmark
    display: '"Fraunces", Georgia, "Times New Roman", serif',
    // Reading serif — body copy
    body: '"Newsreader", Georgia, "Times New Roman", serif',
    // Mono — kickers, metadata, code, the technical voice
    mono: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
} as const;

/** Maximum reading measure for long-form prose. */
export const MEASURE = "68ch" as const;

export type ColorToken = keyof typeof COLORS;
export type FontToken = keyof typeof FONTS;
