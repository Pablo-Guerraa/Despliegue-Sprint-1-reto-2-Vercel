import styledComponents from "styled-components";

const primary = "hsl(180, 29%, 50%)";
const lightGrayish = `hsl(180, 52%, 96%)`;
const veryDarkGrayish = `hsl(180, 14%, 20%)`;


export const StyledFilter = styledComponents.div`
  position: absolute;
  top: -50px;
  left: 6.5%;
  width: 80%;
  min-height: 50px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px hsl(180deg 29% 50%);
  display: flex;
  flex-wrap: wrap;
`;

export const ItemKnowledge = styledComponents.span`
  height: 40px;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  background: ${lightGrayish};
  border-radius: 5px;
`;

export const NameKnowledge = styledComponents.p`
padding: 5px;
`

export const RemoveKnowledge = styledComponents.img`
height: 100%;
background: ${primary};
padding: 12px;
box-sizing: border-box;
border-radius: 0px 5px 5px 0px ;
cursor: pointer;
&:hover {
  background: ${veryDarkGrayish};
}
`