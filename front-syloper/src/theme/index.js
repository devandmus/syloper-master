import GlobalStyle from './GlobalStyle';

const Theme = {
  font: {
    family: "Work Sans, Arial, Helvetica, sans-serif",
    weight: {
      regular: '400',
      medium: '500',
      bold: '700'
    },
  },

  color: {
    text: "rgb(21, 21, 21)",
    primaryGreen: "#34AD66",
    darkGreen: '#327C51',
    lightGreen: '#CAF1C4',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500:'#adb5bd',
    redStatus: '#DC3545'
  },

  transition: "all .25s linear",
}

export {
  Theme as default,
  GlobalStyle,
}