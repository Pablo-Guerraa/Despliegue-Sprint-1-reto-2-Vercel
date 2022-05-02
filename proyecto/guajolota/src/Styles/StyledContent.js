import styled from "styled-components";
import { keyframes } from "styled-components";

const animationInitPag = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`
export const Styledontent = styled.div`
  animation: ${animationInitPag} 3s;
  transition: 1s;
`
export const TitleMain = styled.h1`
  margin: 20px 0;
`;

export const StyledSearch = styled.input`
  height: 60px;
  width: 100%;
  border-radius: 30px;
  padding: 20px 27px;
  margin: 10px 0 24px 0;
  border: none;
  background: #E7E7E7;
`;