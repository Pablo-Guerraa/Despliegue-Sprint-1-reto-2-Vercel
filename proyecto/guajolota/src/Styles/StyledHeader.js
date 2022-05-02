import styled from "styled-components";
import { keyframes } from "styled-components";


export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const animationLogo = keyframes`
  0% {
    position: absolute;
    top: calc(100vh - 64px);
    left: calc(50vw - 32px);
    height: 64px;
    width: 64px;
  } 
  25%{
    position: absolute;
    top: 100vh;
    left: calc(50vw - 32px);
    height: 64px;
    width: 64px;
  }
  40% {
    position: absolute;
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
    height: 200px;
    width: 200px; 
  }
  60% {
    position: absolute;
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
    height: 200px;
    width: 200px;
  }
  70% {  
    position: absolute;
    top: 50vh;
    left: 50vw;
  }
  100% {
    position: absolute;
    top: 24px;
    left: 24px;
  }
`;
export const StyledLogo = styled.img`
  height: 64px;
  width: 64px;
  animation: ${animationLogo} 2s ease-out;
  animation-delay: -.5s;
`;

export const StyledCarrito = styled.img`
  height: 24px;
  width: 24px;
`