import React, { createContext, useState } from 'react';

export const contextCurrentIndex = createContext();

export default function ProviderCurrentIndex({ children }) {

  const [ currentIndex, setCurrentIndex ] = useState(0); 

  return (
    <contextCurrentIndex.Provider value={{ 
      currentIndex,
      setCurrentIndex
    }}>
      { children }
    </contextCurrentIndex.Provider>
  )
}