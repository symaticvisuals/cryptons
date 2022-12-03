module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono"],
      sora: ["Sora"],
      work: ["Work Sans"],
    },
    screens: {
      xs: "270",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1080px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1700px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
