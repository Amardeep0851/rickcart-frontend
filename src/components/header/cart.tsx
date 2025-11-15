import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"
import React from 'react'

function Cart() {
  return (
    <div className="relative w-3.5 h-8 cursor-pointer order-4 ">
      <div className=" bg-rose-800 text-white rounded-md text-center text-sm absolute w-4 h-4 left-1 -top-1 align-top flex justify-center items-center">4</div>
      <ShoppingCart className="size-5 absolute top-1.5" />
    </div>
  )
}

export default Cart