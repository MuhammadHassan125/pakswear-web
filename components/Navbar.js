"use client"
import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle  } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import Link from 'next/link'
import { useRef } from 'react'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    console.log(cart, addToCart, removeFromCart, clearCart, subTotal)

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()
    return (


        // main div
        <div className=' flex flex-col md:flex-row md:justify-start justify-center items-center p-3 shadow-md'>
            {/* logo div */}
            <div className='text-3xl font-extrabold text-blue-900 ml-6 mr-5'><Link href={'/'}>PaksWear</Link></div>

            {/* items div */}
            <div className=''>
                <ul className='flex font-bold'>
                    <li className=' ml-3 hover:text-sky-700'><Link href={'/tshirts'}>Tshirts</Link></li>
                    <li className=' ml-3 hover:text-sky-700'><Link href={'/hoodies'}>Hoodies</Link></li>
                    <li className=' ml-3 hover:text-sky-700'><Link href={'/mugs'}>Mugs</Link></li>
                    <li className=' ml-3 hover:text-sky-700'><Link href={'/stickers'}>Stickers</Link></li>
                    <li className=' ml-3 hover:text-sky-700'><Link href={'/contact'}>Contact Us</Link></li>

                </ul>
            </div>

            {/* Auth Btns */}

            <Link href={'/login'}>
            <div className='absolute right-0 top-2 mx-16 text-2xl md:mt-3'>
                <button> <MdAccountCircle className=' hover:text-sky-700'/>
                </button>
            </div>
            </Link>

            {/* Cart Btnb */}
            <div className='absolute right-0 top-2 mx-8 text-2xl md:mt-3'>
                <button onClick={toggleCart}> <HiOutlineShoppingCart className='hover:text-sky-700' />
                </button>
            </div>

            {/* Side Cart is starting here */}
            <div ref={ref} className='SideCart absolute top-0 right-0 bg-blue-200 w-72 h-[100vh] text-center transform transition translate-x-full'>
                <h2 className='font-bold mt-4 mb-4'>Your Cart Is Here!</h2>
                <div className=' absolute top-2 right-2 text-2xl cursor-pointer' onClick={toggleCart}><AiFillCloseCircle /></div>

                <ol className='list-decimal flex mb-6 mt-5'>

                <div className='flex font-bold'>
                    <li className='mr-2 ml-6'>Full Black Tshirt</li>
                    <li>58$</li>
                </div>

                    {cart && Object.keys(cart).length === 0 && (
                        <div className='text-center mx-14 my-4 font-normal'>
                            {/* No items are in the cart. */}
                        </div>
                    )}
                    {cart &&
                        Object.keys(cart).map((k) => {
                            return (
                                <li key={k}>
                                    <div className='item flex'>
                                        <div className='w-48'>{cart[k].name}</div>
                                        {/* Additional code for displaying other properties */}
                                    </div>
                                </li>
                            );
                        })}
                </ol>



                <div className='flex'>
                    <button onClick={clearCart} className="flex ml-8 text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Clear All</button>

                    <Link href={'/checkout'}>
                    <button className="flex ml-4 text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Checkout</button>
                    </Link>

                </div>
            </div>


        </div>
    )
}

export default Navbar