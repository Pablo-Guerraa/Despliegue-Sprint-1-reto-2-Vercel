import styledComponents from "styled-components";
const primary = "hsl(180, 29%, 50%)";
const lightGrayish = `hsl(180, 52%, 96%)`;
const lightGrayishTablet = `hsl(180, 31%, 95%)`;
const darkGrayish = `hsl(180, 8%, 52%)`;



export const StyledCard = styledComponents.div`
  width: 80%;
  margin: 100px auto;
  padding: 20px;
  background: white;
  position: relative;
  border-left: 8px solid ${primary};
  border-radius: 10px;
  box-shadow: 0px 0px 20px hsl(180deg 29% 50%);
`;

export const ImgCard = styledComponents.img`
  position: absolute;
  top: -50px;
`;

export const ContainerName = styledComponents.div`
  display: flex;
  align-items: center;  
`;
export const H3Name = styledComponents.h3`
  margin-right: 20px;
  color: ${primary};
`;

export const Novetly = styledComponents.div`
  padding: 7px 15px;
  background: ${props => props.background};
  color: white;
  border-radius: 30px;
  margin-right: 10px;
`;

export const Requirements = styledComponents.div`
  display: flex;
  align-items: center;
  color: ${darkGrayish};
  border-bottom: 1.5px solid;
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
`
export const Knowledge = styledComponents.span`
  background: ${lightGrayish};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`