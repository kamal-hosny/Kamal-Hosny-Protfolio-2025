"use client"
import { AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react'
import NavbarFixed from './NavbarFixed';
import NavbarDefault from './NavbarDefault';

const Navbar = () => {
  const [isScrollPast, setIsScrollPast] = useState<boolean>(false);

  const handleScroll = () => {
    if(window.screenY >= 400) {
      setIsScrollPast(true)
      console.log("Scrolled Past");
    } else {
      setIsScrollPast(false)
      console.log("Not Past");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? (<NavbarFixed />) : (<NavbarDefault />)}
      </AnimatePresence>
    </>
  )
}

export default Navbar