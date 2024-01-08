/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        "2fr": "minmax(0, 2fr)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
