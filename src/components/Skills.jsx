const skills = [
  {
    title: "UI/UX Design",
    items: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Flows"
    ]
  },

  {
    title: "Design Tools",
    items: [
      "Figma",
      "Canva",
      "CorelDRAW",
      "Adobe Creative Tools",
      "Design Software"
    ]
  },

  {
    title: "Digital Design",
    items: [
      "Web Design",
      "Mobile App Design",
      "Brand Identity",
      "Graphics Design",
      "Visual Design"
    ]
  },

  {
    title: "AI Skills",
    items: [
      "AI Workflows",
      "Prompt Design",
      "AI Productivity Tools",
      "Google AI Certification"
    ]
  }
]


function Skills() {
  return (
    <section
      className="py-24 bg-[#0B1120]"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-16">

          <p className="text-blue-400 mb-3">
            Skills
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tools & Expertise
          </h2>


          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Combining design thinking, creative tools,
            and modern technology to create meaningful
            digital experiences.
          </p>

        </div>



        <div className="grid md:grid-cols-4 gap-6">


          {skills.map((skill, index) => (

            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
              "
            >

              <h3 className="text-xl font-semibold text-white mb-5">
                {skill.title}
              </h3>


              <ul className="space-y-3">

                {skill.items.map((item, i) => (

                  <li
                    key={i}
                    className="text-gray-400 flex items-center gap-2"
                  >

                    <span className="text-blue-400">
                      ✓
                    </span>

                    {item}

                  </li>

                ))}

              </ul>


            </div>

          ))}


        </div>


      </div>


    </section>
  )
}


export default Skills