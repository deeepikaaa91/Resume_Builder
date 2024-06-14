import React, { createContext, useState } from 'react'

const ContextStore = createContext()
function Mycontext({children}) {
    const[click,setClick] = useState(0)
    
  return (
    <ContextStore.Provider value={{click,setClick}}>{children}</ContextStore.Provider>
  )
}
export {ContextStore}
export default Mycontext