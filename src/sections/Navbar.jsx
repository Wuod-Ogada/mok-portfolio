import { logo, } from "../assets/icons";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <header className="navsect">
        <div className="w-full md:w-[30%] md:ml-0 flex items-center justify-between">
          <Link to='/'>
            <img src={logo} alt="" className="w-[70px]"/>
          </Link>

          <FaBarsStaggered className="block md:hidden w-10"/>
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