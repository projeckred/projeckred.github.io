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
				deepCream: {
					DEFAULT: "#FFF4E3",
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
				koromikoLight: {
					DEFAULT: "#FFBD59",
				},
				koromiko: {
					DEFAULT: "#FFD105",
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
				thrive: {
					DEFAULT: "rgba(49,104,216,1)",
				},
				bloom: {
					DEFAULT: "rgba(198,47,106,1)",
				},
				play: {
					DEFAULT: "rgba(255,183,44,1)",
				},
				code: {
					DEFAULT: "rgba(5,165,82,1)",
				},
				shadowThrive: {
					DEFAULT: "rgba(49,104,216,0.2)",
				},
				shadowBloom: {
					DEFAULT: "rgba(198,47,106,0.2)",
				},
				shadowPlay: {
					DEFAULT: "rgba(255,183,44,0.2)",
				},
				shadowCode: {
					DEFAULT: "rgba(5,165,82,0.2)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
