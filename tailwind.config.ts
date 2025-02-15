import animate from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx,vue}',
    './features/**/*.{ts,tsx,vue}',
    './layouts/**/*.{ts,tsx,vue}',
    './pages/**/*.{ts,tsx,vue}',
    './app.vue',
    './error.vue',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'collapsible-down': 'collapsible-down 0.1s ease-in-out',
        'collapsible-up': 'collapsible-up 0.1s ease-in-out',
        'accordion-down': 'accordion-down 0.1s ease-out',
        'accordion-up': 'accordion-up 0.1s ease-out',
      },
      screens: {
        'sm-tablet': '670px',
      },
    },
  },
  plugins: [animate],
};

export default config;
