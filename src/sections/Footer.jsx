import { logo } from "../assets/icons"

const Footer = () => {
  return (
  <>
  <section>
    <div className="md:flex md:w-[85%] md:h-[15vh] items-center justify-between mx-auto">
          <div className="footers">Year</div>
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