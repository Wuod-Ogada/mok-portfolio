import { logo } from "../assets/icons"

const Footer = () => {
  return (
  <>
  <section className="md:flex md:items-center">
       <div className="md:flex md:w-[85%] md:h-[25vh] justify-between mx-auto my-[25px]">
          <div className="footers">&#169; <span>2024</span></div>
          <div className="footers">Web Developer & Full-stack Developer</div>
          <div className="footers">
            <img src={logo} alt="" className="w-[70px]"/>
          </div>
        </div>
    </section>  
  </>
  )
}

export default Footer