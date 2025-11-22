/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            gilroy: ["Gilroy", "sans-serif"],
        },
    },
    plugins: [],
};
