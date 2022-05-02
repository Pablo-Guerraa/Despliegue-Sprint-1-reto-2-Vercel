import React from 'react'
import { Styledontent, StyledSearch, TitleMain } from '../Styles/StyledContent'
import Category from './Category'

export default function Content() {
  return (
    <Styledontent>
      <TitleMain>Nada como una Guajolota para empezar el día</TitleMain>
      <StyledSearch type="text" placeholder='Sabor de guajolota, bebida...'/>
      <Category />
    </Styledontent>
  )
}
