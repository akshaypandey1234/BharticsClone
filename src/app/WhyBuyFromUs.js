import React from 'react';

const WhyBuyFromUs = () => {
  return (
    <div className="text-gray-600 body-font bg-gradient-to-r from-slate-100 to-yellow-50">
      <p className="auto-flex text-center bg-black text-xl font-bold text-stone-900">Why You Buy From Us?</p>
      <div className="container px-5 py-2 mx-auto flex flex-wrap">
        {[
          {
            title: 'Why buy new car from Bhartics?',
            description: 'Get faster delivery, better price, and an amazing delivery experience',
          },
          {
            title: 'Pay after delivery',
            description: 'Bhartics has a cashless or pay after delivery option for selected customers',
          },
          {
            title: 'The Lowest EMI',
            description: 'We have tie-ups with various banks, private and public, to get the best and lowest EMI possible in the market',
          },
          {
            title: 'Best Exchange Price',
            description: 'We know that you have lots of memories with your existing car and you want the person who cares about your car and also provides the best price. We are here.',
          },
        ].map((item, index) => (
          <div key={index} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
              {index + 1}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <img
                  src="/_next/image?url=%2Fvenue-exterior-front%201.jpg&w=96&q=75 1x, /_next/image?url=%2Fvenue-exterior-front%201.jpg&w=256&q=75 2x"
                  srcSet="/_next/image?url=%2Fvenue-exterior-front%201.jpg&w=96&q=75 1x, /_next/image?url=%2Fvenue-exterior-front%201.jpg&w=256&q=75 2x"
                  width="70"
                  height="10"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{item.title}</h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyFromUs;
