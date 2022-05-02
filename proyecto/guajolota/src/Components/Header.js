import React, { useContext } from 'react'
import { contextTransitionPagThree } from '../hooks/contextTransitionPagThree'
import { StyledCarrito, StyledHeader, StyledLogo } from '../Styles/StyledHeader'

export default function Header() {

  const { setTransitionPagThree } = useContext(contextTransitionPagThree)

  return (
    <StyledHeader>
      <StyledLogo src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651101352/Sprint-2-Proyecto/Ilustracio%CC%81n_sin_ti%CC%81tulo_66_1_fnamzr.png" alt="Logo-guappjolotas" />
      <StyledCarrito onClick={()=> setTransitionPagThree(true)} src='https://res.cloudinary.com/dxhgejzwc/image/upload/v1650964494/Sprint-2-Proyecto/shopping-cart_ldbza9.png' alt='Icono-carrito'/>
    </StyledHeader>
  )
}
