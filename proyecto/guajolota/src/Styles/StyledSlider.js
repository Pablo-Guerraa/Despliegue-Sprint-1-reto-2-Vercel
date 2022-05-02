import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
`
export const StyledScroll = styled.div`
  display: flex;
  margin-left: 25vw;
  transform: translate(${(props)=>props.index * -50}vw);
  transition: 1s;
`;
export const StyledContainerImg = styled.div`
  height: 200px;
  min-width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;