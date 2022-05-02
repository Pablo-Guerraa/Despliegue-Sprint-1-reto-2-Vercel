import React from 'react'
import { StyledImgBack } from '../Styles/StyledPagTwo'

export default function ImgBack({setTransitionPag}) {
  return (
    <>
      <StyledImgBack onClick={()=> setTransitionPag(false)} src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1651075283/Sprint-2-Proyecto/Vector_1_tf3bkc.png" alt="botón-atras" />
    </>
  )
}
