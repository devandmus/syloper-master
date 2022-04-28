import GlobalStyle from './GlobalStyle';

const Theme = {
  font: {
    family: 'Work Sans, Arial, Helvetica, sans-serif',
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },

  color: {
    text: 'rgb(21, 21, 21)',
    primaryGreen: '#34AD66',
    darkGreen: '#327C51',
    lightGreen: '#34AD66',
    chartGreen: '#34AD66',
    chartYellow: '#FFB800',
    chartOrange: '#FF7A1A',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    border: '#f2f2f2',
    redStatus: '#DC3545',
  },

  transition: 'all .2s linear',

  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.02)',

  boxShadowLeft: '-10px 1px 20px -15px rgba(0,0,0,0.4)',

  boxShadowB: '0px 0px 7px 0px rgb(0 0 0 / 50%)',

  boxShadowC: '0px 0px 20px 0px rgba(0,0,0,0.05)',
};

export { Theme as default, GlobalStyle };
