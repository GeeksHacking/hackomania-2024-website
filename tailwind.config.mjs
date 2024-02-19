/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'code': 'Cascadia Code, monospace',
			},
			colors: {
				app: {
					background: '#E9F8FD',
					purple: '#4B0082',
					blue: '#45AACB',
					red: '#AD2F55',
					yellow: '#FCBC08'
				}
			},
			borderRadius: {
				'2.5xl': '20px',
			}
		},
	},
	plugins: [],
}
