import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A6B",
        amber: "#E8A020",
        teal: "#2A9D78",
        cream: "#F9F7F2",
        text: "#1A1A2E",
      },
      fontFamily: {
        heading: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-nunito-sans)", "sans-serif"],
        serif: ["var(--font-source-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
