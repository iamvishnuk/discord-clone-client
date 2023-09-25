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
                "sidebar-bg": "#1E1F22",
                "gray-1": "#35373C",
                "gray-2": "#2B2D31",
                "gray-3": "#3A3D43",
                "gray-4": "#313338",
                "gray-5": "#393C41",
                "gray-6": "#2E3035",
                "green-1": "#23A559",
                "blue-1": "#4752C4",
            },
            borderColor: {
                "border-1": "#1E1F22",
                "border-2": "#393C41",
            },
            textColor: {
                "textColor-gray-1": "#87898C",
                "textColor-gray-2": "#B5BAC1"
            },
            fontFamily: {
                OpenSans: ["Open Sans", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
                Poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
