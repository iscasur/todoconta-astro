import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#022F3E',
				secondary: {
					golden: '#FFD700',
					green: '#00B894'
				}
			}
		},
	},
	plugins: [typography, forms],
}
