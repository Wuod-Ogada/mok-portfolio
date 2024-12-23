import { logo, menu } from "../assets/icons"

const Navbar = () => {
  return (
    <>
      <header className="m-5 mx-auto md:w-[85%] flex justify-between px-[20px] items-center">
        <div className="w-full md:w-[30%] flex items-center justify-between">
          <a>
            <img src={logo} alt="" className="w-[70px]"/>
          </a>

          <a className="block md:hidden">
            <img src={menu} alt="" className="md:hidden w-8"/>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6">
          <ul className="hidden md:flex space-x-5">
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <a href="#contactMe">Contact Me!</a>
        </nav>
            
     </header>
    </>
  )
}

export default Navbar;