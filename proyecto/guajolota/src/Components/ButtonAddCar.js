import React, { useContext } from 'react'
import { contextCounterSum } from '../hooks/ContextCounterSum'
import { contextListCar } from '../hooks/ContextListCar';
import { contextObjProduct } from '../hooks/ContextObjProduct';
import { StyledButtonAddCar } from '../Styles/StyledButtonAddCar'

export default function ButtonAddCar() {

  const { counterSum } = useContext(contextCounterSum);
  const { objProduct } = useContext(contextObjProduct);
  const { listCar, setListCar } = useContext(contextListCar);

  const addCar = () => {

    let objCar = {
      name: objProduct.nombre,
      product: objProduct,
      amount: counterSum 
    };
    if(listCar === undefined){
      const copyObjCar = [objCar]
      setListCar(copyObjCar);
    } else {
      const noRepeat = ( listCar.filter(element => element.name === objProduct.nombre) ).length;
      if(noRepeat === 0) {
        const copyListCar = [...listCar, objCar]
        setListCar(copyListCar);
      } else {
        const copyListCar = [...listCar];
        const indexObjCar = copyListCar.findIndex(element => element.name === objProduct.nombre);
        objCar = {
          name: objProduct.nombre,
          product: objProduct,
          amount: counterSum + copyListCar[indexObjCar].amount
        };
        copyListCar.splice(indexObjCar, 1, objCar);
        setListCar(copyListCar)
      }
    };
  }
    
    return (
    <StyledButtonAddCar onClick={()=>addCar()}>
      <span>Agregar { counterSum } al carrito</span> 
      <span>${ (counterSum *  objProduct.precio).toFixed(2)}</span>
    </StyledButtonAddCar>
  )
}

