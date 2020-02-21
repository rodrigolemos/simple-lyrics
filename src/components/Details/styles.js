import styled, { keyframes } from 'styled-components';

const slideShow = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  background-color: #FFF;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  animation: .5s ${slideShow} ease-in-out;

  ${({ show }) => show !== false && `
    display: none;
  `}

  @media (min-width: 768px) {
    width: 45%;
    height: 85vh;
    border-radius: 5px;
    overflow-y: scroll;
  }

  header, article {
    margin: 15px;
  }

`;

export const Song = styled.h1`
  font-size: 20px;
  color: #888;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Band = styled.h2`
  font-size: 16px;
  color: #AAA;
  font-weight: lighter;
  margin-bottom: 10px;
`;

export const Lyric = styled.pre`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  animation: .5s ${slideShow} ease-in-out;
`;

export const MyButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #DDD;
  color: white;
  border: none;
  font-size: 12px;
  padding: 3px 15px;
  outline: none;

  ${({ active }) => active === false && `
    background-color: #4A68B1;
  `}
`;