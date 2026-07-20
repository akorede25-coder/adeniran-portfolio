function About() {
  return (
    <section 
      id="about" 
      className="py-24 bg-[#111827]"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        {/* Left Side */}
        <div>

          <p className="text-blue-400 mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Designing ideas into meaningful experiences
          </h2>


          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I'm Adeniran Akorede, a Digital Designer specializing
in UI/UX, web design, mobile experiences, branding,
and creative solutions. I combine design thinking
with modern tools to create experiences that are
visually engaging and user-focused.
          </p>


          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            My experience covers user interface design, web and
            mobile app design, branding, graphics, and creative
            digital solutions. I combine design thinking with
            modern tools and AI-powered workflows to create
            effective solutions.
          </p>


          <a
  href="/Adeniran-Akorede-CV.pdf"
  download
  className="
  bg-blue-600
  hover:bg-blue-700
  text-white
  px-6
  py-3
  rounded-full
  transition
  inline-block
  "
>
  Download CV
</a>

        </div>


        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">


          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              10+
            </h3>

            <p className="text-gray-400 mt-2">
              Design Projects
            </p>

          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              5+
            </h3>

            <p className="text-gray-400 mt-2">
              Design Fields
            </p>

          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              100%
            </h3>

            <p className="text-gray-400 mt-2">
              Creative Focus
            </p>

          </div>


          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              AI
            </h3>

            <p className="text-gray-400 mt-2">
              Certified Skills
            </p>

          </div>


        </div>


      </div>

    </section>
  )
}

export default About