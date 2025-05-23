import { NavLink } from "react-router-dom"
import { codingSkills } from "../assets/assets"

const About = () => {

   
  return (
    <>
    <section className="section">
    <div className="md:w-3/4 mx-auto" id="About">
      <div className="">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="md:grid md:grid-cols-3 bg-[#1E201E] w-full">
        <div className="items-center bg-[#B99470] md:col-span-1 p-4">
          <div><h3 className="text-[#04060f] text-center my-4 text-xl font-subheading">SKILLS</h3></div>
          {codingSkills.map((codingskill, index) => (
            <ul key={index} className="m-5 md:w-[80%] mx-auto">
              <li className="flex justify-between">
                <img src={codingskill.image} alt={codingskill.skill} width={43} /> <span><img src={codingskill.level} alt="skill level" width={50}/></span>
              </li>
            </ul>
          ))}
        </div>
        <div className="md:col-span-2 flex flex-col justify-center mx-8 gap-4 ">
          <div>
            <p className="pt-4">
            I am a dedicated and passionate individual with a lot of ambitions in the programmming field. As a self-learning developer, I have amassed a wealth of knowledge and skills. The objective of understanding how applications work and interact with hardware motivate me to improve on my skills to contribute in the industry&apos;s role of improving a user&apos;s experience. I have learned Javascript, Express, MySQL, and React. Aiming to transition into software development, I aim to learn Java.
            </p>
          </div>
          <div className="text-center md:text-end pt-4">
            <NavLink to="/work_experience" onClick={()=> window.scrollTo(0,0)} className="bg-[#B99470] px-[15px] py-3 rounded-md font-subheading">Work Experience</NavLink>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default About