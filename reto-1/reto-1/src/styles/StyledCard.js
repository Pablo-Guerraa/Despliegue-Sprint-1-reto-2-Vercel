import styledComponents from "styled-components";
const primary = "hsl(180, 29%, 50%)";
const lightGrayish = `hsl(180, 52%, 96%)`;
const lightGrayishTablet = `hsl(180, 31%, 95%)`;
const darkGrayish = `hsl(180, 8%, 52%)`;



export const StyledCard = styledComponents.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  background: white;
  position: relative;
  border-left: 8px solid ${primary};
  border-radius: 10px;
  box-shadow: 0px 0px 20px hsl(180deg 29% 50%);
  @media (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ImgCard = styledComponents.img`
  position: absolute;
  top: -50px;
  @media (min-width: 768px) and (max-width: 1440px) {
    position: relative;
    top: 0;
    width: 100px;
    height: 100px;
    margin: auto 0;
`;

export const ColumnDesktop = styledComponents.div`
  @media (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerName = styledComponents.div`
  display: flex;
  align-items: center;  
`;
export const H5Styled = styledComponents.h5`
@media (min-width: 768px) and (max-width: 1440px) {
  margin: auto;
}
`
export const H3Name = styledComponents.h3`
  margin-right: 20px;
  color: ${primary};
  cursor: pointer;
`;

export const Novetly = styledComponents.div`
  padding: 7px 15px;
  background: ${props => props.background};
  color: white;
  border-radius: 30px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Requirements = styledComponents.div`
  display: flex;
  align-items: center;
  color: ${darkGrayish};
  border-bottom: 1.5px solid;
  @media (min-width: 768px) and (max-width: 1440px) {
    border-bottom: none;
  }
`;

export const SeparatorCircle = styledComponents.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: ${darkGrayish};
  margin: 0 10px;  
`;

export const KnowledgesContainer = styledComponents.div`
  padding: 20px 0px;
  color: ${primary};
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) and (max-width: 1440px) {
    align-items: center;
  }
`
export const Knowledge = styledComponents.span`
  background: ${lightGrayish};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${primary};
    color: white;
  }
`