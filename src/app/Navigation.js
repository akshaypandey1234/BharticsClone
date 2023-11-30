
import React from 'react';
import Link from 'next/link';
// import Login from './Login';
// import Link from 'next/link';
// import LoginForm from './components/LoginForm';


const Navigation = () => {
  return (
    <div id="__next">
      <div className="prenav bg-slate-400 space-x-1 text-white relative text-center flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col py-2">
        <div className="logo mx-5 items-center">
          <a href="/">
            <img
              alt="logo"
              // src="/bharticswebred.svg"
              src = "https://www.bhartics.com/bharticswebred.svg"
              width="217"
              height="10"
              decoding="async"
              data-nimg="1"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </a>
        </div>
        <form className="flex items-center py-1">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-yellow-300 text-black text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Search Your Car Here"
              required
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-400 dark:text-yellow-300 hover:text-white dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-yellow-700 rounded-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </form>
        <div className="nav text-center space-x-5 font-bold md:flex-row md:justify-start">
          <Link href="/become_our_partner">Become Our Partner</Link>
          <Link href="/customer_eligibility_criteria">Customer Eligibility Criteria</Link>
          <Link href="/about">About</Link>
          <Link href="tel:+919433977100">Call us 9433977100</Link>
         <Link href='/SignUp'> login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
