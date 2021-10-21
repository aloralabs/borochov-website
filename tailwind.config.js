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
            listStyleType: {
                arrow: 'disclosure-closed'
            }
        },
    },
    variants: {
        extend: {
            transitionProperty: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
