import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
    content: ["templates/**/*.html"],
    theme: {
        container: ({ theme }) => ({
            center: true,
            padding: {
                DEFAULT: theme("spacing.4"),
                lg: theme("spacing.6"),
                xl: theme("spacing.8"),
            },
        }),
        screens: {
            sm: defaultTheme.screens.sm,
            md: defaultTheme.screens.md,
            lg: defaultTheme.screens.lg,
            xl: defaultTheme.screens.xl,
        },
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
} satisfies Config;
