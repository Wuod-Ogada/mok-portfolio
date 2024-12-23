import apps from '../apps.json'

const Projectsandapps = () => {
  return (
  <section id="projects" className='md:h-[80vh] py-[25px]'>
    <div className='md:w-[90%] mx-auto'>
      <div >
        <h2 className='text-center text-4xl pb-5'>Projects</h2>
      </div>
      {/* project cards wrapper */}
      <div  className='md:flex gap-4'> {/* bg-[`url(${require('{app.image}')})`] */}
        {apps.map((app, index) => (
          <div key ={index} className=' p-[15px] ' >
            {/* style={{ backgroundImage: `url(/images/${app.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} */}
            <div className=''>
              <img src={`/images/${app.image}`} alt={app.title} className="project-image" /> 
            </div>

            <div className='m-5 bg-[#B6A28E]'>
              <h1>{app.title}</h1>
              <p className="brief-disc">
                {app.about}
              </p>
              <div>
                <a> Read more...</a>
              </div>
            </div>

            <div className="hidden"> {/* modal - show onclick*/}
              <div>
                <h4>{app.title}</h4> <a href="">closing Icon</a>
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