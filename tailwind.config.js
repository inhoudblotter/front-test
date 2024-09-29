/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      prime: '#fff',
      second: '#e5e5e5',
      text: '#495057',
      quote: '#D4A373',
      underline: '#343a40',
      descr: '#6c757d',
      accent: '#ffc82c',
      sep: '#c4c4c4',
      bg: '#f8f9fa',
      footer: '#212529',
      nav: 'rgba(0, 0, 0, 0.2)',
      placeholder: '#cacaca'
    },
    fontFamily: {
      lora: ['Lora', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      xs: '10px',
      s: '12px',
      m: ['14px', '25px'],
      l: '18px',
      xl: ['36px', '46px']
    },
    extend: {
      gridTemplateColumns: {
        post: '180px 1fr 180px',
        four: 'repeat(4, 1fr)',
        two: 'repeat(2, 1fr)'
      },
      spacing: {
        15: '15px',
        17: '17px',
        18: '18px',
        20: '20px',
        25: '25px',
        30: '30px',
        50: '50px',
        70: '70px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1360px'
    },
    container: {
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1360px'
      },
      padding: {
        DEFAULT: '10px',
        md: '20px',
        lg: '30px',
        xl: '30px'
      },
      center: true
    }
  },
  plugins: []
}
