import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { url } from '../Helpers/url';
import { contextArrProducts } from '../hooks/ContextArrProducts';
import ItemCategory from './ItemCategory';
import NavbarCategory from './NavbarCategory';

export default function Category() {

  const { setArrProducts } = useContext(contextArrProducts)

  useEffect(()=> {
    getApi()
  }, [])

  const getApi = async() => {
    const res = await axios.get(url);
    setArrProducts(res.data); 
  }
  
  return (
    <BrowserRouter>
      <NavbarCategory/>
      <Routes>
        <Route path='/' element={ <ItemCategory conditional={'guajolota'} /> }/>
        <Route path='/bebidas' element={ <ItemCategory conditional={'bebida'} /> }/>
        <Route path='/tamales'element={ <ItemCategory conditional={'tamal'} /> }/>
      </Routes>
    </BrowserRouter>
  )
}
