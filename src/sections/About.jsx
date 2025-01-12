import { jscript, react, mysql2, nodejs } from '../assets/icons';
import { rating2, rating3 } from '../assets/images';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section id="aboutMe" className="section flex">
        <div className="mx-auto md:w-[80vw] items-center pt-[5%]" >
          <div className="md:w-[80%] mx-auto my-9 md:justify-center">
            <h4 className="text-4xl text-center font-headings">About Me.</h4>
          </div>

          <div className=" md:w-[90%] md:mx-auto md:flex my-9 md:justify-between bg-[#1E201E]"> {/*About Us Upper section container*/}
            <div className="bg-[#B99470] md:w-[35%] p-[15px] rounded-md">
              <h4 className='text-[#04060f] text-2xl text-center font-semibold font-subheading'>Skills</h4>
              <ul className='mx-[20px]'>
                <li className='skill-icon'>
                  <img src={jscript} alt="" width={45}/> <span><img src={rating3} alt="" width={50} /></span>
                </li> 
                <li className='skill-icon'>
                  <img src={react} alt="" width={45}/> <span><img src={rating2} alt="" width={50} /></span>
                </li> 
                <li className='skill-icon'>
                  <img src={mysql2} alt="" width={45}/> <span><img src={rating3} alt="" width={50} /></span>
                </li> 
                <li className='skill-icon'>
                  <img src={nodejs} alt="" width={45}/> <span><img src={rating3} alt="" width={50} /></span>
                </li> 
              </ul>
            </div>
            <div className="md:w-[60%] m-[15px]">
              <div className='my-[25px]'>
                <p className="text-balance font-general">
                  I am a dedicated and passionate individual with a lot of ambitions in the programmming field. As a self-learning developer, I have amassed a wealth of knowledge and skills. Ambitions of understanding how applications work and interact with hardware motivate me to improve on my skills to contribute in the industry&apos;s role of making life easier. I have learned Javascript, Express, MySQL, and React. Aiming to transition into software development, I aim to learn Java.
                </p>
              </div>
              <div className="text-center md:text-end md:mr-5">
                <Link to="/work-experience" className="font-subheading bg-[#B99470] p-[10px] rounded-md">Work experience</Link>
              </div>
            </div>
          </div>
        
        </div>  
      </section>
    </>
  )
}

export default About