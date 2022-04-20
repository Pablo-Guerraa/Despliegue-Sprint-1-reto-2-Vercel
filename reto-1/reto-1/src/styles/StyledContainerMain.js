import styledComponents from "styled-components";

const primary = "hsl(180, 29%, 50%)";
const lightGrayish = `hsl(180, 52%, 96%)`;

export const Container = styledComponents.div`
background: ${lightGrayish};
`


export const Header = styledComponents.header`
  height: 150px;
  background: ${primary};
  background-image: url("https://res.cloudinary.com/dxhgejzwc/image/upload/v1650255998/Sprint-2-reto-1/bg-header-mobile_evdwp5.svg");
  background-repeat: no-repeat;
  background-size: cover;
`