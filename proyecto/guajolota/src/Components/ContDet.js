import React from 'react';
import { StyledContDet, StyledPrice } from '../Styles/StyledDetailProduct';


export default function ContDet({ element, textAlign, flexStart }) {

  return (
    <StyledContDet textAlign={textAlign} flexStart={flexStart}>
      <h4>{element.sabor}</h4>
      <StyledPrice>${element.precio} MXN</StyledPrice>
    </StyledContDet>

  )
}