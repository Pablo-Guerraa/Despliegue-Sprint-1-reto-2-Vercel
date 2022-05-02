import styled from "styled-components";

export const StyledTaste = styled.div`
  margin: 40px 24px;
`
export const StyledImgTaste = styled.img`
  transform: scale(.5);
  width: 33.3%;
  opacity: ${(props)=> props.currentIndex !== props.index && '0.3'};
`;
export const TitleTaste = styled.h4`
  font-size: 20px;
`
export const StyledContainerTaste = styled.div`
  display: flex;
  flex-wrap: wrap;
`