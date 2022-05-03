import React, { useState } from 'react'
import { StyledCancelarFilter, StyledContent, StyledSearch, TitleMain } from '../Styles/StyledContent'
import Category from './Category'
import ContainerFilter from './ContainerFilter'

export default function Content() {

  const [ activeFilter, setActiveFilter ] = useState(true);
  const [ capturedInput, setCapturedInput ] = useState('')

  const changeInput = (e) => {
    setActiveFilter(false);
    const captured = e.target.value;
    setCapturedInput(captured)
  }

  return (
    <StyledContent>
      {
        activeFilter && <TitleMain>Nada como una Guajolota para empezar el día</TitleMain>

      }
      <StyledSearch activeFilter={activeFilter} onChange={(e)=>changeInput(e)} type="text" placeholder='Sabor de guajolota, bebida...' />
      {
        !activeFilter && <StyledCancelarFilter onClick={()=>setActiveFilter(true)}>Cancelar</StyledCancelarFilter> 
      }
      {
        activeFilter ? <Category /> : <ContainerFilter capturedInput={capturedInput}/>
      }
      
      
    </StyledContent>
  )
}
