import { logo, menu } from "../assets/icons";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <header className="navsect">
        <div className="w-full md:w-[30%] md:ml-0 flex items-center justify-between">
          <Link to='/'>
            <img src={logo} alt="" className="w-[70px]"/>
          </Link>

          <a className="block md:hidden">
            <img src={menu} alt="" className="md:hidden w-8"/>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 text-xl">
          <ul className="hidden md:flex space-x-5">
            <li><HashLink smooth to='/#aboutMe' className="navlink">About Me</HashLink></li>
            <li><HashLink smooth to="/#projects" className="navlink">Projects</HashLink></li>
          </ul>
          <Link to={`/contact-Me`} className="navlink">Contact Me!</Link>
        </nav>
            
     </header>
    </>
  )
}

export default Navbar;