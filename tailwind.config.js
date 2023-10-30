/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"big-brain": "url(./BigBrain.jpg)",
			},
		},
	},
	plugins: [],
};
