/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: "#0D1B2A",
          mid: "#1E3A5F",
          light: "#1a2d45",
          card: "#0f2236",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#e8c84a",
          dark: "#b8962e",
        },
        silver: "#F1F2F4",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "bar-grow": "barGrow 1.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "glow": "glow 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "shimmer": "shimmer 2.5s infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "typewriter": "typewriter 3s steps(30) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(212,175,55,0)" },
        },
        barGrow: {
          from: { transform: "scaleY(0)", transformOrigin: "bottom" },
          to: { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(212,175,55,0.5)" },
          "50%": { textShadow: "0 0 30px rgba(212,175,55,1), 0 0 60px rgba(212,175,55,0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #e8c84a 50%, #b8962e 100%)",
        "navy-gradient": "linear-gradient(135deg, #0D1B2A 0%, #1E3A5F 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(30,58,95,0.8) 0%, rgba(13,27,42,0.9) 100%)",
      },
    },
  },
  plugins: [],
};
