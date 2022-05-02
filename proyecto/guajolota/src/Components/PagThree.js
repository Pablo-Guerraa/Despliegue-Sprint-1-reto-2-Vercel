import React, { useContext } from 'react'
import { contextListCar } from '../hooks/ContextListCar'
import { contextTransitionPagThree } from '../hooks/contextTransitionPagThree'
import { StyledContentCar, StyledHeaderThree, StyledPagThree } from '../Styles/StyledPagThree'
import EmptyCard from './EmptyCard'
import ImgBack from './ImgBack'
import ListCarProducts from './ListCarProducts'

export default function PagThree() {

  const { transitionPagThree, setTransitionPagThree } = useContext(contextTransitionPagThree)
  const { listCar, setListCar } = useContext(contextListCar)

  return (
    <StyledPagThree transitionPagThree={transitionPagThree}>
      <StyledHeaderThree>
        <ImgBack setTransitionPag={setTransitionPagThree}/>
        <h2>Carrito</h2>
        <div/>
      </StyledHeaderThree>
      <StyledContentCar>
        {
          listCar === undefined ? 
          <EmptyCard/> : 
          <ListCarProducts/>
        }
      </StyledContentCar>
    </StyledPagThree>
  )
}
