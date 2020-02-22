import { createGlobalStyle, keyframes } from 'styled-components';

export const slideRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

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