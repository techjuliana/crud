import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #BDBDBD;
  }

  ::-webkit-scrollbar-thumb {
    background: #103979;
  }

  ::-webkit-scrollbar-thumb:hover {
    background:rgb(44, 90, 163);
  }
  
`;

export default GlobalStyles;