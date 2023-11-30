import React from 'react';
import Link from 'next/link';

const TopSellingCars = () => {
  const cars = [
    {
      name: 'HYUNDAI i20',
      image:
        'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/i20/Hyundai-i20-premium-hatchback-Exterior-Mid-Front-1-revised.jpg',
      description: 'Description for HYUNDAI i20',
    },
    {
      name: 'HYUNDAI VENUE',
      image:
        'https://bharticspublic.s3.ap-south-1.amazonaws.com/Hyundaic+car+photo/Venue/venue-exterior-front++red+(1).jpg',
      description: 'Description for HYUNDAI VENUE',
    },
    {
      name: 'Hyundai Nios i10',
      image:
        'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Grand-i10-Nios/Exterior/pc/Ext_1120x600.jpg',
      description: 'Description for Hyundai Nios i10',
    },
    // Add more cars as needed
  ];

  return (
    <div className="bg-slate-100">
      {/* ... (existing code) */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {cars.map((car, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link legacyBehavior href={`/car/${index}`} passHref>
                    <a>
                      <img
                        className="lg-h-48 md-h-36 w-full object-cover object-center"
                        src={car.image}
                        alt={car.name}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          NEW CAR
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {car.name}
                        </h1>
                        <p className="leading-relaxed mb-3">{car.description}</p>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                          View Details
                        </button>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSellingCars;
