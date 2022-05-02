import styled from "styled-components";

export const StyledCombo = styled.div`
  margin: 0 24px;
`;
export const StyledTitleCombo = styled.h4`
  font-size: 20px;
`
export const StyledDescriptionCombo = styled.p`
  color: black;
  opacity: .5;
  margin: 8px 0;
`;
export const StyledContainerCombo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  flex-wrap: wrap;
  margin: 24px 0;
`;
export const StyledItemCombo = styled.div`
  height: 160px;
  position: relative;
  padding: 16px;
  background: white;
  border-radius: 20px;
`;
export const StyledInputChecked = styled.input`
  height: 24px;
  width: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
`