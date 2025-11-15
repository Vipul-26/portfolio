/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    colors: {
      primary: "#64ffda",
      primaryLight: "rgba(100, 255, 218, 0.07)",
      secondary: "#0a192f",
      secondaryLight: "#172a45",
      secondaryLighter: "#020c1b",
      secondaryLightest: "#ccd6f6",
      tertiary: "#8892b0",
      tertiaryLight: "#a8b2d1",
      tertiaryLighter: "#ccd6f6",
    },
    extend: {
      blend: { screen: "screen" },
    },
  },
  plugins: [],
};
