import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        letter-spacing: -.1px;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }

    body, html, #___gatsby, #gatsby-focus-wrapper {
        width: 100%;
        height: 100%;
        font-family: ${({ theme }) => theme.font.family};
        font-weight: 400;
        font-size: 15px;
        color: ${({ theme }) => theme.color.text};
    }

    @keyframes fadein {
        0% { transform: translateY(200%);}
        100% { transform: translateY(-50%);}
    }
        
    @keyframes fadeout {
        0% { transform: translateY(-50%);}
        100% { transform: translateY(200%);}
    }
`;

export default GlobalStyle;
