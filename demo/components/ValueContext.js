import React, { useState, useContext, createContext } from "react";

export const ValueContext = createContext(null)

export const ValueProvider = ({value, children}) => {
  const [input,setInput] = useState('');
  const [inputs,setInputs] = useState([]);
  const [input2,setInput2] = useState('');
  const [inputs2,setInputs2] = useState([]);
  return (
    <ValueContext.Provider
        value={{input, setInput, inputs, setInputs, input2, setInput2, inputs2, setInputs2 }} >
      {children}

    </ValueContext.Provider>
    
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)