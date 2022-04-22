import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white: ##fafff9;
        --light-green: #eef7ee; 
        --black: #071407;
        --grey: #8d968c;
        --orange: #ff6666;
        --red: #c53030;
    }

    body{
        background: var(--light-green);
        color: var(--black);
    }

    label, span, p , input, button, div{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
    }

    button{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    a{        
        text-decoration: none;                
    }
`