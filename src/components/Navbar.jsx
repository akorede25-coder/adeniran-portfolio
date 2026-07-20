import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        <h1 className="text-xl font-bold text-white">
          Adeniran<span className="text-blue-500">.</span>
        </h1>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>

          <a href="#portfolio" className="hover:text-blue-400 transition">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>


        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition inline-block"
          >
            
            Hire Me
          </a>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>


        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#0B1120] p-6 flex flex-col gap-5 md:hidden">

           <a
  href="#about"
  onClick={() => setOpen(false)}
  className="text-gray-300"
>
  About
</a>

           <a
  href="#services"
  onClick={() => setOpen(false)}
  className="text-gray-300"
>
  Services
</a>

          <a
  href="#portfolio"
  onClick={() => setOpen(false)}
  className="text-gray-300"
>
  Portfolio
</a>

<a
  href="#contact"
  onClick={() => setOpen(false)}
  className="text-gray-300"
>
    Contact
</a>


          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar