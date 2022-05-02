import React, { createContext, useState } from 'react';

export const contextArrProducts = createContext();

export default function ProviderArrProducts({ children }) {

  const [ arrProducts, setArrProducts ] = useState([]); 

  return (
    <contextArrProducts.Provider value={{ 
      arrProducts,
      setArrProducts
    }}>
      { children }
    </contextArrProducts.Provider>
  )
}
