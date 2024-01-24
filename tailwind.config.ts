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
				carnation: {
					DEFAULT: "#F05063",
				},
				salem: {
					DEFAULT: "#048D52",
				},
			},
			fontSize: {
				button: [
					"0.875rem",
					{
						lineHeight: "1.25rem",
						fontWeight: "500",
					},
				],
				button2: [
					"1rem",
					{
						lineHeight: "1.5",
						fontWeight: "700",
					},
				],
				light: [
					"0.875rem",
					{
						lineHeight: "1.25rem",
						fontWeight: "300",
					},
				],
				header: [
					"4.5rem",
					{
						lineHeight: "1",
						fontWeight: "800",
					},
				],
				header3: [
					"1.875rem",
					{
						lineHeight: "2.25rem",
						fontWeight: "700",
					},
				],
				header2: [
					"2.25rem",
					{
						lineHeight: "2.5rem",
						fontWeight: "700",
					},
				],
				header5: [
					"1.125rem",
					{
						lineHeight: "1.75rem",
						fontWeight: "700",
					},
				],
				body: [
					"1rem",
					{
						lineHeight: "1.5rem",
						fontWeight: "400",
					},
				],
				body2: [
					"0.875rem",
					{
						lineHeight: "1.25rem",
						fontWeight: "400",
					},
				],
				caption: [
					"0.75rem",
					{
						lineHeight: "0.875rem",
						fontWeight: "500",
					},
				],
				caption2: [
					"0.75rem",
					{
						lineHeight: "0.875rem",
						fontWeight: "400",
					},
				],
				caption3: [
					"0.75rem",
					{
						lineHeight: "0.875rem",
						fontWeight: "400",
					},
				],
				caption4: [
					"0.625em",
					{
						lineHeight: "1rem",
						fontWeight: "400",
					},
				],
				caption5: [
					"0.5rem",
					{
						lineHeight: "0.75rem",
						fontWeight: "400",
					},
				],
				title1: [
					"4.5rem",
					{
						lineHeight: "1",

						fontWeight: "800",
					},
				],
				title2: [
					"3.75rem",
					{
						lineHeight: "6rem",
						fontWeight: "700",
					},
				],
				title3: [
					"3rem",
					{
						lineHeight: "3rem",
						fontWeight: "700",
					},
				],
				title4: [
					"2.75rem",
					{
						lineHeight: "4rem",
						fontWeight: "800",
					},
				],
				title5: [
					"1.5rem",
					{
						lineHeight: "2.25rem",
						fontWeight: "700",
					},
				],
				title6: [
					"2.5rem",
					{
						lineHeight: "3.75rem",
						fontWeight: "800",
					},
				],
			},
		},
	},
	plugins: [],
};
export default config;
