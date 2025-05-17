"use client"
import { AnimatePresence } from 'framer-motion'
import NavbarFixed from './NavbarFixed'
import NavbarDefault from './NavbarDefault'
import MobileMenu from './MobileMenu'
import { useEffect, useState, useCallback } from 'react'

const Navbar = () => {
  const [isScrollPast, setIsScrollPast] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrollPast(window.scrollY >= 400)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <AnimatePresence mode="wait">
        {isScrollPast ? <NavbarFixed key="fixed" /> : <NavbarDefault key="default" />}
      </AnimatePresence>
      
      <MobileMenu />
    </>
  )
}

export default Navbar