import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "../../theme";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    border: 0;
}
*,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:focus, :active {outline: none;}
a:focus, a:active {outline: none;}
nav, footer, header, aside {display: block;}


html, body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
input,button,textarea {font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0; border: 0;}
a, a:visited{text-decoration: none;}
a:hover {text-decoration: none;}
ul li {list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6 {font-size: inherit; font-weight: 400;}
button{
    appearance: none;
    background-color: transparent;
    border: none;
    -webkit-tap-highlight-color: transparent;
}
#root{
    display:flex;
    justify-content: center;
    align-items: center;
    // min-height: 100vh;
}
`;

const App = styled.div(() => {
  return css`
    --primary1: ${theme.primary1};
    --primary2: ${theme.primary2};
    --primary3: ${theme.primary3};
    --secondary: ${theme.secondary};
    --accent1: ${theme.accent1};
    --accent2: ${theme.accent2};
    --accent3: ${theme.accent3};
    --accent4: ${theme.accent4};
    --accent5: ${theme.accent5};
    background-color: var(--primary2);
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
    transition: 0.2s;
  `;
});

export const Styled = {
  GlobalStyles,
  App,
};
