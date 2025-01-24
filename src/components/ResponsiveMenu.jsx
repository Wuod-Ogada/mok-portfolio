import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';


const ResponsiveMenu = ({ openMenu, setIsMenuOpen }) => {
  return (
    
    <AnimatePresence>
      {openMenu && (
          <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          >

            <div className="absolute w-[90%] left-5 flex items-center justify-center bg-[#B99470] py-5 rounded-md text-xl transition-all duration-300 ">
              <ul className=" flex flex-col justify-center items-center gap-4 ">
                <li><NavHashLink smooth to="/#about_me" onClick={()=> setIsMenuOpen(false)}>About</NavHashLink></li>
                <li><NavLink to="/work_experience" onClick={()=> setIsMenuOpen(false)}>Work Experience</NavLink></li>
                <li><NavHashLink smooth to="/#projects" onClick={()=> setIsMenuOpen(false)}>Projects</NavHashLink></li>
                <li><NavHashLink smooth to="/#contact_me" onClick={()=> setIsMenuOpen(false)}>Contact Me!</NavHashLink></li>
              </ul>
            </div> 

          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

ResponsiveMenu.propTypes ={
  openMenu: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
}

export default ResponsiveMenu