import DownloadCv from "../DownloadCv"

const NavbarDefault = () => {
  return (
    <nav className="relative z-[1]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5 mx-6">
          <div>
            <h2 className="text-xl text-white font-semibold">Kamal.</h2>
          </div>

          <ul className="flex items-center gap-2 text-[#bdbdc0] font-medium">
            <li>
              <a href="" className="p-3 hover:text-white">
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
            <DownloadCv />
          </ul>
     
        </div>
      </div>
    </nav>
  )
}

export default NavbarDefault