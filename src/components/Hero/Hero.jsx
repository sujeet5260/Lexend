import React from 'react';



const Hero = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 gap-8 px-4">
      {/* Heading Section */}
      <div className=' sm:flex flex-col  '>
        <h1 className="Graphik text-[2.4rem] font-extrabold leading-tight sm:text-center  self-center sm:w-full">
          <span className=' sm:block'>Tools that cover</span>  <span className='sm:block'><span className="text-[#12715B] ">all aspects</span> of your growing</span> <span className='sm:block'>business.</span>
        </h1>
        <p className=" text-gray-600 w-full my-5 sm:text-center sm:px-10 ">
          Say goodbye to the hassle of managing multiple software and tools for different tasks. Lexend offers a comprehensive suite of tools that cover all aspects of your business.</p>

        {/* Input  */}
        <div className='sm:flex items-center justify-center gap-3 '>
          
          <input type="email" placeholder='Your Email..' className='bg-white w-full h-12 border-gray-500 rounded-md  pl-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] sm:w-100' />
          <button className='block bg-[#0F604D] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  text-white w-full h-12 rounded-md mt-4 sm:w-25 sm:h-12 sm:mt-0'>Sing up</button>
        </div>
        <p className='text-gray-600 text-center  mt-6 text-sm'>We care about your data in our <span className='text-green-700 underline '>privacy policy</span></p>
      </div>

      {/* right-section */}
      <div> 
        <img src="https://lexend-nextjs.vercel.app/assets/images/template/hero-mockup.png" alt="" className=' object-cover' />
      </div>
    </div>
  );
};

export default Hero;
