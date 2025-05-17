
"use client" 

import React, { createContext, useContext, useState } from 'react'

type NavContextType = {
  isMobileMenuOpen: boolean
  openMobileMenu: () => void
  closeMobileMenu: () => void
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = () => setIsMobileMenuOpen(true)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <NavContext.Provider value={{ isMobileMenuOpen, openMobileMenu, closeMobileMenu }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavContext = () => {
  const context = useContext(NavContext)
  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider')
  }
  return context
}