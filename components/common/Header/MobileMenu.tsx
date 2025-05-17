"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import DownloadCv from '../DownloadCv'
import { useNavContext } from '@/context/NavContext'

const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'projects', name: 'My Projects' },
    { id: 'client', name: 'OurClient' },
    { id: 'contact', name: 'Contact' }
  ]

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useNavContext()

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
        key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-12 mx-6 md:mx-2">
              <span className="text-2xl font-bold text-white">Kamal.</span>
              <button 
                onClick={closeMobileMenu}
                className="p-2 text-gray-300 hover:text-primary-400"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item?.id}>
                    <a
                      href={`#${item?.id}`}
                      onClick={closeMobileMenu}
                      className="text-2xl font-medium text-gray-300 hover:text-primary-400 block py-3 transition-colors"
                    >
                      {item?.name}
                    </a>
                  </li>
                ))}
                <li className="mt-12">
                  <DownloadCv  />
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu