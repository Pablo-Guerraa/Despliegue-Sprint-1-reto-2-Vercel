import React, { useContext } from 'react'
import { contextArrProducts } from '../hooks/ContextArrProducts';
import { contextConditional } from '../hooks/ContextConditional';
import { contextCounterSum } from '../hooks/ContextCounterSum';
import { contextCurrentIndex } from '../hooks/ContextCurrentIndex';
import { contextObjProduct } from '../hooks/ContextObjProduct';
import { contextTransitionPagTwo } from '../hooks/ContextTransitionPagTwo';
import { StyledItemCategory } from '../Styles/StyledItemCategory'
import ContainerItemImg from './ContainerItemImg';
import ContDet from './ContDet';


export default function ItemCategory({ conditional }) {

  const { arrProducts } = useContext( contextArrProducts );
  const { setObjProduct } = useContext( contextObjProduct );
  const { setTransitionPagTwo } = useContext( contextTransitionPagTwo );
  const { setCurrentIndex } = useContext( contextCurrentIndex );
  const { setConditional } = useContext( contextConditional );
  const { setCounterSum } = useContext( contextCounterSum );

  const filterCategory = () => {
    const filterArrProducts = arrProducts.filter(element => element.categoria === conditional);
    return filterArrProducts
  }

  return (
    <div>
      {
        filterCategory().map((element, index) => (
          <StyledItemCategory onClick={()=> {
            setTransitionPagTwo(true);
            setCurrentIndex(index);
            setConditional(conditional);
            setObjProduct(element);
            setCounterSum(1)
            }} key={element.id} >
            <ContainerItemImg element={element}/>
            <ContDet element={element}/>
          </StyledItemCategory>
        ))
      }
    </div>
  )
}
