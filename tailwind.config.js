/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        "gray-50":  "#f5f5f5",
        "gray-100": "#e5e5e5",
        "gray-200": "#d4d4d4",
        "gray-400": "#a3a3a3",
        "gray-500": "#737373",
        "gray-700": "#404040",
        "gray-900": "#171717",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.02em",
        wide:    "0.08em",
        widest:  "0.14em",
      },
      animation: {
        "fade-up":    "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":    "fadeIn 0.8s ease both",
        "dot-pulse":  "dotPulse 2s ease-in-out infinite",
        "scroll-bar": "scrollBar 1.5s ease-in-out infinite alternate",
        "nav-reveal": "navReveal 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        dotPulse: {
          "0%,100%": { transform: "scale(1)",   opacity: "1" },
          "50%":     { transform: "scale(1.4)", opacity: "0.5" },
        },
        scrollBar: {
          from: { top: "-100%" },
          to:   { top: "60%" },
        },
        navReveal: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        750: "750ms",
      },
    },
  },
  plugins: [],
};