import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const Order = () => {
  return (
    <>

    <Navbar/>
    <div className='container w-[1170px] m-auto text-center'>
    <div className=' font-extrabold text-3xl mt-12 animate-bounce'>Let's Order Now</div>
    </div>

    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">PaksWear.Com</h2>
        <h1 class="text-gray-900 text-3xl title-font font-bold mb-4">Order Id # 93258</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <Link href={'/done'}>
            <button class="flex ml-auto md:ml-10 text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded animate-pulse">Order Now</button>
            </Link>
         
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-[30%] md:ml-24 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UL600_FMwebp_QL65_.jpg"/>
    </div>
  </div>
</section>
    <Footer/>

    </>
  )
}

export default Order