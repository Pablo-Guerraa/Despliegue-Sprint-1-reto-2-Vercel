import React, { useContext} from 'react'
import { StyledCarrito } from '../Styles/StyledHeader'
import { ContentTwo, Counter, StyledAddButtons, StyledButtons, StyledHeaderTow, StyledPagTwo } from '../Styles/StyledPagTwo'
import { contextTransitionPagTwo } from '../hooks/ContextTransitionPagTwo'
import { contextObjProduct } from '../hooks/ContextObjProduct'
import SliderProducts from './SliderProducts'
import ContDet from './ContDet'
import Taste from './Taste'
import Combo from './Combo'
import { contextListCar } from '../hooks/ContextListCar'
import ImgBack from './ImgBack'
import ButtonAddCar from './ButtonAddCar'
import { StyledPositionButton } from '../Styles/StyledPositionButton'
import { contextCounterSum } from '../hooks/ContextCounterSum'

export default function PagTwo() {

  const { transitionPagTwo, setTransitionPagTwo } = useContext(contextTransitionPagTwo);
  const { objProduct } = useContext(contextObjProduct);

  const { counterSum, setCounterSum } = useContext(contextCounterSum);

  const buttonAdd = () => {
    const newCounterSum = counterSum + 1;
    setCounterSum(newCounterSum)
  }
  const buttonRest = () => {
    if(counterSum > 1){
      const newCounterSum = counterSum - 1;
      setCounterSum(newCounterSum)
    }
  }

  return (
      <StyledPagTwo transitionPagtwo={transitionPagTwo}>
        <StyledPositionButton>

          <StyledHeaderTow>
            <ImgBack setTransitionPag={setTransitionPagTwo} />
            <StyledCarrito src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1650964494/Sprint-2-Proyecto/shopping-cart_ldbza9.png" alt="Img-carrito-compras" />
          </StyledHeaderTow>

          <ContentTwo>
            <SliderProducts/>
            <ContDet element={objProduct} textAlign={true}/>
            <StyledAddButtons>
              <StyledButtons onClick={()=>buttonRest()}>-</StyledButtons>
              <Counter>{ counterSum }</Counter>
              <StyledButtons onClick={()=>{
                buttonAdd()
              }}>+</StyledButtons>
            </StyledAddButtons>
            <Taste/>
            <Combo />
          </ContentTwo>
          
          <ButtonAddCar />

        </StyledPositionButton>
      </StyledPagTwo>
  )
}