import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				cream: {
					DEFAULT: "#FAF6EC",
				},
				greenHaze: {
					DEFAULT: "#00A75F",
				},
				greenHazeLight: {
					DEFAULT: "#009C62",
				},
				jade: {
					DEFAULT: "#00BF63",
				},
				alabaster: {
					DEFAULT: "#F9F9F9",
				},
				shuttleGray: {
					DEFAULT: "#586773",
				},
				deepBlue: {
					DEFAULT: "#2A4674",
				},
				dodgerBlue: {
					DEFAULT: "#38B6FF",
				},
				mercury: {
					DEFAULT: "#E8E8E8",
				},
				mineShaft: {
					DEFAULT: "#393939",
				},
				koromiko: {
					DEFAULT: "#FFBD59",
				},
				koromikoDark: {
					DEFAULT: "#FFB72C",
				},
				carnation: {
					DEFAULT: "#F05063",
				},
				salem: {
					DEFAULT: "#048D52",
				},
			},
		},
	},
	plugins: [],
};
export default config;
