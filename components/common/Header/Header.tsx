import React from 'react'
import Navbar from './Navbar'
import { NavProvider } from '@/context/NavContext'

const Header = () => {
  return (
    <header>
      <NavProvider>
      <Navbar />
      </NavProvider>
      
    </header>
  )
}

export default Header