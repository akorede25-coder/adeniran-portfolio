function Footer() {
  return (
    <footer className="py-8 bg-[#0B1120] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-white text-xl font-bold">
          Adeniran<span className="text-blue-500">.</span>
        </h3>


        <p className="text-gray-500 mt-3">
          Digital Designer | UI/UX • Web • Branding
        </p>


        <p className="text-gray-600 text-sm mt-5">
          © {new Date().getFullYear()} Adeniran Akorede. All rights reserved.
        </p>


      </div>

    </footer>
  )
}

export default Footer