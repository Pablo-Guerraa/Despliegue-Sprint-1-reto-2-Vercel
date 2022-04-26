import styled from "styled-components";
import { keyframes } from "styled-components";

const AnimationCopo = (topPos) => keyframes`
  0% {
    top: ${topPos}px;
  } 100% {
    top: calc(100vh + 50px);
  }
`;

export const StyledCopo = styled.i`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 0px;
  right: ${(props)=> props.positionWidth}vw;
  box-shadow: inset 0 -1px 5px rgb(114, 114, 114);
  animation: ${props=>AnimationCopo(props.positionHeight)} 20s linear infinite;
  z-index: 9;
`