/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'pulse-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
			}
		},
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			defaultFlavour: "mocha",
		  })
	],
}
