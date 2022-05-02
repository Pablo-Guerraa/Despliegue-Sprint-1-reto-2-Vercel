import React, { useContext } from 'react';
import { contextArrProducts } from '../hooks/ContextArrProducts';
import { contextConditional } from '../hooks/ContextConditional';
import { contextCurrentIndex } from '../hooks/ContextCurrentIndex';
import { contextObjProduct } from '../hooks/ContextObjProduct';
import { StyledContainerTaste, StyledImgTaste, StyledTaste, TitleTaste } from '../Styles/StyledTaste';

export default function Taste() {

  const { arrProducts } = useContext(contextArrProducts);
  const { setObjProduct } = useContext(contextObjProduct);
  const { conditional } = useContext(contextConditional);
  const { currentIndex, setCurrentIndex } = useContext(contextCurrentIndex);

  const filterTaste = () => {
    const newFilterTaste = arrProducts.filter(element => element.categoria === conditional);
    return newFilterTaste;
  }

  return (
    <StyledTaste>
      <TitleTaste>Sabor</TitleTaste>
      <StyledContainerTaste>
        {
          filterTaste().map((element, index) => (
              <StyledImgTaste 
                onClick={()=>{
                  setObjProduct(element);
                  setCurrentIndex(index)
                }}
                currentIndex={currentIndex}
                index={index} key={element.id} 
                src={element.imgsabor} 
                alt={element.nombre} 
              />
          ))
        }
      </StyledContainerTaste>
    </StyledTaste>
  )
}
