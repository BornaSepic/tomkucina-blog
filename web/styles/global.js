import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'elephant';
      src: url('/fonts/ELEPHNT.woff');
    }
 
    * {
        box-sizing: border-box;
        margin: 0;
    }
    * + * {
        margin-top: 1rem;
    }
    html,
    body {
        margin: 0;
        color: #555;
        font-family: Helvetica;
        font-size: 18px;
        line-height: 1.4;
    }
    body > div {
        margin-top: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #222;
        line-height: 1.1;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    p {
        font-size: 0.9rem;
    }
    strong {
        color: #222;
    }
    li {
        margin-top: 0.25rem;
    }
    
    header {
        max-width: 1380px;
        margin: auto;
    }
    
    figure {
        text-align: center;
    }
    
    section {
        margin: 2rem auto;
        margin-bottom: 50px;
        max-width: 920px;
        
        &.no-space {
            margin: auto;
        }
    }
`;