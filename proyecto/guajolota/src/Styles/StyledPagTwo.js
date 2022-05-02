import styled from "styled-components";

export const StyledPagTwo = styled.div`
  /* overflow: hidden; */
  /* max-height: 100vh; */
  position: absolute;
  top: 0%;
  left: ${(props)=>props.transitionPagtwo ? '0%' : '100%'};
  transition: .3s;
  min-height: 100vh;
  min-width: 100vw;
  background: white;
  padding: 24px 0;
  background: #F2F2F2;
`;

export const StyledHeaderTow = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;
export const StyledImgBack = styled.img`
  height: 24px;
  width: 12px;
  opacity: 0.5;
  &:active {
    opacity: 1;
  }
`;
export const ContentTwo = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: scroll;
  position: relative;
  padding-bottom: 140px;
`;
export const StyledAddButtons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
width: 50vw;
margin: 0 auto;
border-radius: 20px;
`;
export const StyledButtons = styled.button`
  height: 33.3px;
  width: 33.3px;
  background: white;
  border: solid 3.3px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  &:active{
    opacity: .4;
  }
`;
export const Counter = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
