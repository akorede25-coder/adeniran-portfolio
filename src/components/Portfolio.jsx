import foodDelivery from "../assets/projects/food-delivery.png"
import paymentSystem from "../assets/projects/payment-system.png"
import gadgetsa from "../assets/projects/gadgetsa-website.png"
import finance from "../assets/projects/finance-website.png"
import fashionSale from "../assets/projects/fashion-sale.png"
import christmasPoster from "../assets/projects/christmas-food-poster.png"
import { useState } from "react"

const projects = [
  {
    title: "Food Delivery App",
    category: "UI/UX Design",
    image: foodDelivery,
    description:
      "A mobile food ordering experience designed for smooth navigation and easy checkout.",
    tools: "Figma",
    goal:
      "Create a simple and enjoyable food ordering experience for users.",
    process:
      "User flow planning → Wireframes → Interface design → Prototype",
    outcome:
      "Designed a clean ordering experience with a focus on speed and usability."
  },

  {
    title: "Digital Payment System",
    category: "UI/UX Design",
    image: paymentSystem,
    description:
      "A modern payment platform interface focused on simplicity and usability.",
    tools: "Figma",
    goal:
      "Design a secure and easy-to-use digital payment experience.",
    process:
      "Research → User flow → UI design → Prototype",
    outcome:
      "Created a simple payment interface that improves user confidence."
  },

  {
    title: "Gadgetsa Website",
    category: "Web Design",
    image: gadgetsa,
    description:
      "An e-commerce website concept designed for better product discovery.",
    tools: "Figma",
    goal:
      "Create a modern shopping experience for electronic products.",
    process:
      "Layout planning → Visual design → Responsive web concept",
    outcome:
      "Developed a clean product-focused website concept."
  },

  {
    title: "Finance Website",
    category: "Web Design",
    image: finance,
    description:
      "A clean finance website concept designed to communicate trust and clarity.",
    tools: "Figma",
    goal:
      "Design a trustworthy and professional finance platform.",
    process:
      "Research → Structure planning → UI design",
    outcome:
      "Created a clear interface focused on readability and trust."
  },

  {
    title: "Fashion Sales Campaign",
    category: "Graphic Design",
    image: fashionSale,
    description:
      "A promotional campaign design created to attract attention and increase engagement.",
    tools: "Figma / Canva",
    goal:
      "Create a visually appealing promotional design for a fashion brand.",
    process:
      "Concept creation → Visual direction → Poster design",
    outcome:
      "Produced a bold promotional design suitable for marketing campaigns."
  },

  {
    title: "Christmas Food Campaign",
    category: "Graphic Design",
    image: christmasPoster,
    description:
      "A festive promotional design created for a food business campaign.",
    tools: "Figma / Canva",
    goal:
      "Design an engaging seasonal advertisement for a food business.",
    process:
      "Creative planning → Layout design → Final artwork",
    outcome:
      "Delivered a festive promotional design focused on customer attention."
  }
]


function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)


  return (

    <section
      id="portfolio"
      className="py-24 bg-[#111827]"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-16">

          <p className="text-blue-400 mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            A collection of UI/UX designs, branding projects,
            web experiences, and creative solutions.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {projects.map((project,index)=>(

            <div
              key={index}
              className="
              group
              bg-white/5
              border
              border-white/10
              rounded-2xl
              overflow-hidden
              hover:border-blue-500
              hover:-translate-y-2
              transition
              "
            >


              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={()=>setSelectedImage(project.image)}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-300
                  "
                />

              </div>



              <div className="p-6">


                <p className="text-blue-400 text-sm">
                  {project.category}
                </p>


                <h3 className="text-xl font-semibold text-white mt-2">
                  {project.title}
                </h3>


                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>


                <p className="text-sm text-gray-500 mt-4">
                  Tools: {project.tools}
                </p>


                <button
                  onClick={()=>setSelectedProject(project)}
                  className="
                  mt-5
                  text-blue-400
                  hover:text-blue-300
                  "
                >
                  View Project →
                </button>


              </div>

            </div>

          ))}


        </div>

      </div>




      {selectedImage && (

        <div
          className="
          fixed
          inset-0
          bg-black/80
          z-50
          flex
          items-center
          justify-center
          p-6
          "
          onClick={()=>setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />

        </div>

      )}






      {selectedProject && (

        <div
          className="
          fixed
          inset-0
          bg-black/80
          z-50
          flex
          items-center
          justify-center
          p-6
          "
        >

          <div
            className="
            bg-[#111827]
            max-w-xl
            w-full
            rounded-2xl
            p-8
            text-white
            "
          >

            <button
              onClick={()=>setSelectedProject(null)}
              className="float-right text-2xl"
            >
              ×
            </button>


            <h2 className="text-3xl font-bold">
              {selectedProject.title}
            </h2>


            <p className="text-blue-400 mt-2">
              {selectedProject.category}
            </p>


            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                <b className="text-white">
                  Goal:
                </b>
                <br/>
                {selectedProject.goal}
              </p>


              <p>
                <b className="text-white">
                  Process:
                </b>
                <br/>
                {selectedProject.process}
              </p>


              <p>
                <b className="text-white">
                  Outcome:
                </b>
                <br/>
                {selectedProject.outcome}
              </p>


              <p>
                <b className="text-white">
                  Tools:
                </b>
                <br/>
                {selectedProject.tools}
              </p>

            </div>

          </div>

        </div>

      )}


    </section>

  )
}


export default Portfolio