import { FaBriefcase, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-dom';

const MobMenu = () => {
  return (
    <div className="hidden">
      <ul className="my-5 items-center">
        <li><Link to={`#`} className="moblink">About Me</Link></li>
        <li><Link to={`/projects`} className="moblink"><FaFolderOpen />Projects</Link></li>
        <li><Link to={`/work_experience`} className="moblink"><FaBriefcase />Work Experience</Link></li>
        <li><Link to={`/contact_me`} className="moblink">Contact Me!</Link></li>
      </ul> 
    </div>
  )
}

export default MobMenu