import { FaBriefcase, FaFolderOpen } from 'react-icons/fa';
import { Link, HashLink } from 'react-dom';

const Responsivemenu = () => {
  return (
    <div className="">
      <ul className="flex flex-col justify-center items-center gap-3">
        <li><HashLink to={`/#aboutMe`} className="moblink">About Me</HashLink></li>
        <li><HashLink to={`/#projects`} className="moblink"><FaFolderOpen />Projects</HashLink></li>
        <li><Link to={`/work_experience`} className="moblink"><FaBriefcase />Work Experience</Link></li>
        <li><Link to={`/contact_me`} className="moblink">Contact Me!</Link></li>
      </ul> 
    </div>
  )
}

export default Responsivemenu