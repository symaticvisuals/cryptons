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
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
