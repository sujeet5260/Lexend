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
      <div className="flex flex-wrap gap-5 justify-center">
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
    </div>
  );
}
