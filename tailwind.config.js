module.exports = {
    mode: "jit",
    purge: {
        content: ["./templates/**/*.html"],
    },
    darkMode: false,
    theme: {
        extend: {
            transitionProperty: {
                'footer': 'color, filter'
            }
        },
    },
    variants: {
        extend: {
            transitionProperty: ['hover']
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
