'use client'

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import handler from '../api/page';
import Image from 'next/image';
import { useState } from 'react';

const Products = ({ addToCart }) => {
  const [zipCode, setZipCode] = useState("");
  const [zipStatus, setZipStatus] = useState(false);
  const [zipMessage, setZipMessage] = useState("");

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  const btn_check = () => {
    const matched = handler().includes(zipCode);
    setZipStatus(matched);
    setZipMessage(matched ? 'Congrats! Your zip code is matched' : 'Ops! Your zip code is not matched');
  };
  

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap md:mr-24">
            <Image alt="ecommerce" className="lg:w-[25%] md:mr-36 w-full lg:h-auto h-12 object-cover object-center rounded" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UL600_FMwebp_QL65_.jpg" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">The Kaazi&apos;s</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Full Black T SHirt in the Cotton</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Rating stars */}
                </span>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-900 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button onClick={() => { addToCart(1, 499, 'Wear the code(xl, red)', 'XL', "Red") }} className="flex ml-16 text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to Cart</button>
                <button className=" hover:bg-blue-500  hover:text-white active:text-white rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </button>
              </div>

              <div className='flex mt-6'>
                <input
                  type='text'
                  placeholder='Enter zip code'
                  name='txtzipcode'
                  onChange={handleChange}
                  value={zipCode}
                  className='w-32 p-2 mr-6 border border-gray-400'
                />
                <button
                  type='submit'
                  className='text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'
                  onClick={btn_check}
                >
                  Check
                </button>
              </div>

              {zipCode !== "" && (
                <div className='mt-5 text-red-500'>
                  {zipStatus ? (
                    <div className='mt-5 text-blue-500'>
                      {zipMessage}
                    </div>
                  ) : (
                    <div className='mt-5 text-red-500'>
                      {zipMessage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;