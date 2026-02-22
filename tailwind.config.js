/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          800: "#111A2E",
          700: "#18243C",
        },
        slatey: {
          50: "#F6F7FB",
          100: "#EEF1F7",
          200: "#D8DFEC",
          300: "#B9C6DD",
        },
        mint: {
          50: "#E8FFF7",
          100: "#CFFFEF",
          300: "#57E6C2",
          500: "#19C7A0",
          700: "#0D8B71",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 20, 35, 0.10)",
        lift: "0 12px 40px rgba(13, 20, 35, 0.16)",
        insetSoft: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};