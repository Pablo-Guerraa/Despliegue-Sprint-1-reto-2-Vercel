import React, { useEffect, useState } from 'react'
import { StyledContainer } from '../Styles/StyledContainer'
import { StyledCopo } from '../Styles/StyledCopoNieve'
import Content from './Content'
import FooterNav from './Footernav'


export default function Main() {
  const [ array, setArray ] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

  useEffect(()=> {
    
  }, [array])

  return (
    <StyledContainer >
      {
        array.map((element, index) => {
          let positionX = Math.random() * 100;
          let positionY = Math.random() * 500;
          return(
            
          <StyledCopo key={index} positionWidth={positionX} positionHeight={positionY} />
        )})
      }
      <Content/>
      <FooterNav/>
    </StyledContainer>
  )
}
