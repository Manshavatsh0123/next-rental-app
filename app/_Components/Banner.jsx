'use client';

import React from 'react';
import Image from 'next/image';
import { CarTaxiFront, FilePenLine, Handshake, HousePlus } from 'lucide-react';

const Banner = () => {
  return (
    <div className='container mx-auto px-4 py-12 mb-2'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">

        {/* Left Section */}
        <div className="flex flex-col items-start justify-center px-4 py-12 max-w-lg">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Find Your Perfect <span className="text-blue-600">Home</span> with Ozalams
          </h1>


          <p className="text-sm text-gray-500 max-w-md mb-10">
            Discover your dream property with our comprehensive search tools and expert guidance.
            Start your journey to finding the perfect place to call home.
          </p>


          <div className="flex items-center gap-10 mb-12">
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/house.png" alt="Trusted Partner" width={60} height={60} />
              <p className="mt-2 text-sm font-medium">Trusted Partner</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/house (1).png" alt="Verified Listings" width={60} height={60} />
              <p className="mt-2 text-sm font-medium">Verified Listings</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/assets/residential.png" alt="24/7 Support" width={60} height={60} />
              <p className="mt-2 text-sm font-medium">24/7 Support</p>
            </div>
          </div>

          <form className="w-full" action="#" method='post'>
            <label htmlFor="property-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="property-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter location, property type..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>


        {/* Right Section */}
        <div className=" relative flex flex-col gap-4">

          <div className="absolute top-10 left-10 group">
  <div className="bg-gray-100/50 rounded-xl p-1 shadow-md w-[168px] transition-transform duration-300 group-hover:scale-105">
    <div className="w-40 bg-gradient-to-r from-primary to-blue-500 border-4 border-white shadow-lg rounded-xl p-4">
      <h1 className="text-xl text-center text-white font-semibold tracking-wide">
        Super Sale$
      </h1>
    </div>
  </div>
</div>



          <div className="absolute -right-2 top-40 w-64 space-y-4 bg-white/10 p-5 rounded-2xl backdrop-blur-lg border border-white/20">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border hover:shadow-xl transition duration-300">
              <Handshake size={28} className="bg-primary text-white p-2 rounded-md" />
              <h1 className="text-gray-800 text-sm font-semibold">Paid Partnership</h1>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border hover:shadow-xl transition duration-300">
              <HousePlus size={28} className="bg-primary text-white p-2 rounded-md" />
              <h1 className="text-gray-800 text-sm font-semibold">Best Tour It</h1>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border hover:shadow-xl transition duration-300">
              <FilePenLine size={28} className="bg-primary text-white p-2 rounded-md" />
              <h1 className="text-gray-800 text-sm font-semibold">Get Down Payment</h1>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border hover:shadow-xl transition duration-300">
              <CarTaxiFront size={28} className="bg-primary text-white p-2 rounded-md" />
              <h1 className="text-gray-800 text-sm font-semibold">Largest Rental</h1>
            </div>
          </div>


          <div className="mx-auto">
            <img
              src="/assets/home-main1.jpg"
              alt="Home"
              width={500}
              height={500}
              className="object-cover object-center rounded-t-full px-10"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner
