import React from 'react'
import {PiCoatHangerBold} from 'react-icons/pi'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaRupeeSign} from 'react-icons/fa'
import Image from 'next/image'

const Herosec = () => {
  return (
    <div>
      {/* <Image width={1552} height={100} src="/hero.jpg"></Image> */}
      <section className="text-gray-600 body-font overflow-hidden -mb-8">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h2 className="text-gray-900 text-3xl title-font font-medium mt-3 animate-pulse">Welcome</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 animate-bounce">To The PaksWear.Com</h1>

        
        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        
        <div className="flex items-start">
          <button className="flex text-left text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded animate-pulse">Order Now</button>
        
        </div>
      </div>
      <Image alt="ecommerce" className="lg:w-1/2 w-full animate-pulse lg:h-auto h-64 object-cover object-center rounde
      d" src="https://st4.depositphotos.com/12731704/22577/i/450/depositphotos_225774704-stock-photo-family-shopping-clothes-looking-happy.jpg"/>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Best Selling Products</h1>
        <div className="h-1 w-20 bg-blue-800 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image className="h-[50vh] rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/7137s2W7rUL._AC_UL600_FMwebp_QL65_.jpg" alt="content"/>
          
        </div>
      </div>
      
      <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
        <div className="bg-gray-100 hover:bg-slate-300 p-6 rounded-lg">
          <Image className="h-[50vh] rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/61KtrldtmeL._AC_UL600_FMwebp_QL65_.jpg" alt="content"/>
          
        </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
        <div className="bg-gray-100 hover:bg-slate-300 p-6 rounded-lg">
          <Image className="h-[50vh] rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71BbvBnsVkL._AC_UL600_FMwebp_QL65_.jpg" alt="content"/>
          
        </div>
      </div>

      <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
        <div className="bg-gray-100 hover:bg-slate-300 p-6 rounded-lg">
          <Image className="h-[50vh] rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/71A-czu4m1L._AC_UL600_FMwebp_QL65_.jpg" alt="content"/>
          
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900 animate-ping">What you&apos;ll get?</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
            <TbTruckDelivery/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
          <p className="leading-relaxed text-base">We ship all over India for FREE.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
            <PiCoatHangerBold/>
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium Tshirts</h2>
          <p className="leading-relaxed text-base">Our T-Shirts are 100% made of cotton.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
            <FaRupeeSign/>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Exciting Offers</h2>
          <p className="leading-relaxed text-base">We provide amazing offers on our products.</p>
        </div>
      </div>
    
      
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Authentic Cliche Forage</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Coloring Book Ethical</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Typewriter Polaroid Cray</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Pack Truffaut Blue</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">The Catcher In The Rye</span>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg animate-pulse">Button</button>
  </div>
</section>
    </div>

  )
}

export default Herosec