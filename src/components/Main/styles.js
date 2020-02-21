import styled, { keyframes } from 'styled-components';

const smoothShow = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

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
  overflow: auto;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    height: 10vh;
    position: fixed;
    bottom: 0;

    a {
      color: #EEE;
      text-decoration: none;
    }

  }
`;

export const Form = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  width: 92%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  position: relative;
  animation: .5s ${smoothShow} ease-in-out;

  ${({ show }) => show === false && `
    display: none;
  `}

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #888;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTititle = styled.h2`
  font-size: 13px;
  color: #AAA;
  font-weight: lighter;
  margin-bottom: 30px;
`;

export const MyInput = styled.input`
  font-family: 'Poppins', sans-serif;
  height: 30px;
  width: 75%;
  background-color: #FFF;
  font-size: 12px;
  text-align: center;
  color: #888;
  border: none;
  border-bottom: 1px solid #CCC;
  outline: none;
  margin-bottom: 20px;
  ::placeholder {
    color: #888;
    opacity: 0.6;
  }
`;

export const MyButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #4A68B1;
  color: white;
  border: none;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  padding: 8px 28px;
  outline: none;
`;

export const TextFooter = styled.small`
  position: absolute;
  font-size: 10px;
  bottom: 5px;
  color: #888;
`;

export const OpenForm = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #E1536A;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ show }) => show === true && `
    display: none;
  `}

  @media (min-width: 768px) {
    background-color: #EEE;
    color: #E1536A;
    bottom: 30px;
    right: 30px;
  }
`;