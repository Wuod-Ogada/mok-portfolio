import apps from '../apps.json';
import {Link} from 'react-router';


const Projectsandapps = () => {
  return (
  <section id="projects" className='section md:h-[80vh] py-[25px]'>
    <div className='md:w-[90%] mx-auto'>
      <div >
        <h2 className='text-center text-4xl pb-5 font-headings'>Projects</h2>
      </div>
      {/* project cards wrapper */}
      <div  className='md:flex gap-4'> 
        {apps.map((app, index) => (
          <div key ={index} className=' p-[15px] my-[20px]'  >
            {/* style={{ backgroundImage: `url(./images/${app.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} */}

            <div className=''>
              <img src={`./images/${app.image}`}
                  alt={app.title}
                  className="w-full h-[280px] object-cover rounded-lg" /> 
            </div> 

            <div className='p-5 bg-[#B6A28E] w-full md:rounded-b-md'>
              <h1 className='font-headings text-2xl text-[#021526] font-semibold'>{app.title}</h1>
              <p className="brief-disc font-general">
                {app.about}
              </p>
              <div className='bg-[#9c6e4d] w-full text-center rounded-md'>
                <Link to={`/project/${app.id}`} className=' px-[15px] font-subheading text-[#090f1d] font-semibold text-sm'> Read more</Link>
              </div>
            </div>

            <div className="hidden"> {/* modal - show onclick*/}
              <div>
                <h4>{app.title}</h4> <a href=''>closing Icon</a>
              </div>
              <p className="about-app hidden">
                {app.description}
              </p>
            </div>
         </div>
        )) }
      </div>     
    </div>
  </section>
  )
}

export default Projectsandapps