/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#F5F5F5",
				secundario: "#854DFC",
				terciario: "#BDFF1C",
				white: "#FFFFFF",
				black: "rgb(13, 12, 12)",
			},
		},
	},
	plugins: [],
};
