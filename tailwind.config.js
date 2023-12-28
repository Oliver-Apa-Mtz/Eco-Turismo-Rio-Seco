/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#0F323E",
				secundario: "#f6f2ef",
				terciario: "#1fb256",
				white: "#FFFFFF",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
	},
	plugins: [],
};
