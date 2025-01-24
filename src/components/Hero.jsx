import { useNavigate } from "react-router-dom";
import { laki11 } from "../assets/assets";

const Hero = () => {

  const navigate = useNavigate();

  return (
   <>
    <section className="section ">
      <div className="md:w-[90%] md:mx-auto md:flex justify-between md:h-[70vh]">
        <div className="mx-5 flex flex-col justify-center md:w-[60%] gap-5 mb-[20px]">
          <div className="flex items-end">
            <h3 className="pr-[5px] text-3xl font-extra">Hello,</h3> <span className="text-4xl font-heading">Welcome!</span>
          </div>
          <div className="md:w-[90%]">
           <p className="text-2xl">I&apos;m Ouma Klinsmann, a Full-stack Web developer, dedicated to designing and building modern scalable applications.</p>
          </div>
          <button onClick={()=> navigate('/define_the_project')} className="bg-[#B99470] w-[130px] py-3 rounded-md">Work With Me!</button>
          
        </div>
        <div className="md:w-1/3 bg-[#B99470] flex ">
          <img src={laki11} alt="" className="object-cover md:ml-[-50%]" />
        </div>
      </div> 
    </section>
   </>
  )
}

export default Hero