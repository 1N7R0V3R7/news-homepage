import React, { createContext, useState } from 'react'

export const ToggleContext = createContext()

function ToggleProvider({children}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function toggleSidebar() {
    setIsSideBarOpen(prev => !prev)
  }

  return (
    <ToggleContext.Provider value={[isSideBarOpen, toggleSidebar]}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleProvider;