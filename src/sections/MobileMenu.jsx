import { FaBriefcase, FaFolderOpen } from 'react-icons/fa'

const MobileMenu = () => {
  return (
    <div className="hidden">
      <ul className="my-5 items-center">
        <li><a href={`#`} className="moblink">About Me</a></li>
        <li><a href={`/projects`} className="moblink"><FaFolderOpen />Projects</a></li>
        <li><a href={`/work_experience`} className="moblink"><FaBriefcase />Work Experience</a></li>
        <li><a href={`/contact_me`} className="moblink">Contact Me!</a></li>
      </ul> 
    </div>
  )
}

export default MobileMenu