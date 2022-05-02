import React, { useContext, useEffect, useState } from 'react'
import { contextListCar } from '../hooks/ContextListCar'
import { StyledDetailCar, StyledItemCar, StyledListCarProducts, StyledTotalPagar } from '../Styles/StyledListCarProducts'
import ContainerItemImg from './ContainerItemImg';

export default function ListCarProducts() {

  const { listCar } = useContext(contextListCar);
  const [ sumaTotal, setSumaTotal ] = useState(0);

  useEffect(() => {
    listCar.forEach(element => {
      setSumaTotal(sumaTotal + element.amount * element.product.precio)
    })  
  }, [listCar])

  return (
    <StyledListCarProducts>
      {
        listCar.map(element => (
          <StyledItemCar key={element.product.id}>
            <ContainerItemImg element={element.product}/>
            <StyledDetailCar>
                <span>{element.name}</span>
                <span>X{element.amount}</span>
            </StyledDetailCar>
            <div>${element.amount * element.product.precio}</div>
          </StyledItemCar>
        ))
      }
      <StyledTotalPagar>
        <span>Total</span>
        <span>${sumaTotal} MXN</span>
      </StyledTotalPagar>

    </StyledListCarProducts>
  )
}
