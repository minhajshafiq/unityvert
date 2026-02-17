import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur primaire - Brand principale
        primary: {
          DEFAULT: '#143C32',
          light: '#1a4d40',
          dark: '#0f2d26',
        },
        // Couleur secondaire - Accent naturel
        secondary: '#2F7A3E',
        // Couleur CTA - Boutons d'action
        cta: {
          DEFAULT: '#4CAF50',
          hover: '#3E9443',
        },
        // Accent (alias pour CTA)
        accent: '#4CAF50',
        // Backgrounds
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F1F8F4',
        },
        // Textes
        text: {
          DEFAULT: '#1A1A1A',
          light: '#4A4A4A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
