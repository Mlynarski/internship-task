import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    font-family:  'Ubuntu', 'Times New Roman';
  }

 body {
    margin: 0;
}
`;

export default GlobalStyle;
