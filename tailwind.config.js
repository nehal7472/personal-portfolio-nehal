/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-animated-dark", "bg-animated-light"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15D1E9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#21BF73",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
      fontFamily: {
        body: ["Josefin Sans", "sans-serif"],
        special: ["Nunito", "sans-serif"],
      },
      keyframes: {
        slideInOut: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "20%": { opacity: "1", transform: "translateX(0)" },
          "80%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100px)" },
        },
        // optional: used by bg utilities below
        bgPan: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
      animation: {
        slideInOut: "slideInOut 3s infinite",
        bgPan: "bgPan 18s linear infinite",
        bounceOnce: "bounceOnce 3s ease-out 3", // duration 1s, run 1 time
      },
    },
  },
  plugins: [],
};
