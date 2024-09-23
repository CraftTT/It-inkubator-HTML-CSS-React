import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";


export const  GlobalStyled = createGlobalStyle`
   
    *,
    *::before,
    *::after {
      
        background: ${Theme.colors.primaryBg};
    }
    body {
        margin: 0;
        font-family: "DM Sans","Poppins",  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }
    
    a{
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    
    button {
        background: unset;
        border: none;
    }
    
    
`
