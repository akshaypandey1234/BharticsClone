import React from 'react';

const CarSelectionBanner = () => {
  return (
    <div className="text-slate-900 bg-gradient-to-r from-white-500 to-pink-500 body-font">
      <section>
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Not Sure What Car To Buy?
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-xl">Perfect</p>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded">
                I'm flexible
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarSelectionBanner;
