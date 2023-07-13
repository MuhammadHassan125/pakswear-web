import Link from 'next/link'
import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const page = () => {
  return (
    <div className='container w-[1170px] m-auto text-center'>
          <div className='w-[30%] m-auto mt-72'>
          <BsFillCheckCircleFill className=' text-4xl m-auto mb-6 text-blue-500'/>
          <p>Congrats! Your order has been placed.</p>

          <Link href={'/'}><p className=' text-blue-500'>click for return back.</p></Link>

          </div>
    </div>
  )
}

export default page