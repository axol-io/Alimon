/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#75835D",  //Camo 400
          "primary-content": "#212638",
          secondary: "#FCFDC7", //Yellow 100
          "secondary-content": "#212638",
          accent: "#FCFC03", //Yellow 300
          "accent-content": "#212638",
          neutral: "#ffffff",
          "neutral-content": "#ffffff",
          "base-100": "#9BA885", //Camo 300
          "base-200": "#f4f8ff",
          "base-300": "#75835D",
          "base-content": "#212638",
          info: "#11140C", //Camo 700
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#75835D",  //Camo 400
          "primary-content": "#FCFC03",
          secondary: "#FCFDC7", //Yellow 100
          "secondary-content": "#FCFC03",
          accent: "#FCFC03", //Yellow 300
          "accent-content": "#FCFC03",
          neutral: "#FFFFFF", //white
          "neutral-content": "#FCFC03",
          "base-100": "#000000", // Ensuring background uses #000000
          "base-200": "#11140C",
          "base-300": "#212638",
          "base-content": "#75835D",
          info: "#9BA885", //Camo 300
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};

