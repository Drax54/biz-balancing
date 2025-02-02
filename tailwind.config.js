/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-emerald-50',
    'bg-amber-50',
    'bg-blue-50',
    'bg-purple-50',
    'bg-pink-50',
    'bg-orange-50',
    'text-emerald-600',
    'text-amber-600',
    'text-blue-600',
    'text-purple-600',
    'text-pink-600',
    'text-orange-600',
  ],
};