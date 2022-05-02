import styled from "styled-components";

export const StyledPagThree = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: ${(props)=> props.transitionPagThree ? '0%' : '100%'};
  transition: .3s;
  background: #F2F2F2;
  padding: 24px;
`;
export const StyledHeaderThree = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const StyledContentCar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`