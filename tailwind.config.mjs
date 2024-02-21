/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'serif': 'Cascadia Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
				'sans': 'Roboto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
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
