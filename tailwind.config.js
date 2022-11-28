/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",

          secondary: "#f4b5bc",

          accent: "#0f172a",

          neutral: "#1A1B23",

          "base-100": "#F7F6F9",

          info: "#76A1D5",

          success: "#47DC85",

          warning: "#C88914",

          error: "#F3203C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
