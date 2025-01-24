 import { NavLink } from "react-router-dom";
import { projectData } from "../assets/assets";

const Projects = () => {
  return (
    <>
    <section className="flex flex-col md:h-[80vh] justify-center">
      <div>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="md:flex gap-5 w-[90%] mx-auto" id="Projects">
        {projectData.map((project, index) => (
          <div key={index} className="py-5">
            <div className="">
              <img src={project.image} alt={project.title} className="h-[280px]" />
            </div>
            <div className="bg-[#B99470] rounded-b-md">
              <div className="project-title"><h2>{project.title}</h2></div>
              <div className="project-intro"><h2>{project.intro}</h2></div>
              <div className="project-button">
                <NavLink to="" className="bg-[#1E201E] px-4 py-[5px] rounded-md">Read More</NavLink>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </section>
    </>
  )
}

export default Projects