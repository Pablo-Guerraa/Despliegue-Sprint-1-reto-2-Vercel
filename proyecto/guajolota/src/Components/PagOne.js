import React, { useState } from 'react';
import { StyledPagOne} from '../Styles/StyledPagOne';
import Content from './Content';
import Header from './Header';

export default function PagOne() {

  return (
      <StyledPagOne>
        <Header/>
        <Content />
      </StyledPagOne>
  )
}