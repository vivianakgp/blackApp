/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "dark-main": "#18191A",
                "dark-second": "#242526",
                "dark-third": "#3A3B3C",
                "dark-txt": "#B8BBBF",
                sky: colors.sky,
                teal: colors.teal,
                rose: colors.rose,
                orange: colors.orange,
                lime: colors.lime,
                slate: colors.slate,
            },
        },
    },
    variants: {},
    plugins: [],
};
