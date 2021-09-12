module.exports = {
    mode: "jit",
    purge: {
        content: ["./templates/**/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
