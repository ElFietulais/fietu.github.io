/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			skeletonScreen: {
				color: '#374151',
				borderRadius: "4px"
			  }
		},
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			defaultFlavour: "mocha",
		  }),
		require("tailwindcss-skeleton-screen")
	],
}
