import React from "react";

const Hero = () => {
  return (
    <div className="  w-screen bg-[#F5EEE9] max-h-[44rem] pt-10 lg:flex    ">
      {/* ----- Box-1 ----- */}
      <div className="bg-[#F5EEE9] sm:text-center lg:w-1/2 lg:text-start lg:self-center xl:flex flex-col ">
        <h1 className="Graphik text-[2.40rem] px-4 leading-11  lg:pr-20 xl:text-5xl xl:pr-22 ">
          Tools that cover{" "}
          <span className="sm:block lg:inline">
            <span className="text-[#12715B]">all aspects</span> of your growing
          </span>{" "}
          business.
        </h1>
        <p className="text-gray-600  mt-6 sm:px-14 md:px-33 lg:p-0 lg:pr-0 text-lg ml-5 xl:w-full">
          Say goodbye to the hassle of managing multiple software and tools for
          different tasks. Lexend offers a comprehensive suite of tools that
          cover all aspects of your business.
        </p>

        {/* ----- Input --------- */}
        <div className="text-center mt-10 sm:flex items-center justify-center gap-3 lg:ml-5 ">
          <input
            type="email"
            placeholder="Your Email.."
            className="bg-white w-[90%] h-12 border-gray-500 rounded-md  pl-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] sm:w-99 md:w-80 lg:w-60  xl:w-90"
          />
          <button className="w-[90%] bg-[#0F604D] mt-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  text-white font-semibold  h-12 rounded-md  sm:w-25 md:w-40 xl:text-sm xl:w-35 ">
            <span className="md:hidden">Sing up</span>
            <span className="hidden md:inline">Try it out for free</span>
          </button>
        </div>
        <p className="text-gray-600 mt-5 px-6 text-sm">
          We care about your data in our{" "}
          <span className="text-[#12715B] underline font-semibold">
            privacy policy
          </span>
          .
        </p>
      </div>
      {/* ----- Box-2 ----- */}
      <div className="w-full h-full mt-10  ">
        <img
          className="object-cover xl:w-[44rem] justify-self-end "
          src="https://lexend-nextjs.vercel.app/assets/images/template/hero-mockup.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
