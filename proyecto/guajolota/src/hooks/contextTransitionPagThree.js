import React, { createContext, useState } from 'react';

export const contextTransitionPagThree = createContext();

export default function ProviderTransitionPagThree({ children }) {
  
  const [ transitionPagThree, setTransitionPagThree] = useState(false);

  return (
    <contextTransitionPagThree.Provider value={{ 
      transitionPagThree,
      setTransitionPagThree
    }}>
      { children }
    </contextTransitionPagThree.Provider>
  )
}