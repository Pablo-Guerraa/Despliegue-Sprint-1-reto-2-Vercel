import styled from "styled-components";

export const StyledContainerItem = styled.div`
  height: 80px;
  position: relative;
  display: flex;
  justify-content: ${(props)=> props.flexStart ? 'start' : 'center'};
  align-items: center;
`;

export const StyledOval = styled.div`
  position: absolute;
  top: 50%;
  height: 40px;
  width: 75px;
  border-radius: 50%;
  background: ${(props)=>props.backgroundOval};
`;

export const StyledImgItem = styled.img`
  transform: scale(.50);
  top: 0%;
`;