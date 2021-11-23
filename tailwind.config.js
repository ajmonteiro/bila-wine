module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                "[auto,auto,1fr]": "auto auto 1fr",
            },
        },
        screens: {
            xs: "100px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
