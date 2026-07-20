const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces, wireframes, prototypes, and user experiences that are simple and enjoyable to use."
  },

  {
    icon: "🌐",
    title: "Web Design",
    description:
      "Designing modern, responsive websites and landing pages that communicate your brand effectively."
  },

  {
    icon: "✨",
    title: "Branding & Graphics",
    description:
      "Developing logos, visual identities, and graphics that help businesses create a strong impression."
  },

  {
    icon: "📱",
    title: "Mobile App Design",
    description:
      "Designing mobile experiences with clean layouts, smooth user flows, and engaging interfaces."
  },

  {
    icon: "🤖",
    title: "AI Design Solutions",
    description:
      "Using AI-powered tools and workflows to improve creativity, productivity, and digital solutions."
  },

  {
    icon: "🏛️",
    title: "Architectural Design",
    description:
      "Creating visual concepts and design presentations that bring architectural ideas to life."
  }
]


function Services() {
  return (
    <section 
      id="services"
      className="py-24 bg-[#0B1120]"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-16">

          <p className="text-blue-400 mb-3">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I Do
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            I provide creative design solutions that help
            brands, businesses, and individuals turn ideas
            into meaningful digital experiences.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">


          {services.map((service, index) => (

            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-8
              hover:-translate-y-2
              hover:border-blue-500
              transition
              "
            >

              <div className="text-4xl mb-5">
                {service.icon}
              </div>


              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>


              <p className="mt-4 text-gray-400 leading-relaxed">
                {service.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  )
}


export default Services