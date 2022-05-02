import React, { createContext, useState } from 'react';

export const contextListCar = createContext();

export default function ProviderListCar({ children }) {

  const [ listCar, setListCar ] = useState(undefined); 

  return (
    <contextListCar.Provider value={{ 
      listCar,
      setListCar
    }}>
      { children }
    </contextListCar.Provider>
  )
}