import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pathway Extreme Variable", ...defaultTheme.fontFamily.sans],
        sans2: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        sans3: ["Quicksand Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        accent: {
          50: "#fdf3f3",
          100: "#fce4e4",
          200: "#facecf",
          300: "#f6abac",
          400: "#ef7a7c",
          500: "#e35052",
          600: "#d03234",
          700: "#b02729",
          800: "#902426",
          900: "#782425",
          950: "#410e0f",
        },
        primary: {
          50: "#eef4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5bdfc",
          400: "#8299f7",
          500: "#6475f0",
          600: "#474ee4",
          700: "#393cc9",
          800: "#3135a2",
          900: "#2e3381",
          950: "#1f2155",
        },
        muted: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-2rem)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(2rem)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(2rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(2rem)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-2rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-2rem)" },
        },
      },
      animation: {
        "slow-zoom": "zoom 45s alternate infinite ease-in-out",
        "mid-zoom": "zoom 18s alternate infinite ease-in-out",
        "fade-in": "fade-in 2s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.5s ease-in-out",
        "fade-out-up": "fade-out-up 0.5s ease-in-out",
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
        "fade-out-down": "fade-out-down 0.5s ease-in-out",
        "fade-in-right": "fade-in-right 0.5s ease-in-out",
        "fade-out-right": "fade-out-right 0.5s ease-in-out",
        "fade-in-left": "fade-in-left 0.5s ease-in-out",
        "fade-out-left": "fade-out-left 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  safelist: [
    "[counter-set:_num_var(--num-graduates)]",
    "[counter-set:_num_var(--num-professionals)]",
    "lg:-translate-x-[calc(0*33.33%)]",
    "lg:-translate-x-[calc(1*33.33%)]",
    "lg:-translate-x-[calc(2*33.33%)]",
    "lg:-translate-x-[calc(3*33.33%)]",
    "lg:-translate-x-[calc(4*33.33%)]",
    "lg:-translate-x-[calc(5*33.33%)]",
    "lg:-translate-x-[calc(6*33.33%)]",
    "lg:-translate-x-[calc(7*33.33%)]",
    "lg:-translate-x-[calc(8*33.33%)]",
    "lg:-translate-x-[calc(9*33.33%)]",
    "-translate-x-[calc(0*100%)]",
    "-translate-x-[calc(1*100%)]",
    "-translate-x-[calc(2*100%)]",
    "-translate-x-[calc(3*100%)]",
    "-translate-x-[calc(4*100%)]",
    "-translate-x-[calc(5*100%)]",
    "-translate-x-[calc(6*100%)]",
    "-translate-x-[calc(7*100%)]",
    "-translate-x-[calc(8*100%)]",
    "-translate-x-[calc(9*100%)]",
    "bg-red-700",
    "bg-green-500",
  ],
};
