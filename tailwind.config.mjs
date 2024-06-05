/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'highland': {
					'50': '#f3f7f2',
					'100': '#e5ebe0',
					'200': '#cad6c4',
					'300': '#a4b99c',
					'400': '#718e67',
					'500': '#597950',
					'600': '#435f3c',
					'700': '#354c30',
					'800': '#2c3e27',
					'900': '#243321',
					'950': '#131c12',
			},
			'rum': {
        '50': '#f4f4f9',
        '100': '#ebecf4',
        '200': '#dbdcea',
        '300': '#c5c6dc',
        '400': '#adaccd',
        '500': '#9a96be',
        '600': '#8880ab',
        '700': '#6f678e',
        '800': '#605a79',
        '900': '#504c63',
        '950': '#2f2c3a',
    },
    'tapestry': {
			'50': '#faf5f9',
			'100': '#f6edf4',
			'200': '#efdbe9',
			'300': '#e3bed8',
			'400': '#d195be',
			'500': '#c074a7',
			'600': '#a35284',
			'700': '#914572',
			'800': '#793b5f',
			'900': '#663551',
			'950': '#3c1b2e',
	},
	
			},
		},
	},
	plugins: [],
}
