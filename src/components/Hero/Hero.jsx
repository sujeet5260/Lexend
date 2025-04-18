import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F5EEE9] w-full overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col xl:flex-row xl:items-center xl:justify-between">
        {/* ----- Content Section ----- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl leading-tight lg:text-7xl font-bold">
            Tools that cover{" "}<br/>
            <span className="sm:block lg:inline">
              <span className="text-emerald-700">all aspects</span> of your growing
            </span>{" "}
            business.
          </h1>
          <p className="text-gray-600 mt-6 mx-auto sm:px-8 lg:px-0 lg:pr-12 text-lg max-w-2xl lg:max-w-none">
            Say goodbye to the hassle of managing multiple software<br/> and tools for
            different tasks. Lexend offers a comprehensive<br/> suite of tools that
            cover all aspects of your business.
          </p>

          {/* ----- Input Form ----- */}
          <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-3">
            <input
              type="email"
              placeholder="Your Email.."
              className="bg-white w-full sm:w-80 h-12 rounded-md pl-4 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="w-full sm:w-auto bg-emerald-800 mt-3 sm:mt-0 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-emerald-700 transition-colors">
              <span className="md:hidden">Sign up</span>
              <span className="hidden md:inline">Try it out for free</span>
            </button>
          </div>
          <p className="text-gray-600 mt-5 text-sm">
            We care about your data in our{" "}
            <span className="text-emerald-700 underline font-semibold hover:text-emerald-600 cursor-pointer">
              privacy policy
            </span>
            .
          </p>
        </div>

        {/* ----- Image Section ----- */}
        <div className="w-full lg:w-1/2 mt-10 xl:mt-0">
          <img
            className="w-full md:w-[1000px] object-cover max-w-2xl mx-auto xl:max-w-none"
            src="https://lexend-nextjs.vercel.app/assets/images/template/hero-mockup.png"
            alt="Platform mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;