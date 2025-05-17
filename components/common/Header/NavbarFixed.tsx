import { useNavContext } from "@/context/NavContext"
import { motion } from "framer-motion"
import { FiMenu } from "react-icons/fi"

const navVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    y: -50, 
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" }
  }
}

const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'projects', name: 'My Projects' },
    { id: 'client', name: 'OurClient' },
    { id: 'contact', name: 'Contact' }
  ]

const NavbarFixed = () => {
    const { openMobileMenu } = useNavContext()
  return (
    <motion.div
    variants={navVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed z-[999] top-4 inset-x-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl mx-2 md:mx-0">
          <div className="flex justify-between items-center p-2">
            {/* Logo */}
            <div className="pl-4">
              <span className="text-lg font-bold  text-white bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text">
                Kamal.
              </span>
            </div>
            <button 
            className="md:hidden p-2 cursor-auto text-gray-300 hover:text-primary-400 transition-colors"
            onClick={openMobileMenu}
          >
            <FiMenu className="w-6 h-6" />
          </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              <ul className="flex items-center gap-1 text-sm font-medium text-white">
                {navItems.map((item) => (
                  <li key={item?.id}>
                    <a 
                      href={`${item?.id}`} 
                      className="px-4 py-2 hover:text-primary-400 transition-colors duration-300"
                    >
                      {item?.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="ml-4">
                <button
                onClick={() =>{
                    const link = document.createElement('a');
                    link.href = '/pdf/Kamal-Hosny-CV.pdf';
                    link.download = 'cv.pdf';
                    link.click();
                }}
                className="px-6 py-2 cursor-pointer bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text font-bold bg-primary-500 rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NavbarFixed