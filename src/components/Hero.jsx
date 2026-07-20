import { motion } from "framer-motion"
import profileImage from "../assets/adeniran-photo.jpg"

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>


      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 text-lg mb-4">
            👋 Hi, I'm
          </p>


          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Adeniran
            <br />
            <span className="text-blue-500">
              Akorede
            </span>
          </h1>


         <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
  UI/UX Designer | Web & App Designer | Digital Creative
</h2>


          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            I design digital experiences, websites, mobile apps,
and brand identities that help businesses communicate,
connect with users, and grow online.
          </p>


          <div className="mt-8 flex gap-4">

           <a
  href="#portfolio"
  className="
  bg-blue-600
  hover:bg-blue-700
  text-white
  px-6
  py-3
  rounded-full
  transition
  inline-block
  relative
  z-10
  "
>
  View My Work
</a>

           <a
  href="#contact"
  className="
  border
  border-white/20
  text-white
  px-6
  py-3
  rounded-full
  hover:bg-white/10
  transition
  inline-block
  "
>
  Let's Work Together
</a>
          </div>


          <div className="mt-8 flex gap-6 text-sm text-gray-400">

           <span>
  🎨 UI/UX Design
</span>

<span>
  🌐 Web & App Design
</span>

<span>
  ✨ Brand Design
</span>

          </div>


        </motion.div>


        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

           <div className="
w-72
h-72
md:w-96
md:h-96
rounded-full
bg-gradient-to-br
from-blue-500
to-cyan-400
p-1
shadow-2xl
shadow-blue-500/30
">

              <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center">

               <img
  src={profileImage}
  alt="Adeniran Akorede"
 className="
w-full
h-full
rounded-full
object-cover
object-center
  "
/>
              </div>

            </div>


            <div className="absolute -top-5 -right-5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl text-white">
              UI Design
            </div>


            <div className="absolute bottom-5 -left-10 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl text-white">
              Branding
            </div>


          </div>


        </motion.div>


      </div>

    </section>
  )
}

export default Hero