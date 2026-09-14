/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "var(--bg)",
          fg: "var(--fg)",
          muted: "var(--muted)",
          faint: "var(--faint)",
          border: "var(--border)",
          accent: "var(--accent)",
          "accent-2": "var(--accent-2)",
          soft: "var(--accent-soft)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
