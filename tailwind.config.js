/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Libre Franklin'", "sans-serif"],
			},
			colors: {
				brand: {
					green: "#1f3a22",
					"green-dark": "#16290f",
					gold: "#d9b467",
					"gold-dark": "#b8863c",
					cream: "#f4efe2",
					"cream-light": "#f6f4ec",
					line: "#ece7d8",
					body: "#22301d",
				},
			},
		},
	},
	plugins: [],
};
