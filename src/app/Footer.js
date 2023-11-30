// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-slate-900 body-font">
      <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">
            <img alt="logo" src="/bharticsweb.svg" width="127" height="10" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
          </a>
          <p className="mt-2 text-sm text-yellow-200">Let's Make Bharat</p>
          <p className="text-sm text-gray-200">Bhartics.com trusted by social influent. We sell new cars of multiple brands and exchange your existing ones. We offer you faster delivery, the best price on your dream new car and the best price on your beloved existing car.</p>
          <div className="text-yellow-500">
            <a href="tel:+919433977100">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
              </svg>
              +919433977100
            </a>
            <p className="text-white text-xm">Bhartics Ecom Services Pvt Ltd</p>
            <p className="text-gray-100 text-xs">Room 103, Floor 1st, P 1, NEW CIT ROAD Kolkata, West Bengal, India- 700073</p>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">Useful-Links</h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a href="/customer_eligibility_criteria" className="text-gray-400 hover:text-white">Eligibility Criteria</a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
                </li>
                <li>
                  <a href="/customer_proceedure him" className="text-gray-400 hover:text-white">Procedure</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">About us</a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-400 hover:text-white">Careers</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">OTHERS</h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a href="/privacy_policy" className="text-gray-400 hover:text-white">Privacy policy</a>
                </li>
                <li>
                  <a href="/terms_of_use" className="text-gray-400 hover:text-white">Terms of Use</a>
                </li>
                <li>
                  <a href="/refund_and_return_policy" className="text-gray-400 hover:text-white">Return Policy</a>
                </li>
                <li>
                  <a href="/prodcut_review_guideline" className="text-gray-400 hover:text-white">Review Guideline</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow-300 tracking-widest text-sm mb-3">Connect</h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a href="/twitter" className="text-gray-400 hover:text-white">Twitter</a>
                </li>
                <li>
                  <a href="/linkedin" className="text-gray-400 hover:text-white">LinkedIn</a>
                </li>
                <li>
                  <a href="/youtube" className="text-gray-400 hover:text-white">YouTube</a>
                </li>
                <li>
                  <a href="/facebook" className="text-gray-400 hover:text-white">Facebook</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Bhartics —
            <a href="/terms_of_use" className="text-gray-500 ml-1">Terms of Use</a>
            <a href="/privacy_policy" className="text-gray-500 ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
