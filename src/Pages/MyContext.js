import React, { createContext, useState } from 'react'

const ContextStore = createContext()

function MyContext({children}) {
    const [click, setClick] = useState(10)
  return (
    <ContextStore.Provider value={{click, setClick}}>
       {children}
    </ContextStore.Provider>
    
  )
}

export {ContextStore}
export default MyContext
