import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
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

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        letter-spacing: -.1px;
    }
    body, html, #___gatsby, #gatsby-focus-wrapper {
        width: 100%;
        height: 100%;
        font-family: ${({ theme }) => theme.font.family};
        font-weight: 400;
        font-size: 15px;
        color: ${({ theme }) => theme.color.text};
    }


`;

export default GlobalStyle;

