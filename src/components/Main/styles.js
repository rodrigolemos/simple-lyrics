import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  font-family: 'Open Sans', sans-serif;
  /* background: url('../../../images/background-1.jpg') no-repeat; */
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  height: 100vh;
`;

export const Form = styled.div`
  background-color: #EEE;
  border-radius: 5px;
  width: 50%;
  height: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #444;
  text-transform: uppercase;
  font-weight: bold;
  margin: 15px;
`;

export const MyInput = styled.input`
  height: 30px;
  width: 75%;
  margin-bottom: 20px;
  background-color: #EEE;
  font-size: 16px;
  text-align: center;
  color: #444;
  border: none;
  border-bottom: 1px solid #444;
  outline: none;
  ::placeholder {
    color: #444;
    opacity: 0.6;
  }
`;

export const MyButton = styled.button`
  background-color: #4A68B1;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 30px;
  outline: none;
`;