/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B3D6F',
        green: '#2E7D52',
        orange: '#F4742B',
        'green-light': '#F0FAF5',
        'navy-light': '#EFF5FF',
        'page-bg': '#F8F9FA',
        'text-dark': '#111827',
        'text-mid': '#4B5563',
        'text-muted': '#9CA3AF',
        'border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
