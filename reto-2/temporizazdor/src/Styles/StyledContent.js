import styled from "styled-components";
import { keyframes } from "styled-components";
import { darkBlue, primaryRed, veryDark } from "../Helpers/StyledVar";

export const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  margin: 100px 0;
`
export const StyledTime = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 200px;
  width: 70%;
  margin: auto;
  grid-gap: 30px;
  @media (max-width: 600px) {
    width: auto;
    height: auto;
    grid-gap: 20px;
  }
`;

export const StyledCard = styled.h2`
height: 150px;
background-color: ${darkBlue};
text-align: center;
font-size: 5rem;
display: flex;
justify-content: center;
align-items: center;
color: ${primaryRed};
box-shadow: 0 10px 0 ${veryDark};
border-radius: 10px;
position: relative;

@media (max-width: 600px) {
  height: auto;
  font-size: 3rem;
  padding: 5px;
}
`;


const nameCard = keyframes`
  0% {
    bottom: 50%;
    transform: rotateX(0deg);
    opacity: .3;
  } 30% {
    opacity: .8;
  }50% {
    opacity: 1;
  }70% {
    opacity: .8;
  }100% {
    bottom: 0%;
    transform: rotateX(180deg);
  }
  `;
export const AnimationCard = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 50%;
  opacity: 0;
  background-color: ${darkBlue};
  animation: ${nameCard} 1s infinite;
`;

export const StyledTextTime = styled.p`
  color: white;
  text-align: center;
`