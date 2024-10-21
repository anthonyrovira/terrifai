/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "halloween-orange": "#FF6600",
        "halloween-purple": "#660066",
        "halloween-green": "#00FF00",
        "halloween-black": "#000000",
        "halloween-gray": "#333333",
        "halloween-dark": "#1a1a1a",
      },
      fontFamily: {
        zombie: ["Zombie Brush", "cursive"],
        gont: ["Gontserrat-Regular", "sans-serif"],
        gontblack: ["Gontserrat-Black", "sans-serif"],
        robota: ["Robota", "sans-serif"],
      },
      backgroundImage: {
        "halloween-gradient": "linear-gradient(to right, #FF6600, #6B0F9C)",
        spiderweb: "url('/path-to-your-spiderweb-image.png')",
      },
      boxShadow: {
        halloween: "0 4px 6px -1px rgba(255, 102, 0, 0.5), 0 2px 4px -1px rgba(107, 15, 156, 0.5)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        flicker: "flicker 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      borderRadius: {
        pumpkin: "40% 60% 60% 40% / 60% 30% 70% 40%",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-halloween": {
          textShadow: "2px 2px 4px rgba(255, 102, 0, 0.5), -2px -2px 4px rgba(107, 15, 156, 0.5)",
        },
        ".clip-path-bat": {
          clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
