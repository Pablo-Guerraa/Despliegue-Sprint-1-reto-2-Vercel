import React, { createContext, useState } from 'react';

export const contextCounterSum = createContext();

export default function ProviderCounterSum({ children }) {

  const [ counterSum, setCounterSum ] = useState(1); 

  return (
    <contextCounterSum.Provider value={{ 
      counterSum,
      setCounterSum
    }}>
      { children }
    </contextCounterSum.Provider>
  )
}