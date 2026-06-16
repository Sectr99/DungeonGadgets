import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-eb-garamond)', 'Georgia', 'serif'],
      },
      colors: {
        parchment: '#f0e6c8',
        stone: {
          950: '#0a0a0f',
          900: '#111118',
          800: '#1a1a24',
        },
        gold: {
          400: '#d4a847',
          300: '#e8c46a',
        },
      },
      backgroundImage: {
        'torch-glow':
          'radial-gradient(ellipse at 50% 30%, rgba(99,64,255,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(99, 64, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
