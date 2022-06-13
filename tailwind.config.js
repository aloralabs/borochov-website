const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./templates/**/*.html"],
    theme: {
        extend: {
            transitionProperty: {
                footer: "color, filter",
            },
            height: {
                144: "36rem",
            },
            listStyleType: {
                arrow: "disclosure-closed",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
