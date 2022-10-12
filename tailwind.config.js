/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"Open-sans": ["Open Sans", "sans-serif"],
				"Play-fair": ["Playfair Display", "serif"],
				Poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#cda45e",
			},
		},
	},
	plugins: [],
};
