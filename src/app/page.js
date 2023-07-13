"use client"
import { useState, useEffect, } from "react";
import Footer from "../../components/Footer";
import Herosec from "../../components/Herosec";
import Navbar from "../../components/Navbar";
import LoadingBar from 'react-top-loading-bar'


export default function Home() {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    console.log("hey I am a useEffect from _app.js")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))

      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subt = 0;
    for (let i = 0; Object.keys(cart).length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }

    setSubTotal(subt)
  }

  const addToCart = (qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)

  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }


  return (
    <>

      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Herosec cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Footer />

    </>
  )
}
