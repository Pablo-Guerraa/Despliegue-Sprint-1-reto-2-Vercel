import React, { useContext } from 'react';
import { contextArrProducts } from '../hooks/ContextArrProducts';
import { contextConditional } from '../hooks/ContextConditional';
import { contextCounterSum } from '../hooks/ContextCounterSum';
import { contextCurrentIndex } from '../hooks/ContextCurrentIndex';
import { contextObjProduct } from '../hooks/ContextObjProduct';
import { contextTransitionPagTwo } from '../hooks/ContextTransitionPagTwo';
import { ItemFilter, StyledContainerFilter } from '../Styles/StyledContainerFilter';
import { StyledItemCategory } from '../Styles/StyledItemCategory';
import ContainerItemImg from './ContainerItemImg';
import ContDet from './ContDet';

export default function ContainerFilter({capturedInput}) {

  const { arrProducts } = useContext( contextArrProducts );
  const { setObjProduct } = useContext( contextObjProduct );
  const { setTransitionPagTwo } = useContext( contextTransitionPagTwo );
  const { setCurrentIndex } = useContext( contextCurrentIndex );
  const { setConditional } = useContext( contextConditional );
  const { setCounterSum } = useContext( contextCounterSum );
  const filterSearch = () => {

    const filterProduct = arrProducts.filter(element => element.nombre.includes(capturedInput) || element.sabor.includes(capturedInput));
    return filterProduct;
  }
  
  return (
    <StyledContainerFilter>
      {
        capturedInput !== ''
        ? 
        filterSearch().map((element, index) => (
          <StyledItemCategory onClick={()=> {
            setTransitionPagTwo(true);
            setCurrentIndex(index);
            setConditional(element.categoria);
            setObjProduct(element);
            setCounterSum(1)
            }} key={element.id} >
            <ContainerItemImg element={element}/>
            <ContDet element={element}/>
          </StyledItemCategory>
        ))
         
        : 
        <div>no tiene nada</div>
      }
    </StyledContainerFilter>
  )
}
