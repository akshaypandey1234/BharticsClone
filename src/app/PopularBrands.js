import React from 'react';

const PopularBrands = () => {
  return (
    <div className="text-gray-600 bg-gradient-to-r from-slate-50 to-yellow-50 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Popular Brands</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Mentioned brands' dealership has a tie-up with us or is in the process of onboarding.</p>
        </div>
        <div className="flex flex-wrap -m-2 text-center">
          {[
            {
              alt: 'Hyundai',
              src: '/_next/image?url=%2FHyundai-logo-silver-640x401.jpg&w=256&q=75',
              width: 100,
            },
            {
              alt: 'Maruti Suzuki',
              src: '/_next/image?url=%2Fmaruti%20suzuki%20logo.png&w=256&q=75',
              width: 100,
            },
            {
              alt: 'Mahindra',
              src: '/_next/image?url=%2FMahindra-Logo.png&w=256&q=75',
              width: 100,
            },
            {
              alt: 'Honda',
              src: '/_next/image?url=%2Fhonda%20logo.png&w=384&q=75',
              width: 150,
            },
            {
              alt: 'Tata Motors',
              src: '/_next/image?url=%2FTata-Motors.jpg&w=256&q=75',
              width: 75,
            },
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 text-center border-gray-200 px-10 py-6 rounded-lg">
                <img alt={item.alt} src={item.src} width={item.width} height="10" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
