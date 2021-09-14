module.exports = {
    mode: "jit",
    purge: {
        content: ["./templates/**/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
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
