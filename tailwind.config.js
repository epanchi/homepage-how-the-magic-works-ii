/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#3A4E4A',
        'brand-cream': '#ECEAE3',
      },
      fontFamily: {
        highlight: ['"Cormorant Garamond"', 'serif'],
        headline: ['"Cormorant"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'highlight': ['52px', { lineHeight: '1.2' }],
        'h4': ['36px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'body-s': ['16px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'btn': ['16px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
      },
    },
  },
  plugins: [],
}
