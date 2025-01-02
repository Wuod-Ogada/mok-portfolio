import { laki22 } from '../assets/images'

const Hero = () => {
  return (
    <>
    <section className="section md:h-[60vh] items-center bg-[#]">
      <div className=" md:grid md:grid-cols-3 md:w-[90vw] mx-auto">
        <div className="my-[10%] mx-7 md:items-center md:col-span-2 md:mr-[40px]">
          <p className="text-[60px] font-headings">
            HELLO!
          </p>
          <p className="text-[30px] font-subheading ">
            I&apos;m Klinsmann Ouma, a Fullstack web Developer.
          </p>
          <p className='font-general py-2 my-4 '>
            I build scalable web applications intended to bolster productivity and simplify tasks!
          </p>
          <div className=''>
            <a href="" className='font-subheading bg-[#B99470] p-[10px] rounded-md'>Work with Me!</a> 
            {/* Let&apos;s work together */}
          </div>
        </div>

        <div className="bg-[#B99470] md:mt-[8%]">
          <img src={laki22} alt="" className='md:ml-[-50%]' />
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Hero