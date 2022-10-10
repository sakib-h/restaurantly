/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"Open-sans": ["Open Sans", "sans-serif"],
				"Poly-fair": ["Playfair Display", "serif"],
				Poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
