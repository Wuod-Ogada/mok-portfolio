import { logo, menu } from "../assets/icons";
import MobileMenu from "./MobileMenu";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className="navsect">
        <div className="w-full md:w-[30%] md:ml-0 flex items-center justify-between">
          <a>
            <img src={logo} alt="" className="w-[70px]"/>
          </a>

          <a className="block md:hidden">
            <img src={menu} alt="" className="md:hidden w-8"/>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 text-xl">
          <ul className="hidden md:flex space-x-5">
            <li><Link to={`#aboutMe`} className="navlink">About Me</Link></li>
            <li><Link to="#projects" className="navlink">Projects</Link></li>
          </ul>
          <Link to="/contact-Me" className="navlink">Contact Me!</Link>
        </nav>
            
     </header>

     <MobileMenu />
    </>
  )
}

export default Navbar;