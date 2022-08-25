import { createGlobalStyle } from "styled-components";
export const GlobalStyle= createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

}
body{
    background-color: ${({theme}) => theme.color.body} ;
    color: hsl(192,100%,9%);
    font-family: 'Poppins',sans-serif;
    font-size: 1.15em;
    margin: 0%;

}
p{
    opacity: 0.6;
    line-height: 1.5;
    margin: 10px 0;
}
img{
    max-width: 100%;
}
footer{
    background-color: ${props => props.theme.color.footer};
    color:  white;
}
`