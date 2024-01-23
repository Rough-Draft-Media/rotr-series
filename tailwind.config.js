/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'img': '0 1px 3px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'header': ['Garamond Premier Pro', 'serif'],
        'body': ['"Inter Tight"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg) translate(0px,-0px)' },
          '50%': { transform: 'rotate(-1deg) translate(6px,-1px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
