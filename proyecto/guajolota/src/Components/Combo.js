import React, { useContext } from 'react'
import { contextArrProducts } from '../hooks/ContextArrProducts'
import { contextConditional } from '../hooks/ContextConditional';
import { StyledCombo, StyledContainerCombo, StyledDescriptionCombo, StyledInputChecked, StyledItemCombo, StyledTitleCombo } from '../Styles/StyledCombo'
import ContainerItemImg from './ContainerItemImg';
import ContDet from './ContDet';

export default function Combo() {

  const { arrProducts } = useContext(contextArrProducts);
  const { conditional } = useContext(contextConditional);

  const FilterCombo = () => {
    let filt;
    if(conditional === 'bebida') {
      filt = arrProducts.filter(element => element.categoria === 'guajolota')
    } else {
      filt = arrProducts.filter(element => element.categoria === 'bebida')
    };
    return filt;
  }
  return (
    <StyledCombo>
      <StyledTitleCombo>
        Guajolocombo
      </StyledTitleCombo>
      <StyledDescriptionCombo>
        Disfruta de la {conditional === 'bebida'? 'guajolota' : 'bebida'} que mas te guste y disfruta de tu desayuno
      </StyledDescriptionCombo>
      <StyledContainerCombo>
      {
        FilterCombo().map(element => ( 
          <StyledItemCombo key={element.id}>
            <ContainerItemImg element={element} flexStart={true} />
            <ContDet element={element} />
            <StyledInputChecked type="checkbox" />
          </StyledItemCombo>
        ))
      }
      </StyledContainerCombo>
    </StyledCombo>
  )
}
