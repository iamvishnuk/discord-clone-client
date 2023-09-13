/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "img-login-register":
                    "url('/src/assets/Images/backgroun-img-1.png')",
            },
            backgroundColor: {
                "form-color": "#414141",
                "input-bg": "#2B2B2B",
            },
        },
    },
    plugins: [],
};
