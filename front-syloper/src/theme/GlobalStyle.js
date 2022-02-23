import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

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
`;

export default GlobalStyle;

