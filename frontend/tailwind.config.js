/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
		sm: "480px",
		md: "768px",
		lg: "1024px",
		xl: "1440px",
	},
  theme: {
    extend: {
      colors:{
        darkBlue: "#0E465D",
        cyan: "#39B7ED",
        lightBlue: "#EBF6FB",
        lightGreen: "#E9F8F6",
        lightGreen2: "#EEFFFC",
        lightRed: "#F6ECE9",
        lightOrange: "#FEEFEB",
        lightPurple: "#F2F3FF",
        yellow: "#DDB40A"
      }
    },
  },
  plugins: [],
}
