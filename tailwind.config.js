const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          DEFAULT: '#FAF6EC',
        },
        'greenHaze': {
          DEFAULT: '#00A75F',
        },
        'greenHazeLight': {
          DEFAULT: '#009C62',
        },
        'jade': {
          DEFAULT: '#00BF63',
        },
        'alabaster': {
          DEFAULT: '#F9F9F9'
        },
        'shuttleGray': {
          DEFAULT: '#586773'
        },
        'dodgerBlue': {
          DEFAULT: '#38B6FF'
        },
        'mercury': {
          DEFAULT: '#E8E8E8'
        },
        'mineShaft': {
          DEFAULT: '#393939'
        },
        'koromiko': {
          DEFAULT: '#FFBD59'
        },
        'carnation': {
          DEFAULT: '#F05063'
        },
        'salem': {
          DEFAULT: '#048D52'
        },
      },
    },
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'button': ['12px', {
        'lineHeight': '18px',
        'fontWeight': '600'
      }],
      'button2': ['16px', {
        'lineHeight': '24px',
        'fontWeight': '700'
      }],
      'light': ['14px', {
        'lineHeight': '21px',
        'fontWeight': '300'
      }],
      'header': ['70px', {
        'lineHeight': '80px',
        'fontWeight': '800'
      }],
      'header2': ['30px', {
        'lineHeight': '45px',
        'fontWeight': '700'
      }],
      'header3': ['35px', {
        'lineHeight': '36px',
        'fontWeight': '700'
      }],
      'header5': ['18px', {
        'lineHeight': '27px',
        'fontWeight': '700'
      }],
      'body': ['16px', {
        'lineHeight': '24px',
        'fontWeight': '400'
      }],
      'body2': ['14px', {
        'lineHeight': '21px',
        'fontWeight': '400'
      }],
      'caption': ['12px', {
        'lineHeight': '18px',
        'fontWeight': '500'
      }],
      'caption2': ['12px', {
        'lineHeight': '13.74px',
        'fontWeight': '400'
      }],
      'caption3': ['12px', {
        'lineHeight': '18px',
        'fontWeight': '400'
      }],
      'caption4': ['10px', {
        'lineHeight': '15px',
        'fontWeight': '400'
      }],
      'caption5': ['8px', {
        'lineHeight': '12px',
        'fontWeight': '400'
      }],
      'title1': ['60px', {
        'lineHeight': '90px',
        'fontWeight': '700'
      }],
      'title2': ['70px', {
        'lineHeight': '105px',
        'fontWeight': '800'
      }],
      'title3': ['50px', {
        'lineHeight': '50px',
        'fontWeight': '700'
      }],
      'title4': ['45px', {
        'lineHeight': '67px',
        'fontWeight': '800'
      }],
      'title5': ['25px', {
        'lineHeight': '37px',
        'fontWeight': '700'
      }],
      'title6': ['40px', {
        'lineHeight': '60px',
        'fontWeight': '800'
      }],
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
    },
  },
  plugins: [],
}

