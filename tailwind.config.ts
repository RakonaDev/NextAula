import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        main: "0.8rem",
      },
      colors: {
        primary: {
          "50": "#e9f5ff",
          "100": "#d8ebff",
          "200": "#b8d9ff",
          "300": "#8ebfff",
          "400": "#6196ff",
          "500": "#3d6fff",
          "600": "#1c43ff",
          "700": "#1134f1",
          main: "#1231c9",
          "900": "#183197",
          "950": "#0e1a58",
        },
        secondary: {
          "50": "#effef5",
          "100": "#d9ffe7",
          "200": "#b6fcd2",
          "300": "#7ef7af",
          "400": "#3eea84",
          "500": "#15d262",
          main: "#0bb24f",
          "700": "#0c8940",
          "800": "#106b35",
          "900": "#0f582f",
          "950": "#023117",
        },
        black: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          main: "#000000",
        },
        white: {
          main: "#ffffff",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
      keyframes: {
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordionDown 0.2s ease-out",
        "accordion-up": "accordionUp 0.2s ease-out",
      },
    },
  },
} satisfies Config;
