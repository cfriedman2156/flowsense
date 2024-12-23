/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        darkBlueCustom: '#0c1033',
        lightBlueCustom: '#e6f0fc',
        brightBlueCustom: '#185ce6',
        textInputCustom: '#dde6f2'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '10%, 90%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      height: {
        '100': '26rem', 
        'iphoneProjects': '28rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
