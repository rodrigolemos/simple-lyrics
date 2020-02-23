import styled from 'styled-components';
import { slideRight } from '../../styles/global';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  font-family: 'Poppins', sans-serif;
  background-size: cover;
  background-image: linear-gradient(to bottom, #CB3F65, #E1536A);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  overflow: hidden;

  .Toastify__toast-body {
    font-size: 1.6rem;
  }
`;

export const Footer = styled.footer`
  font-family: 'Poppins', sans-serif;
  background-color: #E1536A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 100vw;
  height: 10vh;
  color: #EEE;

  a {
    color: #EEE;
    text-decoration: underline;
  }
`;

export const Form = styled.div`
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
    margin-right: 1rem;
    color: #E1536A;
    opacity: .5;
  }
`;

export const Quote = styled.h2`
  text-align: center;
  font-weight: lighter;

  span {
    font-size: 1.3rem;
    color: #AAA;
    margin-top: 3rem;
    margin-bottom: .5rem;
    display: block;
  }

  small {
    font-style: italic;
    color: #BBB;
  }
`;

export const MyInput = styled.input`
  font-family: 'Poppins', sans-serif;
  height: 3rem;
  width: 75%;
  background-color: #FFF;
  font-size: 1.4rem;
  text-align: center;
  color: #777;
  border: none;
  border-bottom: .1rem solid #CCC;
  outline: none;
  margin-bottom: 2rem;
  ::placeholder {
    color: #777;
    opacity: 0.6;
  }
`;

export const MyButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #4A68B1;
  color: white;
  border: none;
  margin-top: 2rem;
  font-size: 1.6rem;
  border-radius: .5rem;
  padding: .8rem 2.8rem;
  outline: none;
  transition: .1s all ease-in-out;

  &:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 10px rgb(225, 83, 106, .5);
  }
`;

export const TextFooter = styled.small`
  position: absolute;
  font-size: 1rem;
  bottom: .5rem;
  color: #888;
`;
