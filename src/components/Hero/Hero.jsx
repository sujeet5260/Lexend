import React from 'react';



const Hero = () => {
  return (
    <div className='w-screen bg-[#F5EEE9] xl:h-[40rem] '>
      <div className="container mx-auto pt-10 grid grid-cols-1 gap-8 px-4 bg-[#F5EEE9]  lg:grid-cols-2">
      {/* Heading Section */}
      <div className=' sm:flex flex-col lg:pb-10  '>
        <h1 className="Graphik text-[2.4rem] font-extrabold leading-tight sm:text-center  self-center sm:w-full lg:text-start [&>*]:inline lg:pr-35 xl:text-6xl xl:pr-20">
          <span className=' sm:block '>Tools that cover</span>  <span className='sm:block  '><span className="text-[#12715B] lg:inline ">all aspects</span> of your growing</span> <span className='sm:block '>business.</span>
        </h1>
        <p className=" text-gray-600 w-full my-5 sm:text-center sm:px-10 md:pl-30 lg:pl-0 lg:pr-15 lg:text-start text-lg leading-7  ">
          Say goodbye to the hassle of managing multiple software and tools for different tasks. Lexend offers a comprehensive suite of tools that cover all aspects of your business.</p>

        {/* Input  */}
        <div className='sm:flex items-center justify-center gap-3 lg:justify-start mt-2 '>
          
          <input type="email" placeholder='Your Email..' className='bg-white w-full h-12 border-gray-500 rounded-md  pl-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] sm:w-100 md:w-90 lg:w-61' />
          <button className='block bg-[#0F604D] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  text-white w-full h-12 rounded-md mt-4 sm:w-25 sm:h-12 sm:mt-0 md:w- lg:w-40 font-semibold '>Try it out for free</button>
        </div>
        <p className='text-gray-600 text-center  mt-6 text-sm lg:text-start'>We care about your data in our <span className='text-green-700 underline '>privacy policy</span></p>
      </div>

      {/* right-section-image */}
      <div className=' '> 
        <img src="https://lexend-nextjs.vercel.app/assets/images/template/hero-mockup.png" alt="" className=' object-cover h-[37.5rem] ' />
      </div>
    </div>
    </div>
  );
};

export default Hero;
