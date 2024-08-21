/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors: {
      "primary-r-color": ["#ABEF5F"],
      "top-right-color": ["#1C1C1C"],
      "text-white": ["#ffffff"],
      "text-nav-active": ["#494949"],
      "text-nav-regular": ["#737373"],
      "bg-accent": ["#f1f5f9"],
    },

    backgroundImage: {
      bg: "url('./assets/bg.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
