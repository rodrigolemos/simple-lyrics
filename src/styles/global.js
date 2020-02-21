import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    font-size: 10px;
    
    @media (min-width: 768px) {
      font-size: 13px;
    }

  }
`;