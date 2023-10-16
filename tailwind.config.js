/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#0F323E",
				secundario: "#DDD4C4",
				terciario: "#F3E45C",
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
