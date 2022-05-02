import React, { useContext } from 'react'
import { contextCounterSum } from '../hooks/ContextCounterSum';
import { contextCurrentIndex } from '../hooks/ContextCurrentIndex';
import { contextObjProduct } from '../hooks/ContextObjProduct';
import { StyledContainerItem, StyledImgItem, StyledOval } from '../Styles/StyledContainerItem'

export default function ContainerItemImg({element, index, nextPrevious, flexStart}) {

  const { setCurrentIndex } = useContext( contextCurrentIndex );
  const { setObjProduct } = useContext( contextObjProduct );
  const { setCounterSum } = useContext( contextCounterSum );
  
  return (
    <StyledContainerItem flexStart={flexStart}
    onClick={()=> {
      setCurrentIndex(index);
      setObjProduct(element);
      setCounterSum(1);

    }} >
      <StyledOval backgroundOval={element.background} />
      <StyledImgItem src={element.imagen} alt={element.nombre} nextPrevious={nextPrevious} />
    </StyledContainerItem>
  )
}