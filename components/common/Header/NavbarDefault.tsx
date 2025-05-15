const NavbarDefault = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 relative z-[1]">
        <div>
            <h2 className="text-xl text-white font-semibold">Kamal.</h2>
        </div>

        <ul className="flex items-center gap-2 text-[#bdbdc0] font-medium">
            <li>
                <a href="" className="p-3 text- hover:text-white">
                    Home
                </a>
            </li>
            <li>
                <a href="" className="p-3 hover:text-white">
                    Features
                </a>
            </li>
            <li>
                <a href="" className="p-3 hover:text-white">
                    Pricing
                </a>
            </li>
            <li>
                <a href="" className="p-3 hover:text-white">
                    Contact
                </a>
            </li>
        </ul>


    </nav>
  )
}

export default NavbarDefault