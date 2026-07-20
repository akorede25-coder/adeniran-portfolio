function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#111827]"
    >

      <div className="max-w-5xl mx-auto px-6 text-center">


        <p className="text-blue-400 mb-3">
          Contact
        </p>


        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let's Create Something Great Together
        </h2>


        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project idea, need a new design, or want to
          improve your digital presence? I'd love to hear about it.
        </p>


        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">


         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=akorede.adeniran2022@gmail.com"
  className="
  bg-blue-600
  hover:bg-blue-700
  text-white
  px-8
  py-3
  rounded-full
  transition
  "
>
  Start a Project
</a>

         <a
  href="https://www.linkedin.com/in/akorede-adeniran"
  target="_blank"
  rel="noopener noreferrer"
  className="
  border
  border-white/20
  hover:bg-white/10
  text-white
  px-8
  py-3
  rounded-full
  transition
  "
>
  Connect on LinkedIn
</a>


        </div>


      </div>


    </section>
  )
}

export default Contact