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
  background-color: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
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
  box-shadow: 0px 0px 30px #CCC;
  position: relative;
  animation: .5s ${smoothShow} ease-in-out;

  ${({ show }) => show === false && `
    display: none;
  `}
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
  bottom: 15px;
  right: 15px;
  background-color: #4A68B1;
  color: white;
  border: none;
  font-size: 12px;
  border-radius: 5px;
  padding: 6px 18px;
  outline: none;

  ${({ show }) => show === true && `
    display: none;
  `}
`;