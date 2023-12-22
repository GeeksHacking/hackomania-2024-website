/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'code': 'Cascadia Code, monospace',
			},
			colors: {
				background: '#E9F8FD',
				purple: '#4B0082'
			}
		},
	},
	plugins: [],
}
