/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      scale: {
        98: '0.98',
      },
      fontSize: {
        '6.5xl': '4rem',
        '3.5xl': '2rem',
      },
      height: {
        19: '4.875rem',
      },
      width: {
        46: '11.75rem',
        34: '8.625rem',
        43.5: '10.875rem',
        100: '27.5rem',
      },
      boxShadow: {
        'msd-red': '0px 4px 4px rgba(199, 57, 56, 0.3);',
        'msd-d-red': '0px 4px 4px rgba(199, 57, 56, 0.3);',
        'md-white': '0px 0px 12px rgba(246, 246, 246, 0.3);',
      },
      colors: {
        'light-red': '#E84445',
        'regular-red': '#C73938',
        'dark-red': '#A73334',
        'darkest-red': '#692B2C',
        'light-green': '#5E734C',
        'regular-green': '#3F6C4F',
        'dark-green': '#265F4C',
        'darkest-green': '#155449',
        'lighter-yellow': '#DDFFB1',
        'regular-yellow': '#9EA03E',
        'dark-yellow': '#827E4E',
        'light-grey': '#C5C5C5',
        'regular-grey': '#323D3D',
        'dark-grey': '#0B1717',
        'regular-white': '#F6F6F6',
      },
      borderRadius: {
        '4xl': '2rem',
        '3.5xl': '1.8rem',
      },
      backgroundImage: {
        'started-page': 'url("../../assets/images/startscreen.png")',
      },
      spacing: {
        18: '4.5rem',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};
