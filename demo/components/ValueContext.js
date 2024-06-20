import React, { useState, useContext, createContext } from "react";

export const ValueContext = createContext(null)

export const ValueProvider = ({value, children}) => {
  const [input,setInput] = useState('');
  const [inputs,setInputs] = useState([]);
  return (
    <ValueContext.Provider
        value={{input, setInput, inputs, setInputs }} >
      {children}

    </ValueContext.Provider>
    
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)