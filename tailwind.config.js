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
      "bg-off": ["#ABEF5F80"],
      "text-black": ["#000000"],
      "p-color": ["#494949"],
      "s-color": ["#F4F4F4"],
      "bg-white": ["#ffffff"],
      "h1-color": ["#212121"],
      color_bg: ["#f7f7f7"],
      border_color: ["#E9E9E9"],
      concept_color: ["#E7C1D3"],
      design_color: ["#EFDA6E"],
      supervision_color: ["#A4DAC3"],
      budget_color: ["#77AAEA"],
    },

    backgroundImage: {
      bg: "url('./assets/bg.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
