import { FiMenu } from "react-icons/fi"
import { useNavContext } from "../../../context/NavContext"
import DownloadCv from "../DownloadCv"

const NavbarDefault = () => {
  const { openMobileMenu } = useNavContext()

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'projects', name: 'My Projects' },
    { id: 'client', name: 'OurClient' },
    { id: 'contact', name: 'Contact' }
  ]

  return (
    <nav className="relative z-50 bg-gradient-to-b from-black/30 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold  text-[#e4e4e7] bg-gradient-to-r  from-primary-400 to-primary-600 bg-clip-text">
              Kamal.
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center gap-1 text-[#e4e4e7] font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="px-4 py-2 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item.name} 
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-6">
              <DownloadCv />
            </div>
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-primary-400 transition-colors"
            onClick={openMobileMenu}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDefault