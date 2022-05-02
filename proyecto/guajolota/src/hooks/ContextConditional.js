import React, { createContext, useState } from 'react';

export const contextConditional = createContext();

export default function ProviderConditional({ children }) {

  const [ conditional, setConditional ] = useState('guajolota'); 

  return (
    <contextConditional.Provider value={{ 
      conditional,
      setConditional
    }}>
      { children }
    </contextConditional.Provider>
  )
}