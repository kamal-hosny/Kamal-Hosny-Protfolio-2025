import { FacebookIcon, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between ">
          
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="https://www.linkedin.com/in/kamal-hosny-681068295/" target="_blank">
              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10 hover:bg-emerald-400 hover:text-white">
                <Linkedin />
              </span>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100076564117070" target="_blank">
              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10 hover:bg-emerald-400 hover:text-white">
                <FacebookIcon />
              </span>
            </Link>
            <Link href="https://github.com/kamal-hosny" target="_blank">
              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10 hover:bg-emerald-400 hover:text-white">
                <Github />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer