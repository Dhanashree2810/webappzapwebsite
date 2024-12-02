import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Source Sans Pro", 'sans-serif'],
		},
		extend: {
			animation: {
				upDown: 'upDown 5s ease-out infinite alternate',
				spin: 'spin 20s ease-out infinite alternate',
				fadeUp: 'fadeUp 1s ease-in-out',
				zoomIn: 'zoomIn 1s ease-in-out',
				'hide-loader': 'hide-loader 2s ease-in-out forwards',
				'circle-animation': 'circle-animation 1s linear infinite',
				'text': 'text 1s linear infinite',
			},
			keyframes: {
				upDown: {
					'0%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(-20px)' },
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(90deg)' },
				},
				'hide-loader': {
					'100%': { visibility: 'hidden' },
				},
				'circle-animation': {
					'0%': {
						transform: 'rotate(0deg)',
						boxShadow: '1px 5px 2px #eb0303',
					},
					'50%': {
						transform: 'rotate(180deg)',
						boxShadow: '1px 5px 2px #1518be',
					},
					'100%': {
						transform: 'rotate(360deg)',
						boxShadow: '1px 5px 2px #10ee40',
					},
				},
				'text': {
					'0%': { color: '#eb0303a9' },
					'50%': { color: '#1518befd' },
					'100%': { color: '#10ee40' },
				},
			},
			fontSize: {
				xSmallFont: '11px',
				smallFont: '12px',
				regularFont: '13px',
				largeFont: '15px',
				mainHeading: '60px',
				subHeading: '20px',
			},
			colors: {
				mainColor: '#e7f1ff',
				white: '#ffffff',
				primaryRed: '#ff1b46',
				primaryYellow: '#ffdd37',
				darkBlue: '#00001d',
				purple: '#3e047b',
				manatee: '#8d99ae',
				black: '#0d131f',
				lavenderBlue: '#d3d6ff',
				success: '#219234',
				warning: '#ffc409',
				danger: '#eb445a',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}

		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
