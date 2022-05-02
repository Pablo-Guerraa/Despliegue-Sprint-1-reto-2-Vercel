import React, { createContext, useState } from 'react';

export const contextObjProduct = createContext();

export default function ProviderObjProduct({ children }) {

  const [ objProduct, setObjProduct ] = useState({}); 

  return (
    <contextObjProduct.Provider value={{ 
      objProduct,
      setObjProduct
    }}>
      { children }
    </contextObjProduct.Provider>
  )
}