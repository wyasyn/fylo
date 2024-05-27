/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                lg: "1024px",
            },
        },
        extend: {
            fontFamily: {
                opensans: "var(--open-sans)",
                raleway: "var(--raleway)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                secondary: "hsl(var(--secondary))",
                intro: "hsl(var(--intro))",
                primary: "hsl(var(--primary))",
                accent: "hsl(var(--accent))",
                destructive: "hsl(var(--destructive))",
                card: "hsl(var(--card))",
            },
        },
    },
    plugins: [],
};
