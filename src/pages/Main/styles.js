import styled from 'styled-components';

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
