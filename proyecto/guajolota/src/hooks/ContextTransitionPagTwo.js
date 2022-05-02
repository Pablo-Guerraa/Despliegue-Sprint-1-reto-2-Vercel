import React, { createContext, useState } from 'react';

export const contextTransitionPagTwo = createContext();

export default function ProviderTransitionPagTwo({ children }) {
  
  const [ transitionPagTwo, setTransitionPagTwo] = useState(false);

  return (
    <contextTransitionPagTwo.Provider value={{ 
      transitionPagTwo,
      setTransitionPagTwo
    }}>
      { children }
    </contextTransitionPagTwo.Provider>
  )
}