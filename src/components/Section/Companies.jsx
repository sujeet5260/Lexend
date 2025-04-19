import React from 'react';

const companies = [
  { name: 'Alt+Capsule', logo: 'https://lexend-nextjs.vercel.app/assets/images/brands/brand-05.svg' },
  { name: 'LightBox', logo: "https://lexend-nextjs.vercel.app/assets/images/brands/brand-06.svg"},
  { name: 'Capsule', logo: "https://lexend-nextjs.vercel.app/assets/images/brands/brand-01.svg" },
  { name: 'Layers', logo:"https://lexend-nextjs.vercel.app/assets/images/brands/brand-02.svg" },
  { name: 'Polymath', logo: "https://lexend-nextjs.vercel.app/assets/images/brands/brand-03.svg" },
  { name: 'Segment', logo:  "https://lexend-nextjs.vercel.app/assets/images/brands/brand-04.svg"},
];

export default function CompanyLogos() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-20 justify-center items-center  h-25 ">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`
              ${index > 1 ? 'hidden' : 'block'} 
              md:block 
            `}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-32 h-auto object-contain"
            />
          </div>
        ))}
      </div>
       {/* ---------- box-2 ------------ */}
      <div className='my-15 '>
       {/* -------- inner div-1 counter --------- */}

       <div className='text-center'>
       <h2 className='font-bold text-2xl md:text-[1.70rem] lg:font-3xl'>Everything you need is right at your fingertips</h2>
       <p className='text-gray-600 mt-4'>Lexend is designed to make your work life easier and more efficient.</p>
       </div>
       {/* -------- inner div-2 counter --------- */}
       <div className=' flex justify-center mt-15 '>
        <div className=' bg-[#F5EEE9] w-full flex justify-around items-center h-70 sm:h-38 rounded-2xl flex-wrap  md:w-300 md:h-40 lg:h-50   ' >
               <div className='md:flex flex-col justify-center items-center w-40   '>
                <h1 className='text-center font-extrabold  text-[#12715B] text-4xl md:text-[2.60rem] lg:text-5xl Graphik xl:text-6xl'>280+</h1>
                <p className='font-semibold'>Track of leads</p>

               </div>
               <div  className='md:flex flex-col justify-center items-center'>
                <h1 className='text-center font-extrabold  text-[#12715B] text-4xl md:text-[2.60rem] lg:text-5xl Graphik xl:text-6xl'>90%</h1>
                <p className='font-semibold'>satisfied user</p>
               </div>
               <div  className='text-center md:flex flex-col justify-center items-center'>
                <h1 className='font-extrabold  text-[#12715B] text-4xl md:text-[2.60rem] lg:text-5xl Graphik xl:text-6xl'>10.2K</h1>
                <p className='font-semibold'>Team collaboration</p>
               </div>
        </div> 


       </div>
      </div>
    </div>
  );
}
