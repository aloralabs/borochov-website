module.exports = {
    mode: "jit",
    purge: {
        content: ["./templates/**/*.html"],
    },
    darkMode: false,
    theme: {
        extend: {
            transitionProperty: {
                footer: "color, filter",
            },
            height: {
                144: "36rem",
            },
        },
    },
    variants: {
        extend: {
            transitionProperty: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
