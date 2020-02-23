import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slideRight, elementFocus } from '../../styles/global';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  font-family: 'Poppins', sans-serif;
  background-size: cover;
  background-image: linear-gradient(to bottom, #CB3F65, #E1536A);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .Toastify__toast-body {
    font-size: 1.6rem;
  }
`;

export const Disclaimer = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  width: 92%;
  min-height: 60%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  backface-visibility: hidden;
  animation: .5s ${slideRight} ease-in-out;

  ${({ show }) => show === false && `
    display: none;
  `}

  p {
      font-size: 1.3rem;
      color: #888;
      text-align: justify;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: #888;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 1rem;
    color: #E1536A;
    opacity: .5;
  }
`;

export const MyButton = styled(Link)`
  font-family: 'Poppins', sans-serif;
  background-color: #4A68B1;
  color: white;
  border: none;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  border-radius: .5rem;
  padding: .8rem 2.8rem;
  outline: none;
  transition: .1s all ease-in-out;
  text-decoration: none;
  animation: 1.5s ${elementFocus} ease-in-out;
  animation-iteration-count: infinite;

  &:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 10px rgb(225, 83, 106, .5);
  }
`;
