import styled from 'styled-components';
import { slideLeft, slideRight } from '../../styles/global';

export const Container = styled.div`
  position: relative;
  background-color: #FFF;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  animation: .5s ${slideLeft} ease-in-out;

  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, .85)),
    url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;

  ${({ show }) => show !== 'Details' && `
    display: none;
  `}

  @media (min-width: 768px) {
    width: 60%;
    height: 85vh;
    border-radius: .5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  @media (min-width: 1200px) {
    width: 50%;
    height: 85vh;
    border-radius: .5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  header, article {
    margin: 1.5rem;
  }

`;

export const Song = styled.h1`
  font-size: 2rem;
  color: #888;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: .5rem;
`;

export const Band = styled.h2`
  font-size: 1.6rem;
  color: #AAA;
  font-weight: lighter;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  max-width: 30%;
  max-height: 30%;
  border-radius: .2rem;
`;

export const Lyric = styled.pre`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  animation: .5s ${slideLeft} ease-in-out;
`;

export const MyButton = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #DDD;
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: .3rem 1.5rem;
  outline: none;
  transition: .1s all ease-in-out;

  &:active {
    transform: translateY(2px);
  }

  ${({ active }) => active === false && `
    background-color: #4A68B1;
  `}

  ${({ show }) => show === false && `
    display: none;
  `}
`;

export const InfoArtist = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Close = styled.div`
  position: sticky;
  bottom: 3%;
  left: 85.5%;
  background-color: #E1536A;
  color: white;
  border: none;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s ${slideRight} ease-in-out;
  backface-visibility: hidden;
  transition: .1s all ease-in-out;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 10px rgb(225, 255, 255, .5);
  }
`;
