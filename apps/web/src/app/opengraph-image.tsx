import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.brand} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#f5f0e6",
                padding: "72px",
                fontFamily: "Georgia, serif",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <svg
                    width="46"
                    height="46"
                    viewBox="0 0 26 26"
                    fill="none"
                    role="img"
                    aria-label="Wired for Scale"
                >
                    <title>Wired for Scale</title>
                    <path
                        d="M4 6h8a3 3 0 0 1 3 3v8"
                        stroke="#8a2b2f"
                        strokeWidth="2"
                    />
                    <path
                        d="M22 20h-8a3 3 0 0 1-3-3V9"
                        stroke="#b56a2e"
                        strokeWidth="2"
                    />
                    <circle cx="4" cy="6" r="3" fill="#8a2b2f" />
                    <circle cx="22" cy="20" r="3" fill="#b56a2e" />
                </svg>
                <div
                    style={{
                        fontSize: "26px",
                        letterSpacing: "6px",
                        textTransform: "uppercase",
                        color: "#6f6355",
                    }}
                >
                    {SITE.brand}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#1b1712",
                }}
            >
                <div style={{ fontSize: "78px", lineHeight: 1.05 }}>
                    Your company is software
                </div>
                <div style={{ fontSize: "78px", lineHeight: 1.05 }}>
                    you didn&rsquo;t write.
                </div>
            </div>

            <div
                style={{ display: "flex", fontSize: "28px", color: "#8a2b2f" }}
            >
                {SITE.author.name} — reading the stack out loud.
            </div>
        </div>,
        size,
    );
}
