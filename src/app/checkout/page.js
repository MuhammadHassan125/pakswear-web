import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const Checkout = () => {
  return (
    <div>
      <Navbar/>
      <div className='containerw w-[1170px] m-auto text-center pt-6'>
        <div className=' font-bold text-3xl mt-4 mb-12'>Checkout </div>

        <div className='flex '>

        <label for="name" class="leading-7 text-sm text-gray-600 mr-4 font-bold">Name:</label>
        <input type="text" id="name" name="name" className="w-[450px] bg-white rounded border border-gray-300 mr-72 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

        <label for="name" class="leading-7 text-sm text-gray-600 mr-4 font-bold">Phone:</label>
        <input type="text" id="name" name="name" className="w-[450px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

        </div>

        <div className='flex mt-8 '>

        <label for="name" class="leading-7 text-sm text-gray-600 mr-6 font-bold">City:</label>
        <input type="text" id="name" name="name" className="w-[450px]  bg-white rounded border border-gray-300 mr-72 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

        <label for="name" class="leading-7 text-sm text-gray-600 mr-4 font-bold">zipCode:</label>
        <input type="text" id="name" name="name" className="w-[450px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

        </div>

        <div class=" text-left font-bold mb-4 mt-10">
        <label for="message" class="leading-7 text-sm text-gray-600">Your Address:</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>

      <Link href={'/order'}>
        <button class="text-white p-20 bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Pay</button>
      </Link>


      </div>
      <Footer/>
      </div>

  )
}

export default Checkout