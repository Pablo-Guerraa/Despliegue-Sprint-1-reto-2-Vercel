import React, { useContext } from 'react'
import { contextArrProducts } from '../hooks/ContextArrProducts';
import { contextConditional } from '../hooks/ContextConditional';
import { contextCurrentIndex } from '../hooks/ContextCurrentIndex';
import { StyledContainerImg, StyledScroll, StyledSliderContainer } from '../Styles/StyledSlider'
import ContainerItemImg from './ContainerItemImg';

export default function SliderProducts() {

  const { arrProducts } = useContext(contextArrProducts);
  const { conditional } = useContext(contextConditional);
  const { currentIndex } = useContext(contextCurrentIndex);

  const filterCategory = () => {
    const filterArrProducts = arrProducts.filter(element => element.categoria === conditional);
    return filterArrProducts
  } 
  return (
    <StyledSliderContainer>
      <StyledScroll index={currentIndex}>
        {
          filterCategory().map((element, index) => (
          <StyledContainerImg key={element.id}>
              <ContainerItemImg element={element} index={index}></ContainerItemImg>
          </StyledContainerImg>
          
          ))
        }
      </StyledScroll>
    </StyledSliderContainer>
  )
}
