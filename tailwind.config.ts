import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#faf6f0',
        'ivory-2': '#f2ebe0',
        cream: '#F2EDE4',
        champagne: '#E8DCC8',
        taupe: '#B2A28B',
        stone: '#D7CEC1',
        bronze: '#8A6E4F',
        charcoal: '#2F2A24',
        maroon: '#410b12',
        gold: '#c8a882',
        'gold-light': '#e0c9a8',
        'text-dark': '#1c0608',
        'text-mid': '#4a2e1e',
        'text-soft': '#7a5a48'
      },
      boxShadow: {
        soft: '0 12px 36px rgba(57, 44, 28, 0.08)',
        card: '0 10px 24px rgba(70, 54, 34, 0.07)'
      },
      borderRadius: {
        luxe: '20px'
      },
      maxWidth: {
        content: '1280px'
      },
      letterSpacing: {
        whisper: '0.18em'
      }
    }
  },
  plugins: []
};

export default config;
