import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --col-orange:hsl(26, 100%, 55%);
        --col-orange-light:hsl(25, 100%, 94%);

        --col-overlay: hsl(0, 0%, 0%);
        --col-gray-1:hsl(223, 64%, 98%);
        --col-gray-2: hsl(220, 14%, 75%);
        --col-gray-3:hsl(219, 9%, 45%);
        --col-gray-4: hsl(220, 13%, 13%)
    }

    *,*::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
         font-family: "Kumbh Sans", sans-serif;
         overflow-x: hidden;
         min-height: 100dvh;

  }


    ul{
        list-style: none;
    }

    button{
        outline: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
