import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        panel: "0 22px 70px rgba(21, 28, 34, 0.13)",
      },
    },
  },
  plugins: [],
} satisfies Config;
