import React from 'react';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-gray-600 to-zinc-300">
        <p className="text-flex font-extrabold text-3xl text-white text-center">
          Coming Soon , Till Then Call Us 9433977100
        </p>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                alt="venue"
                // src="/venue-exterior-front 1.jpg"
                 src = "https://www.bhartics.com/bharticswebred.svg"
                
                width={1400}
                height={10}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="swiper-slide">
              <Image
                alt="venue"
                src="/venue-exterior-front 1.jpg"
                width={1400}
                height={10}
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;